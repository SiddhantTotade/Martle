import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/api/";

export const appApi = createApi({
  reducerPath: "appAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: PATH,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (payload) => ({
        url: `all-products/${payload.category}/`,
        method: "GET",
      }),
    }),
    productBySlug: builder.query({
      query: (payload) => ({
        url: `product/${payload}/`,
        method: "GET",
      }),
    }),
    productForPlaceOrder: builder.query({
      query: (payload) => ({
        url: `product-for-place-order/${payload}/`,
        method: "GET",
      }),
    }),
    saveRatingAndReview: builder.mutation({
      query: (payload) => ({
        url: `product/ratingandreview/${payload.product}/`,
        method: "POST",
        body: payload,
      }),
    }),
    getRatingAndReview: builder.query({
      query: (payload) => ({
        url: `product/ratingandreview/${payload}`,
        method: "GET",
      }),
    }),
    saveQuestionAndAnswer: builder.mutation({
      query: (payload) => ({
        url: `product/questionandanswer/${payload.product}/`,
        method: "POST",
        body: payload,
      }),
    }),
    getQuestionAndAnswer: builder.query({
      query: (payload) => ({
        url: `product/questionandanswer/${payload.id}/`,
        method: "GET",
        body: payload,
      }),
    }),
    getAddress: builder.query({
      query: () => ({
        url: "address/",
        method: "GET",
      }),
    }),
    saveAddress: builder.mutation({
      query: (payload) => ({
        url: "address/",
        method: "POST",
        body: payload,
      }),
    }),
    updateAddress: builder.mutation({
      query: (payload) => ({
        url: "address/",
        method: "PUT",
        body: payload,
      }),
    }),
    changeShippingAddress: builder.query({
      query: (payload) => ({
        url: `change-shipping-address/${payload}`,
        method: "GET",
      }),
    }),
    getPurchasedOrders: builder.query({
      query: () => ({
        url: "orders/",
        method: "GET",
      }),
    }),
    getSingleOrder: builder.query({
      query: (payload) => ({
        url: `orders/${payload}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLazyAllProductsQuery,
  useProductBySlugQuery,
  useProductForPlaceOrderQuery,
  useSaveRatingAndReviewMutation,
  useGetRatingAndReviewQuery,
  useSaveQuestionAndAnswerMutation,
  useGetQuestionAndAnswerQuery,
  useGetAddressQuery,
  useSaveAddressMutation,
  useUpdateAddressMutation,
  useLazyChangeShippingAddressQuery,
  useGetPurchasedOrdersQuery,
  useGetSingleOrderQuery,
} = appApi;
