import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "@/redux/services/authApiSlice";
import { useDispatch } from "react-redux";
import { unsetUserAuthentication } from "@/redux/features/authSlice";

export const useLogout = () => {
  const [logout, { isLoading }] = useLazyLogoutQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    await logout(undefined)
      .then(() => {
        enqueueSnackbar("Logged out", { variant: "success" });
        dispatch(unsetUserAuthentication());
        navigate("/auth/login");
      })
      .catch(() => enqueueSnackbar("Failed to logout", { variant: "error" }));
  };

  return {
    onSubmit,
    isLoading,
  };
};
