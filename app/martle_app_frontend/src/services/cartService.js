import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/product/" }),
  endpoints: (builder) => ({
    getCartAPI: builder.query({
      query: (access_token) => {
        return {
          url: "favorite/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    addToCartAPI: builder.mutation({
      query: (access_token) => {
        return {
          url: "favorite/",
          method: "POST",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    removeFromCart: builder.mutation({
      query: ({ access_token, id }) => {
        return {
          url: `favorite/${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetCartAPIQuery,
  useAddToCartAPIMutation,
  useRemoveFromCartMutation,
} = cartAPI;
