import { setUserAuthentication } from "@/redux/features/authSlice";
import { setUserInfo } from "@/redux/features/userSlice";
import { useProfileQuery } from "@/redux/services/authApiSlice";
import { useDispatch } from "react-redux";

export const useProfile = () => {
  const { data } = useProfileQuery(undefined);
  const dispatch = useDispatch();

  dispatch(setUserInfo(data));
  dispatch(setUserAuthentication());
};
