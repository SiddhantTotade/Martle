import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload?.quantity;
    },
    unsetQuantity: (state) => {
      state.quantity = initialState.quantity;
    },
  },
});

export const { setQuantity, unsetQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
