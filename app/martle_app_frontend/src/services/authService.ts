import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PATH = "http://127.0.0.1:8000/auth/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: PATH,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => {
        return {
          url: "login/",
          method: "POST",
          body: payload,
        };
      },
    }),
    register: builder.mutation({
      query: (payload) => {
        return {
          url: "register/",
          method: "POST",
          body: payload,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (payload) => {
        return {
          url: "change-password/",
          method: "POST",
          body: payload,
        };
      },
    }),
    resetPasswordEmail: builder.mutation({
      query: (payload) => {
        return {
          url: "reset-password/",
          method: "POST",
          body: payload,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (payload) => {
        console.log(payload);
        
        return {
          url: `reset-password/${payload.uid}/${payload.token}/`,
          method: "POST",
          body: payload.data,
        };
      },
    }),
    obtainToken: builder.mutation({
      query: (payload) => {
        return {
          url: "token/refresh/",
          method: "POST",
          body: payload,
        };
      },
    }),
    verifyEmail: builder.query({
      query: () => {
        return {
          url: "verify",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useResetPasswordEmailMutation,
  useResetPasswordMutation,
  useObtainTokenMutation,
  useVerifyEmailQuery,
} = authApi;
