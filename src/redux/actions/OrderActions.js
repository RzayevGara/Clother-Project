import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client/client";

// order now
const OrderNowFunction = createAsyncThunk("OrderNowFunction", async (token) => {
  const response = await client.post(
    "core/orders/",
    {},
    { headers: { Authorization: `Token ${token}` } }
  );
  return response;
});


// my order
const MyOrderFunction = createAsyncThunk("OrderNowFunction", async (token) => {
  const response = await client.get(
    "core/my-orders/",
    { headers: { Authorization: `Token ${token}` } }
  );
  return response;
});

export const orderActions = {
  OrderNowFunction,
  MyOrderFunction
};
