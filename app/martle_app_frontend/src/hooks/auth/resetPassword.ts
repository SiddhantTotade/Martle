import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPasswordSchema } from "@/schemas/auth";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";

interface ResetPasswordForm {
  password: string;
  password2: string;
}

type ResetPasswordSchemaType = InferType<typeof ResetPasswordSchema>;

export const useResetPassword = () => {
  const { handleSubmit, control, reset } = useForm<ResetPasswordSchemaType>({
    resolver: yupResolver(ResetPasswordSchema),
  });
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const { enqueueSnackbar } = useSnackbar();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async (data: ResetPasswordForm) => {
    await resetPassword({
      data: data,
      uid: urlSearchParams.get("uid"),
      token: urlSearchParams.get("token"),
    })
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
