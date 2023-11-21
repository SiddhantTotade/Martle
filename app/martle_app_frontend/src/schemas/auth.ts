import * as Yup from "yup";

const username = Yup.string()
  .required("Username is required")
  .min(6, "Username must be atleast 6 characters")
  .max(18, "Username must not exceed 18 characters");

const email = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

const password = Yup.string().required("Password is required");

const newPassword = Yup.string()
  .required("New password is required")
  .min(6, "New password must be atleast 6 characters")
  .max(40, "New password must not exceed 40 characters");

const confirmNewPassword = Yup.string()
  .required("Confirm new password is required")
  .oneOf([Yup.ref("newPassword"), ""], "Confirm new password does not match");

export const LoginSchema = Yup.object().shape({
  email,
  password,
});

export const RegistrationSchema = Yup.object().shape({
  username,
  email,
  newPassword,
  confirmNewPassword,
});

export const ResetPasswordSchema = Yup.object().shape({
  newPassword,
  confirmNewPassword,
});

export const ForgotPassworrdSchema = Yup.object().shape({
  email,
});
