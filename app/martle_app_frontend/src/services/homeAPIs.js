import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allProductAPI = createApi({
  reducerPath: "allProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    allProductAPI: builder.query({
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
  }),
});

export const { useAllProductAPIQuery } = allProductAPI;
