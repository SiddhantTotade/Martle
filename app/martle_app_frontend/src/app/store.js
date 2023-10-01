import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthAPI } from "../services/userAuthAPI";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";
import { allProductAPI } from "../services/homeAPIs";
import { favoriteAPI } from "../services/favoriteService";
import { cartAPI } from "../services/cartService";
import { productAPI } from "../services/productAPIs";
import { ratingAndReviewAPI } from "../services/ratingAndReview";
import { questionAndAnswerAPI } from "../services/questionAndAnswer";

export const store = configureStore({
  reducer: {
    [userAuthAPI.reducerPath]: userAuthAPI.reducer,
    [allProductAPI.reducerPath]: allProductAPI.reducer,
    [favoriteAPI.reducerPath]: favoriteAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
    [ratingAndReviewAPI.reducerPath]: ratingAndReviewAPI.reducer,
    [questionAndAnswerAPI.reducerPath]: questionAndAnswerAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    auth: authSlice,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthAPI.middleware,
      allProductAPI.middleware,
      favoriteAPI.middleware,
      cartAPI.middleware,
      ratingAndReviewAPI.middleware,
      questionAndAnswerAPI.middleware,
      productAPI.middleware
    ),
});

setupListeners(store.dispatch);
