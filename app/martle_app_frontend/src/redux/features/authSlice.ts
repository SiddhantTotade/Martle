import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuthentication: (state) => {
      state.isAuthenticated = true;
    },
    unsetUserAuthentication: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUserAuthentication, unsetUserAuthentication } =
  authSlice.actions;

export default authSlice.reducer;
