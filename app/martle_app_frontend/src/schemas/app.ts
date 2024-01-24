import * as Yup from "yup";

const review = Yup.string()
  .required("Review is required")
  .min(1, "Review must be atleast 1 characters")
  .max(50, "Review must not exceed 50 charaters");

const query = Yup.string().required("Query is required");

export const AskQuerySchema = Yup.object().shape({
  query,
});

export const RatingAndReviewSchema = Yup.object().shape({
  review,
});
