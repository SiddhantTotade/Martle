import { CircularProgress, FormControl, Slide } from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import InputField from "@/components/common/Input";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import { useResetPassword } from "@/hooks/auth/resetPassword";

export default function ResetPasswordPage() {
  const { handleSubmit, onSubmit, control, isLoading } = useResetPassword();

  return (
    <AuthLayout title="Reset Password">
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ gap: "10px", alignItems: "center" }}
        >
          <InputField
            type="password"
            label="New Password"
            name="password"
            control={control}
          />
          <InputField
            type="password"
            label="Confirm New Password"
            name="password2"
            control={control}
          />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <PrirmaryButton label="Reset" type="submit" />
          )}
        </FormControl>
      </Slide>
    </AuthLayout>
  );
}
