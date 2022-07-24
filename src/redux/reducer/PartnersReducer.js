import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../client/client'

export const PartnersFunction=createAsyncThunk(
    "partnersFunction",
    async () => {
        const response = await client.get("core/partner-logos/")
        return response
      }
)


const initialState = { 
  partnersLogo: "",
  loading: true
}

export const AuthReducer = createSlice({
    name: 'partners',
    initialState,
    extraReducers: {
      [PartnersFunction.fulfilled]: (state, {payload})=>{
          state.partnersLogo = payload.data
      },
    }
  })
  
  export default AuthReducer.reducer