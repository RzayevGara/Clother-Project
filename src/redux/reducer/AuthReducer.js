import {createSlice } from '@reduxjs/toolkit'
import {authActions} from '../actions/AuthActions'

const {
  SignUpFunction,
  LoginFunction,
  Logout,
  PasswordResetFunction,
  ConfirmPasswordResetFunction,
  TestToken
}= authActions

const initialState = { 
  loading: false,
  myAccountLoading: false,
  signErrorMessage: "",
  loginErrorMessage: "",
  passwordResetErrorMessage: "",
  user: "",
  token: localStorage.getItem("customer_token") || null,
  mailSent: false,
  passwordChange: false,
}


export const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setMailSentStatus: (state) => {
        state.mailSent=false;
      },
      setUser: (state, action) => {
        state.user = action.payload
      }
    },
    extraReducers: {
      //sign-up status
      [SignUpFunction.pending]: (state) => {
          state.loading=true;
      },
      [SignUpFunction.rejected]: (state)=>{
          state.loading=false;
          state.signErrorMessage = "A user is already registered with this e-mail address."
      },
      [SignUpFunction.fulfilled]: (state, {payload})=>{
          state.loading=false;
          state.signErrorMessage = ""
          state.token = payload.data.key
      },


      //login status
      [LoginFunction.pending]: (state) => {
          state.loading=true;
      },
      [LoginFunction.rejected]: (state)=>{
          state.loading=false;
          state.loginErrorMessage = "Your email or password are incorrect."
      },
      [LoginFunction.fulfilled]: (state, {payload})=>{
          state.loading=false;
          state.loginErrorMessage = ""
          state.token = payload.data.key
      },


      //logout status
      [Logout.fulfilled]: (state, {payload})=>{
        if(payload.statusText==="OK"){
          localStorage.removeItem('customer_token')
          state.token = ""
        }
      },


      //test token status
      [TestToken.pending]: (state)=>{
        state.myAccountLoading = true
      },
      [TestToken.fulfilled]: (state, {payload})=>{
        state.user = payload
        state.myAccountLoading = false
      },
      [TestToken.rejected]: (state)=>{
        localStorage.removeItem('customer_token')
        state.token = ""
        state.myAccountLoading = false
      },


      //password reset status
      [PasswordResetFunction.pending]: (state)=>{
        state.loading=true;
      },
      [PasswordResetFunction.rejected]: (state)=>{
        state.loading=false;
        state.passwordResetErrorMessage="Email not fount";
      },
      [PasswordResetFunction.fulfilled]: (state)=>{
        state.loading=false;
        state.mailSent=true;
        state.passwordResetErrorMessage="";
      },


      //confirm password reset status
      [ConfirmPasswordResetFunction.pending]: (state)=>{
        state.loading=true;
      },
      [ConfirmPasswordResetFunction.fulfilled]: (state)=>{
        state.loading=false;
        state.passwordChange=true;
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setMailSentStatus, setUser} = AuthReducer.actions
  
  export default AuthReducer.reducer