import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingName: false,
    loadingSurname: false,
    loadingPhone: false,
    loadingImage: false,
    loadingPassword: false
};

export const MyAccountReducer = createSlice({
    name: 'myAccount',
    initialState,
    reducers: {
        setLoadingName: (state, action) =>{
            state.loadingName = action.payload
        },
        setLoadingSurname: (state, action) =>{
            state.loadingSurname = action.payload
        },
        setLoadingPhone: (state, action) =>{
            state.loadingPhone = action.payload
        },
        setLoadingImage: (state, action) =>{
            state.loadingImage = action.payload
        },
        setLoadingPassword: (state, action) =>{
            state.loadingPassword = action.payload
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setLoadingName, setLoadingSurname, setLoadingPhone, setLoadingImage, setLoadingPassword} = MyAccountReducer.actions
  
  export default MyAccountReducer.reducer