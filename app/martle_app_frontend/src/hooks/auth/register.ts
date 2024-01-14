import { useState } from "react";
import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegistrationSchema } from "@/schemas/auth";
import { useRegisterMutation } from "@/services/authService";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password2: string;
  tc: boolean;
}

type RegisterSchemaType = InferType<typeof RegistrationSchema>;

export const useRegister = () => {
  const { handleSubmit, control, reset, watch, setError } =
    useForm<RegisterSchemaType>({
      resolver: yupResolver(RegistrationSchema),
    });
  const watchField = watch(["name", "email", "tc"]);
  const [error, setErrorState] = useState<string | null>(null);
  const [continueForm, setContinueForm] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [register, { isLoading }] = useRegisterMutation();

  const handleContinue = () => {
    if (watchField[0] && watchField[1]) {
      setContinueForm(true);
    } else {
      if (!watchField[0]) {
        setError("name", {
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

  const onSubmit = async (data: RegisterForm) => {
    if (!watchField[2]) {
      setError("tc", {
        type: "manual",
        message: "Please agree to the terms and conditions",
      });
      setErrorState("Please agree to the terms and conditions");
      return;
    }

    await register(data)
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
    handleContinue,
    onSubmit,
    control,
    isLoading,
    continueForm,
    setContinueForm,
    setError,
    error,
  };
};
