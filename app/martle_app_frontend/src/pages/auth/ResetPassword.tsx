import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import { FormControl, Slide } from "@mui/material";

import AuthLayout from "@/layouts/AuthLayout";
import { ResetPasswordSchema } from "@/schemas/auth";
import InputField from "@/components/Input";
import PrirmaryButton from "@/components/PrirmaryButton";

interface ResetPasswordForm {
  newPassword: string;
  confirmNewPassword: string;
}

type ResetPasswordSchemaType = InferType<typeof ResetPasswordSchema>;

export default function ResetPasswordPage() {
  const { handleSubmit, control, reset } = useForm<ResetPasswordSchemaType>({
    resolver: yupResolver(ResetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordForm) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout title="Reset Password">
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ gap: "10px" }}
        >
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
          <PrirmaryButton label="Reset" type="submit" />
        </FormControl>
      </Slide>
    </AuthLayout>
  );
}
