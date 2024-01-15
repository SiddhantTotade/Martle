import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    unsetUserInfo: (state) => {
      state.id = initialState.id;
      state.email = initialState.email;
      state.name = initialState.name;
    },
  },
});

export const { setUserInfo, unsetUserInfo } = userSlice.actions;

export default userSlice.reducer;
