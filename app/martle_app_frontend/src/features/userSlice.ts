import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  name: "",
  is_verified: "",
};

export const userSlice = createSlice({
  name: "user_info",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.is_verified = action.payload.is_verified;
    },
    unsetUserInfo: (state) => {
      state.id = initialState.id;
      state.email = initialState.email;
      state.is_verified = initialState.is_verified;
    },
  },
});

export const { setUserInfo, unsetUserInfo } = userSlice.actions;

export default userSlice.reducer;
