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
    getCalculateRating: builder.query({
      query: (payload) => ({
        url: `product/calcrating/${payload}/`,
        method: "GET",
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
    getFavorites: builder.query({
      query: () => ({
        url: "favorites/",
        method: "GET",
      }),
    }),
    addFavorites: builder.mutation({
      query: (payload) => ({
        url: "favorites/",
        method: "POST",
        body: payload,
      }),
    }),
    removeFavorites: builder.mutation({
      query: (payload) => ({
        url: "favorites/",
        method: "DELETE",
        body: payload,
      }),
    }),
    getCart: builder.query({
      query: () => ({
        url: "cart/",
        method: "GET",
      }),
    }),
    addCart: builder.mutation({
      query: (payload) => ({
        url: "cart/",
        method: "POST",
        body: payload,
      }),
    }),
    removeCart: builder.mutation({
      query: (payload) => ({
        url: "cart/",
        method: "DELETE",
        body: payload,
      }),
    }),
    purchaseCount: builder.query({
      query: (payload) => ({
        url: `purchase/${payload}`,
        method: "GET",
      }),
    }),
    viewCount: builder.query({
      query: (payload) => ({
        url: `view/${payload}`,
        method: "GET",
      }),
    }),
    searchProduct: builder.query({
      query: (payload) => ({
        url: `search/?${payload}`,
        method: "GET",
      }),
    }),
    suggestProduct: builder.query({
      query: (payload) => ({
        url: `search/suggest/?${payload}`,
        method: "GET",
      }),
    }),
    saveRecommended: builder.mutation({
      query: (payload) => ({
        url: "recommend/interaction/",
        method: "POST",
        body: payload,
      }),
    }),
    getRecommended: builder.query({
      query: () => ({
        url: "recommend/recommended_products",
        method: "GET",
      }),
    }),
    createSubscription: builder.mutation({
      query: (payload) => ({
        url: "create-subscription/",
        method: "POST",
        body: payload,
      }),
    }),
    martlePay: builder.query({
      query: () => ({
        url: "martle-pay/",
        method: "GET",
      }),
    }),
    placeOrder: builder.mutation({
      query: (payload) => ({
        url: "place-order/",
        method: "POST",
        body: payload,
      }),
    }),
    transferMoney: builder.mutation({
      query: (payload) => ({
        url: "transfer-money/",
        method: "POST",
        body: payload,
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
  useGetCalculateRatingQuery,
  useSaveQuestionAndAnswerMutation,
  useGetQuestionAndAnswerQuery,
  useGetAddressQuery,
  useSaveAddressMutation,
  useUpdateAddressMutation,
  useLazyChangeShippingAddressQuery,
  useGetPurchasedOrdersQuery,
  useGetSingleOrderQuery,
  useGetFavoritesQuery,
  useAddFavoritesMutation,
  useRemoveFavoritesMutation,
  useGetCartQuery,
  useAddCartMutation,
  useRemoveCartMutation,
  useLazyViewCountQuery,
  useLazyPurchaseCountQuery,
  useSearchProductQuery,
  useLazySuggestProductQuery,
  useSaveRecommendedMutation,
  useGetRecommendedQuery,
  useCreateSubscriptionMutation,
  useMartlePayQuery,
  usePlaceOrderMutation,
  useTransferMoneyMutation,
} = appApi;
