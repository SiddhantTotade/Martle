import type { InferType } from "yup";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "@/schemas/auth";
import { useLoginMutation } from "@/redux/services/authApiSlice";
import { setUserAuthentication } from "@/redux/features/authSlice";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

type LoginSchemaType = InferType<typeof LoginSchema>;

export const useLogin = () => {
  const { handleSubmit, control, reset } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
  });
  const { enqueueSnackbar } = useSnackbar();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    await login(data)
      .unwrap()
      .then(() => {
        dispatch(setUserAuthentication());
        navigate("/");
        enqueueSnackbar("Login Successful", { variant: "success" });
      })
      .catch((res) =>
        enqueueSnackbar(res.data.errors.non_fields_errors[0], {
          variant: "error",
        })
      )
      .finally(reset);
  };

  return { handleSubmit, onSubmit, control, isLoading };
};
