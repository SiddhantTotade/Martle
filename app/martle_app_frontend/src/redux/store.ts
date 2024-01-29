import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./features/authSlice";
import userSlice from "./features/userSlice";
import { authApi } from "./services/authApiSlice";
import { appApi } from "./services/appApiSlice";
import { productSlice } from "./features/productSlice";
import addressSlice from "./features/addressSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    auth: authSlice,
    user: userSlice,
    address: addressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, appApi.middleware),
});

setupListeners(store.dispatch);
