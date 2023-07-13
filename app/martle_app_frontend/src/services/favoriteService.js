import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoriteAPI = createApi({
  reducerPath: "favoriteAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    addToFavoriteAPI: builder.query({
      query: (access_token) => {
        return {
          url: "all-products/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    removeFromFavorites: builder.mutation({
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

export const { useAddToFavoriteAPIQuery, useRemoveFromFavoritesMutation } =
  favoriteAPI;
