import { apiSlice } from "../services/apiSlice";

interface User {
  name: string;
  email: string;
  is_active: boolean;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/login/",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/register/",
        method: "POST",
        body: payload,
      }),
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/change-password/",
        method: "POST",
        body: payload,
      }),
    }),
    resetPasswordEmail: builder.mutation({
      query: (payload) => ({
        url: "/reset-password/",
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: `/reset-password/${payload.uid}/${payload.token}`,
        method: "POST",
        body: payload,
      }),
    }),
    verify: builder.query({
      query: () => ({
        url: "/verify/",
        method: "POST",
      }),
    }),
    profile: builder.query<User, void>({
      query: () => "/profile/",
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
} = authApiSlice;
