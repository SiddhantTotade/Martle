import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, authLoading: true };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuthentication: (state) => {
      state.isAuthenticated = true;
      state.authLoading = false;
    },
    unsetUserAuthentication: (state) => {
      state.isAuthenticated = false;
      state.authLoading = true;
    },
  },
});

export const { setUserAuthentication, unsetUserAuthentication } =
  authSlice.actions;

export default authSlice.reducer;
