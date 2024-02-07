import { createSlice } from "@reduxjs/toolkit";

interface Product {
  product_discounted_price: number;
  product_selling_price: number;
  quantity: number;
}

interface Quantities {
  [product_id: number]: Product;
}

const initialState: Quantities = {};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const {
        product_id,
        product_discounted_price,
        product_selling_price,
        quantity,
      } = action.payload;

      if (product_id in state) {
        state[product_id].quantity = quantity;
      } else {
        state[product_id] = {
          product_discounted_price,
          product_selling_price,
          quantity,
        };
      }
    },
    unsetQuantity: () => initialState,
  },
});

export const { setQuantity, unsetQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
