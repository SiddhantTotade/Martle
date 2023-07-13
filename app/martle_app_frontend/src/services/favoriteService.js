import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const favoriteService = createApi({
  reducerPath: "favoriteService",
  baseQuery: fetchBaseQuery("http://127.0.0.1:8000/api/"),
  endpoints: (builder) => ({
    addToFavorites: builder.query({
      query: (access_token) => {
        return {
          url: "favorite",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    removeFromFavorites: builder.query({
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
