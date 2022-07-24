import { createAsyncThunk} from '@reduxjs/toolkit'
import client from '../../client/client'

// sign-up thunk
export const SignUpFunction=createAsyncThunk(
    "signUpFunction",
    async (data) => {
        const response = await client.post("dj-rest-auth/registration/",{
          name: data.nameInput,
          surname: data.surnameInput,
          email: data.emailInput,
          password1: data.passwordInput,
          password2: data.confirmPasswordInput,
          phone_number: data.phoneInput
        })
        localStorage.setItem('customer_token', response.data.key)
        return response
      }
)


// login thunk
export const LoginFunction=createAsyncThunk(
    "loginFunction",
    async (data) => {
      const response = await client.post("dj-rest-auth/login/",{
        email: data.emailInput,
        password: data.passwordInput,
      })
      localStorage.setItem('customer_token', response.data.key)
      return response;
  }
      
)


// logout thunk
export const Logout=createAsyncThunk(
    "logoutFunction",
    async () => {
      const response=await client.post("dj-rest-auth/logout/",
      {
        headers: {
          Authorization : `Token ${localStorage.getItem("customer_token")}`
        }
      })
      return response;
      }
)


// password reset thunk
export const PasswordResetFunction = createAsyncThunk(
  'passwordResetFunction',
  async (data) => {
    const response = await client.post('dj-rest-auth/password/reset/custom/', {
      email: data.emailInput
    })
    return response;
  }  
)


// confirm password reset thunk
export const ConfirmPasswordResetFunction = createAsyncThunk(
  'confirmPasswordResetFunction',
  async ({data, uid, token}) => {
    const response = await client.post('dj-rest-auth/password/reset/confirm/', {
      "new_password1": data.passwordInput,
      "new_password2": data.confirmPasswordInput,
      "uid": uid,
      "token": token
    })
    return response;
  }
)



// test token thunk for confirm user
export const TestToken=createAsyncThunk(
    "testToken",
      async () => {
        const response=await client.get("users/user/",
        {
          headers: {
            Authorization : `Token ${localStorage.getItem("customer_token")}`
          }
        })
        return response.data;
        }
)

export const authActions = {
    SignUpFunction,
    LoginFunction,
    Logout,
    PasswordResetFunction,
    ConfirmPasswordResetFunction,
    TestToken
}