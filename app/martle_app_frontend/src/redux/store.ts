import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import authSlice from "./features/authSlice";
import userSlice from "./features/userSlice";
import addressSlice from "./features/addressSlice";
import quantitySlice from "./features/quantitySlice";
import { authApi } from "./services/authApiSlice";
import { appApi } from "./services/appApiSlice";
import { productSlice } from "./features/productSlice";
import checkoutSlice from "./features/checkoutSlice";
import favoriteAndCartSlice from "./features/favoriteAndCartSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    auth: authSlice,
    user: userSlice,
    address: addressSlice,
    quantity: quantitySlice,
    checkout: checkoutSlice,
    favorite_cart: favoriteAndCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, appApi.middleware),
});

setupListeners(store.dispatch);
