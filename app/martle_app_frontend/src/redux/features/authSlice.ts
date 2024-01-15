import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: 0,
  refresh: 0,
  isAuthnticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken: (state) => {
      state.isAuthnticated = true;
    },
    unsetUserToken: (state) => {
      state.isAuthnticated = false;
    },
  },
});

export const { setUserToken, unsetUserToken } = authSlice.actions;

export default authSlice.reducer;
