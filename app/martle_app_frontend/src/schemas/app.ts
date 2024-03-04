import * as Yup from "yup";

const review = Yup.string()
  .required("Review is required")
  .min(1, "Review must be atleast 1 characters")
  .max(50, "Review must not exceed 50 charaters");

const query = Yup.string().required("Query is required");

const address = Yup.string().required("Address is required");
const locality = Yup.string().required("Locality is required");
const city = Yup.string().required("City is required");
const state = Yup.string().required("State is required");
const country = Yup.string().required("Country is required");
const zipcode = Yup.number().required("Zipcode is required");

const amount = Yup.string().required("Amount is required");

export const AskQuerySchema = Yup.object().shape({
  query,
});

export const RatingAndReviewSchema = Yup.object().shape({
  review,
});

export const AddressSchema = Yup.object().shape({
  address,
  locality,
  city,
  state,
  country,
  zipcode,
});

export const AmountSchema = Yup.object().shape({
  amount,
});
