import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  martle_bank: "",
  martle_pay: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { martle_bank, martle_pay } = action.payload?.martlet || "";
      state.id = action.payload?.id;
      state.email = action.payload?.email;
      state.name = action.payload?.name;
      state.martle_bank = martle_bank;
      state.martle_pay = martle_pay;
    },
    unsetUserInfo: (state) => {
      state.id = initialState.id;
      state.email = initialState.email;
      state.name = initialState.name;
      state.martle_bank = initialState.martle_bank;
      state.martle_pay = initialState.martle_pay;
    },
  },
});

export const { setUserInfo, unsetUserInfo } = userSlice.actions;

export default userSlice.reducer;
