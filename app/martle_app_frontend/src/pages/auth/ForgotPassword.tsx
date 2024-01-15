import React from "react";
import { CircularProgress, FormControl, Slide } from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import InputField from "@/components/common/Input";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import { useResetPasswordEmail } from "@/hooks/auth/resetPasswordEmail";

export default function ForgotPasswordPage() {
  const { handleSubmit, onSubmit, control, isLoading } =
    useResetPasswordEmail();

  return (
    <React.Fragment>
      <AuthLayout title="Forgot Password">
        <Slide direction="left" in mountOnEnter unmountOnExit>
          <FormControl
            fullWidth
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ gap: "10px", alignItems: "center" }}
          >
            <InputField
              type="email"
              label="Email"
              name="email"
              control={control}
            />
            {isLoading ? (
              <CircularProgress />
            ) : (
              <PrirmaryButton label="Send" type="submit" />
            )}
          </FormControl>
        </Slide>
      </AuthLayout>
    </React.Fragment>
  );
}
