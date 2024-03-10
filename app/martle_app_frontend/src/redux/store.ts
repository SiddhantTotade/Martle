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
import checkoutProductDataSlice from "./features/checkoutProductDataSlice";
import checkoutQuantitySlice from "./features/checkoutQuantitySlice";
import placeOrderSlice from "./features/placeOrderSlice";
import searchProductRangeSlice from "./features/searchPriceRange";

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
    checkout_product_data: checkoutProductDataSlice,
    chekout_quantity: checkoutQuantitySlice,
    place_order: placeOrderSlice,
    search_product_range: searchProductRangeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, appApi.middleware),
});

setupListeners(store.dispatch);
