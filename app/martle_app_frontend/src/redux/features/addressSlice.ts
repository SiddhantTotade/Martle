import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  address: "",
  locality: "",
  city: "",
  state: "",
  country: "",
  zipcode: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.id = action.payload?.id;
      state.address = action.payload?.address;
      state.locality = action.payload?.locality;
      state.city = action.payload?.city;
      state.state = action.payload?.state;
      state.country = action.payload?.country;
      state.zipcode = action.payload?.zipcode;
    },
    unsetAddress: (state) => {
      state.id = initialState.id;
      state.address = initialState.address;
      state.locality = initialState.locality;
      state.city = initialState.city;
      state.state = initialState.state;
      state.country = initialState.country;
      state.zipcode = initialState.zipcode;
    },
  },
});

export const { setAddress, unsetAddress } = addressSlice.actions;

export default addressSlice.reducer;
