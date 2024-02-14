import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPasswordSchema } from "@/schemas/auth";
import { useChangePasswordMutation } from "@/redux/services/authApiSlice";

interface ChangePasswordForm {
  password: string;
  password2: string;
}

type ChangePasswordSchemaType = InferType<typeof ResetPasswordSchema>;

export const useChangePassword = () => {
  const { handleSubmit, control, reset } = useForm<ChangePasswordSchemaType>({
    resolver: yupResolver(ResetPasswordSchema),
  });
  const { enqueueSnackbar } = useSnackbar();
  const [resetPassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit = async (data: ChangePasswordForm) => {
    await resetPassword(data)
      .unwrap()
      .then((res) => enqueueSnackbar(res.msg, { variant: "success" }))
      .catch((res) =>
        enqueueSnackbar(res.data.non_field_errors[0], {
          variant: "error",
        })
      )
      .finally(reset);
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    isLoading,
  };
};
