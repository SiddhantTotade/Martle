import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: "",
  cart: "",
  favoriteToUser: {},
  cartToUser: {},
};

export const favoriteAndCartSlice = createSlice({
  name: "favorite_cart",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favorite = action.payload.favorite;
      state.favoriteToUser = action.payload.favoriteToUser;
    },
    unsetFavorite: (state) => {
      state.favorite = initialState.favorite;
      state.favoriteToUser = initialState.favoriteToUser;
    },
    setCart: (state, action) => {
      state.cart = action.payload.cart;
      state.cartToUser = action.payload.cartToUser;
    },
    unsetCart: (state) => {
      state.cart = initialState.cart;
      state.cartToUser = initialState.cartToUser;
    },
  },
});

export const { setFavorite, unsetFavorite, setCart, unsetCart } =
  favoriteAndCartSlice.actions;

export default favoriteAndCartSlice.reducer;
