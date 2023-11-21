import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import { FormControl, Slide } from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import { ForgotPassworrdSchema } from "@/schemas/auth";
import InputField from "@/components/Input";
import PrirmaryButton from "@/components/PrirmaryButton";

interface ForgotPasswordForm {
  email: string;
}

type ForgotPasswordSchemaType = InferType<typeof ForgotPassworrdSchema>;

export default function ForgotPasswordPage() {
  const { handleSubmit, control, reset } = useForm<ForgotPasswordSchemaType>({
    resolver: yupResolver(ForgotPassworrdSchema),
  });

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout title="Forgot Password">
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
          <PrirmaryButton label="Send" type="submit" />
        </FormControl>
      </Slide>
    </AuthLayout>
  );
}
