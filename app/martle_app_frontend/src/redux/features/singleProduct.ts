import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  slug: "",
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setProducts: (state, action) => {},
  },
});
