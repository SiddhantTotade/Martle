import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/api/";

const access =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTYwNzc0LCJpYXQiOjE3MDYwNzQzNzQsImp0aSI6Ijg5Y2ExNTZlZmYyNDQ4YmU5ZDkzZjJiNjNiY2EwMWE5IiwidXNlcl9pZCI6Mzh9.TPJsEt5MpWoyPTyFacqI0f3WfP1bEF_UgisYFtZLelw";

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
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
    productBySlug: builder.query({
      query: (payload) => ({
        url: `product/${payload}/`,
        method: "GET",
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
    saveRatingAndReview: builder.mutation({
      query: (payload) => ({
        url: `product/ratingandreview/${payload.product}/`,
        method: "POST",
        body: payload,
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
    getRatingAndReview: builder.query({
      query: (payload) => ({
        url: `product/ratingandreview/${payload}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
    saveQuestionAndAnswer: builder.mutation({
      query: (payload) => ({
        url: `product/questionandanswer/${payload.product}/`,
        method: "POST",
        body: payload,
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
    getQuestionAndAnswer: builder.mutation({
      query: (payload) => ({
        url: `product/questionandanswer/${payload.id}/`,
        method: "GET",
        body: payload,
        headers: {
          authorization: `Bearer ${access}`,
        },
      }),
    }),
  }),
});

export const {
  useLazyAllProductsQuery,
  useProductBySlugQuery,
  useSaveRatingAndReviewMutation,
  useGetRatingAndReviewQuery,
  useSaveQuestionAndAnswerMutation,
  useGetQuestionAndAnswerMutation,
} = appApi;
