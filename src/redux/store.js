import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from './reducer/AuthReducer'
import PartnersReducer from './reducer/PartnersReducer'
import QuizReducer from './reducer/QuizReducer'
import OrderReducer from './reducer/OrderReducer'
import MyAccountReducer from './reducer/MyAccountReducer'


export const store =configureStore({
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
        serializableCheck:false,
    }),
    reducer:{
        auth: AuthReducer,
        partners: PartnersReducer,
        quiz: QuizReducer,
        order: OrderReducer,
        myAccount: MyAccountReducer
    }
})