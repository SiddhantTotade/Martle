import {
  FormControl,
  Slide,
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import AuthLayout from "@/layouts/AuthLayout";
import InputField from "@/components/Input";
import PrirmaryButton from "@/components/PrirmaryButton";
import AppLinks from "@/components/Links";
import ActionContainer from "@/components/ActionContainer";
import { useRegister } from "@/hooks/auth/register";

export default function RegisterPage() {
  const {
    handleContinue,
    handleSubmit,
    onSubmit,
    control,
    isLoading,
    continueForm,
    setContinueForm,
    error,
  } = useRegister();

  return (
    <AuthLayout title="Register">
      <FormControl
        fullWidth
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ gap: "10px", alignItems: "center" }}
      >
        {continueForm ? undefined : (
          <Slide direction="left" in mountOnEnter unmountOnExit>
            <Box sx={{ width: "100%", gap: "10px", display: "grid" }}>
              <InputField
                type="text"
                label="Username"
                name="name"
                control={control}
              />
              <InputField
                type="email"
                label="Email"
                name="email"
                control={control}
              />
              <PrirmaryButton
                label="Continue"
                type="button"
                onClick={handleContinue}
              />
            </Box>
          </Slide>
        )}
        {continueForm ? (
          <Slide direction="left" in mountOnEnter unmountOnExit>
            <Box
              sx={{
                width: "100%",
                gap: "10px",
                display: "grid",
                alignItems: "center",
              }}
            >
              <InputField
                type="password"
                label="Password"
                name="password"
                control={control}
              />
              <InputField
                type="password"
                label="Confirm Password"
                name="password2"
                control={control}
              />
              <FormControlLabel
                label="I agree to the terms & conditions"
                control={
                  <Controller
                    control={control}
                    name="tc"
                    defaultValue={false}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
              />
              {error && (
                <Typography color="error" variant="caption">
                  {error}
                </Typography>
              )}
              <Box sx={{ display: "grid", placeItems: "center" }}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <PrirmaryButton label="Submit" type="submit" />
                )}
              </Box>
            </Box>
          </Slide>
        ) : undefined}
      </FormControl>
      <ActionContainer>
        {continueForm && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <IconButton onClick={() => setContinueForm(false)} size="small">
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <Typography>Back</Typography>
          </Box>
        )}
        <Typography margin={continueForm ? undefined : "auto"}>
          Already a user ? <AppLinks href="/auth/login">Login</AppLinks>
        </Typography>
      </ActionContainer>
    </AuthLayout>
  );
}
