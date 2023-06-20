import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthAPI } from "../services/userAuthAPI";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";
import { allProductAPI } from "../services/allProducts";

export const store = configureStore({
  reducer: {
    [userAuthAPI.reducerPath]: userAuthAPI.reducer,
    [allProductAPI.reducerPath]: allProductAPI.reducer,
    auth: authSlice,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthAPI.middleware,
      allProductAPI.middleware
    ),
});

setupListeners(store.dispatch);
