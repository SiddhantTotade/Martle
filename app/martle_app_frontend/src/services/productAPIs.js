import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/product/" }),
  endpoints: (builder) => ({
    getSpecificProductAPI: builder.query({
      query: (data) => {
        return {
          url: `${data.slug}/`,
          method: "GET",
          headers: {
            authorization: `Bearer ${data.access_token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetSpecificProductAPIQuery } = productAPI;
