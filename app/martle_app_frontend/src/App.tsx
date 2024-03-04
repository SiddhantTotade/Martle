import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Router from "@/routes/index";
import SuspenseLoader from "./assets/svg/SuspenseLoader";
import { setUserInfo } from "./redux/features/userSlice";
import { useThemeContext } from "./themes/ThemeContextProvider";
import { useProfileQuery } from "./redux/services/authApiSlice";
import { setUserAuthentication } from "./redux/features/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const { data, isLoading } = useProfileQuery(undefined);

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setUserAuthentication({ authLoading: isLoading }));
      dispatch(setUserInfo(data));
    }
  }, [data, isLoading, dispatch]);

  if (isLoading) {
    return <SuspenseLoader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}
