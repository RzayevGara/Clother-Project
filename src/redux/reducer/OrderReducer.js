import { createSlice } from "@reduxjs/toolkit";
import { orderActions } from "../actions/OrderActions";

const { MyOrderFunction } = orderActions;

const initialState = {
    loading: "",
    orderMenuLoading: false,
    orderData: null
};

export const OrderReducer = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action) =>{
            state.loading = action.payload
        }
    },
    extraReducers: {
        [MyOrderFunction.pending]: (state)=>{
            state.orderMenuLoading= true
            state.orderData = null
        },
        [MyOrderFunction.fulfilled]: (state, {payload})=>{
            state.orderData = payload.data
            state.orderMenuLoading= false
        },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setLoading} = OrderReducer.actions
  
  export default OrderReducer.reducer