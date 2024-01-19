import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ForgotPassworrdSchema } from "@/schemas/auth";
import { useResetPasswordEmailMutation } from "@/redux/services/authApiSlice";

interface ResetPasswordEmailForm {
  email: string;
}

type ResetPasswordEmailSchemaType = InferType<typeof ForgotPassworrdSchema>;

export const useResetPasswordEmail = () => {
  const { handleSubmit, control, reset } =
    useForm<ResetPasswordEmailSchemaType>({
      resolver: yupResolver(ForgotPassworrdSchema),
    });
  const { enqueueSnackbar } = useSnackbar();
  const [resetPasswordEmail, { isLoading }] = useResetPasswordEmailMutation();

  const onSubmit = async (data: ResetPasswordEmailForm) => {
    await resetPasswordEmail(data)
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
