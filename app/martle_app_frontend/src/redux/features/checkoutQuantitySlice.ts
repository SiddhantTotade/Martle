import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutQuantityState {
  productQuantity: { product_id: number; product_quantity: number }[];
}

const initialState: CheckoutQuantityState = {
  productQuantity: [],
};

export const checkoutQuantitySlice = createSlice({
  name: "checkout_quantity",
  initialState,
  reducers: {
    setCheckoutQuantity: (
      state,
      action: PayloadAction<{ product_id: number; product_quantity: number }>
    ) => {
      const { product_id, product_quantity } = action.payload;

      const existingProduct = state.productQuantity.findIndex(
        (item) => item.product_id === product_id
      );

      if (existingProduct !== -1) {
        state.productQuantity[existingProduct].product_quantity =
          product_quantity;
      } else {
        state.productQuantity.push({ product_id, product_quantity });
      }
    },
    unsetCheckoutQuantity: (state) => {
      state.productQuantity = initialState.productQuantity;
    },
  },
});

export const { setCheckoutQuantity, unsetCheckoutQuantity } =
  checkoutQuantitySlice.actions;

export default checkoutQuantitySlice.reducer;
