import { createAsyncThunk} from '@reduxjs/toolkit'
import client from '../../client/client'


// name change
export const NameChangeFunction=createAsyncThunk(
    "NameChangeFunction",
    async (payload) => {
        const response = await client.patch("dj-rest-auth/user/",{
          name: payload.name,
        }, {headers: {Authorization: `Token ${payload.token}`}})
        return response
      }
)


// surname change
export const SurnameChangeFunction=createAsyncThunk(
    "SurnameChangeFunction",
    async (payload) => {
        const response = await client.patch("dj-rest-auth/user/",{
          surname: payload.surname,
        }, {headers: {Authorization: `Token ${payload.token}`}})
        return response
      }
)


// phone change
export const PhoneChangeFunction=createAsyncThunk(
    "PhoneChangeFunction",
    async (payload) => {
        const response = await client.patch("dj-rest-auth/user/",{
          phone_number: payload.phone,
        }, {headers: {Authorization: `Token ${payload.token}`}})
        return response
      }
)


// image change
export const ImageChangeFunction=createAsyncThunk(
    "ImageChangeFunction",
    async (payload) => {
        const response = await client.patch("dj-rest-auth/user/",payload.form_data, {headers: {Authorization: `Token ${payload.token}`, 'Content-Type': 'multipart/form-data'}})
        return response
      }
)


// password change
export const PasswordChangeFunction=createAsyncThunk(
    "PasswordChangeFunction",
    async (payload) => {
        const response = await client.post("dj-rest-auth/password/change/",
        {
          old_password: payload.data.passwordInput,
          new_password1: payload.data.newPasswordInput,
          new_password2: payload.data.confirmPasswordInput
        }, 
        {headers: {Authorization: `Token ${payload.token}`}})
        return response
      }
)

export const MyAccountActions = {
    NameChangeFunction,
    SurnameChangeFunction,
    PhoneChangeFunction,
    ImageChangeFunction,
    PasswordChangeFunction
}