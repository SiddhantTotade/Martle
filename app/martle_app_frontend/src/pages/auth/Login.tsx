import {
  CircularProgress,
  FormControl,
  Slide,
  Typography,
} from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import InputField from "@/components/common/Input";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import AppLinks from "@/components/common/Links";
import ActionContainer from "@/components/common/ActionContainer";
import { useLogin } from "@/hooks/auth/login";

export default function LoginPage() {
  const { handleSubmit, onSubmit, control, isLoading } = useLogin();

  return (
    <>
      <AuthLayout title="Login">
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
            <InputField
              type="password"
              label="Password"
              name="password"
              control={control}
            />
            {isLoading ? (
              <CircularProgress />
            ) : (
              <PrirmaryButton label="Login" type="submit" />
            )}
          </FormControl>
        </Slide>
        <ActionContainer
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <AppLinks href="/auth/forgot-password">Forgot Password ?</AppLinks>
          <Typography>
            New to Martle ? <AppLinks href="/auth/register">Register</AppLinks>
          </Typography>
        </ActionContainer>
      </AuthLayout>
    </>
  );
}
