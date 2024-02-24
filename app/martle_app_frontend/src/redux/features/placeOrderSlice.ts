import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  product: "",
  quantity: "",
  product_discounted_price: "",
  product_selling_price: "",
  payment_method: "",
  status: 1,
};

export const placeOrderSlice = createSlice({
  name: "place_order",
  initialState,
  reducers: {
    setAddressId: (state, action) => {
      state.address = action.payload;
    },
    setProductId: (state, action) => {
      state.product = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setProductDiscountedPrice: (state, action) => {
      state.product_discounted_price = action.payload;
    },
    setProductSellingPrice: (state, action) => {
      state.product_selling_price = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.payment_method = action.payload;
    },
    unsetPlaceOrder: (state) => {
      state.address = initialState.address;
      state.product = initialState.product;
      state.quantity = initialState.quantity;
      state.product_discounted_price = initialState.product_discounted_price;
      state.product_selling_price = initialState.product_selling_price;
      state.payment_method = initialState.payment_method;
    },
  },
});

export const {
  setAddressId,
  setProductId,
  setQuantity,
  setProductDiscountedPrice,
  setProductSellingPrice,
  setPaymentMethod,
} = placeOrderSlice.actions;

export default placeOrderSlice.reducer;
