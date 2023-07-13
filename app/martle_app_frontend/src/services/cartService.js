import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const cartService = createApi({
  reducerPath: "cartService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    addToCart: builder.query({
      query: (access_token) => {
        return {
          url: "cart/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    removeFromCart: builder.mutation({
      query: ({ access_token, id }) => {
        return {
          url: `cart/${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});
