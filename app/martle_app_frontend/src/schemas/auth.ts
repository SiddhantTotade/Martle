import * as Yup from "yup";

const name = Yup.string()
  .required("Username is required")
  .min(6, "Username must be atleast 6 characters")
  .max(18, "Username must not exceed 18 characters");

const email = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

const password = Yup.string()
  .required("Password is required")
  .min(6, "Password must be atleast 6 characters")
  .max(40, "Password must not exceed 40 characters");

const password2 = Yup.string()
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), ""], "Confirm password does not match");

const tc = Yup.boolean().required("Terms & Conditions is required");

export const LoginSchema = Yup.object().shape({
  email,
  password,
});

export const RegistrationSchema = Yup.object().shape({
  name,
  email,
  password,
  password2,
  tc,
});

export const ResetPasswordSchema = Yup.object().shape({
  password,
  password2,
});

export const ForgotPassworrdSchema = Yup.object().shape({
  email,
});
