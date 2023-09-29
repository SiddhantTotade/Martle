import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ratingAndReviewAPI = createApi({
  reducerPath: "ratingAndReviewAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/product/" }),
  endpoints: (builder) => ({
    getReviewsAPI: builder.query({
      query: (data) => {
        return {
          url: `ratingandreview/${data.product_id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${data.access_token}`,
          },
        };
      },
    }),
    postReviewsAPI: builder.mutation({
      query: (data) => {
        return {
          url: `ratingandreview/${data.reviewData.product}/`,
          method: "POST",
          body: data.reviewData,
          headers: {
            authorization: `Bearer ${data.access_token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetReviewsAPIQuery, usePostReviewsAPIMutation } =
  ratingAndReviewAPI;
