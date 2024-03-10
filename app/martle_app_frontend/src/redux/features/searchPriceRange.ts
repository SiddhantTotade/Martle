import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initial: "",
  final: "",
};

export const searchProductRangeSlice = createSlice({
  name: "search_product_range",
  initialState,
  reducers: {
    setProductRange: (state, action) => {
      const { initial, final } = action.payload;
      state.initial = initial;
      state.final = final;
    },
    unsetProductRange: (state) => {
      state.initial = initialState.initial;
      state.final = initialState.final;
    },
  },
});

export const { setProductRange, unsetProductRange } =
  searchProductRangeSlice.actions;

export default searchProductRangeSlice.reducer;
