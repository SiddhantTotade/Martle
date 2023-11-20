import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import { FormControl, Slide, Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import AuthLayout from "@/layouts/AuthLayout";
import { RegistrationSchema } from "@/schemas/auth";
import InputField from "@/components/Input";
import PrirmaryButton from "@/components/PrirmaryButton";
import AppLinks from "@/components/Links";
import ActionContainer from "@/components/ActionContainer";

interface RegistrationForm {
  username: string;
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

type RegisterSchemaType = InferType<typeof RegistrationSchema>;

export default function RegisterPage() {
  const [continueForm, setContinueForm] = useState(false);

  const { handleSubmit, control, reset, watch, setError } =
    useForm<RegisterSchemaType>({
      resolver: yupResolver(RegistrationSchema),
    });
  const watchField = watch(["username", "email"]);

  const handleContinue = () => {
    if (watchField[0] && watchField[1]) {
      setContinueForm(true);
    } else {
      if (!watchField[0]) {
        setError("username", {
          type: "required",
          message: "Username is required",
        });
      }
      if (!watchField[1]) {
        setError("email", {
          type: "required",
          message: "Email is required",
        });
      }
    }
  };

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout title="Register">
      <FormControl fullWidth component="form" onSubmit={handleSubmit(onSubmit)}>
        {continueForm ? undefined : (
          <Slide direction="left" in mountOnEnter unmountOnExit>
            <Box sx={{ gap: "10px", display: "grid" }}>
              <InputField
                type="text"
                label="Username"
                name="username"
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
            <Box sx={{ gap: "10px", display: "grid" }}>
              <InputField
                type="password"
                label="New Password"
                name="newPassword"
                control={control}
              />
              <InputField
                type="password"
                label="Confirm New Password"
                name="confirmNewPassword"
                control={control}
              />
              <PrirmaryButton label="Submit" type="submit" />
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
