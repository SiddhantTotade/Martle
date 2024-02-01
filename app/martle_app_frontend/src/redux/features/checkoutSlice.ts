import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: false,
  payment: false,
  paymentMethod: "",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutAddress: (state, action) => {
      state.address = action.payload;
    },
    unsetCheckoutAddress: (state) => {
      state.address = initialState.address;
    },
    setCheckoutPayment: (state, action) => {
      state.payment = true;
      state.paymentMethod = action.payload.paymentMethod;
    },
    unsetCheckoutPayment: (state) => {
      state.payment = initialState.payment;
      state.paymentMethod = initialState.paymentMethod;
    },
  },
});

export const {
  setCheckoutAddress,
  unsetCheckoutAddress,
  setCheckoutPayment,
  unsetCheckoutPayment,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
