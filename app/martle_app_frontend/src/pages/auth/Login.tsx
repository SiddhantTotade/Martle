import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import { FormControl, Slide, Typography } from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import { LoginSchema } from "@/schemas/auth";
import InputField from "@/components/Input";
import PrirmaryButton from "@/components/PrirmaryButton";
import AppLinks from "@/components/Links";
import ActionContainer from "@/components/ActionContainer";

interface LoginForm {
  email: string;
  password: string;
}

type LoginSchemaType = InferType<typeof LoginSchema>;

export default function LoginPage() {
  const { handleSubmit, control, reset } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout title="Login">
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ gap: "10px" }}
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
          <PrirmaryButton label="Login" type="submit" />
        </FormControl>
      </Slide>
      <ActionContainer>
        <AppLinks href="/auth/forgot-password">Forgot Password ?</AppLinks>
        <Typography>
          New to Martle ? <AppLinks href="/auth/register">Register</AppLinks>
        </Typography>
      </ActionContainer>
    </AuthLayout>
  );
}
