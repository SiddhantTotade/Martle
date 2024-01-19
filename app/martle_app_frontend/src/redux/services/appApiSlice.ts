import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/api/";

const access =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1NzI2MjQ3LCJpYXQiOjE3MDU2Mzk4NDcsImp0aSI6ImRiOTI1MWUyZjM2ZjQwMzhhMTI4NmEwZDIxOWY5Y2YwIiwidXNlcl9pZCI6Mzh9.rppIQ7kKeXaUIvSAPEdKh__NT8fNMUth1GoUwsCN-Ks";

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
    register: builder.mutation({
      query: (payload) => ({
        url: "register/",
        method: "POST",
        body: payload,
      }),
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "change-password/",
        method: "POST",
        body: payload,
      }),
    }),
    resetPasswordEmail: builder.mutation({
      query: (payload) => ({
        url: "reset-password/",
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: `reset-password/${payload.uid}/${payload.token}`,
        method: "POST",
        body: payload,
      }),
    }),
    refreshToken: builder.mutation({
      query: (payload) => ({
        url: "token/refresh/",
        method: "POST",
        body: payload,
      }),
    }),
    verify: builder.query({
      query: () => ({
        url: "verify/",
        method: "POST",
      }),
    }),
    profile: builder.query({
      query: () => "profile/",
    }),
  }),
});

export const { useLazyAllProductsQuery } = appApi;
