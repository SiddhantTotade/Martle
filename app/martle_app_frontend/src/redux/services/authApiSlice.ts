import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/auth/";

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: PATH,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "login/",
        method: "POST",
        body: payload,
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
    logout: builder.query({
      query: () => ({
        url: "logout/",
        method: "GET",
      }),
    }),
    verify: builder.query({
      query: () => ({
        url: "verify/",
        method: "POST",
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "profile/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useResetPasswordEmailMutation,
  useResetPasswordMutation,
  useVerifyQuery,
  useProfileQuery,
  useLazyLogoutQuery,
} = authApi;
