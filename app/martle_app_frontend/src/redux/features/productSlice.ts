import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCategory {
  data: Array<any>;
  fetched: boolean;
}

interface ProductState {
  [key: string]: ProductCategory;
}

export const initialState: ProductState = {
  new_arrival: {
    data: [],
    fetched: false,
  },
  shop_deals: {
    data: [],
    fetched: false,
  },
  trending_deals: {
    data: [],
    fetched: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (
      state,
      action: PayloadAction<{ category: string; data: Array<any> }>
    ) => {
      const { category, data } = action.payload;
      state[category].data = data;
      state[category].fetched = true;
    },
    unsetProductData: (state, action: PayloadAction<{ category: string }>) => {
      const { category } = action.payload;
      state[category].data = [];
      state[category].fetched = false;
    },
  },
});

export const { setProductData, unsetProductData } = productSlice.actions;

export default productSlice.reducer;
