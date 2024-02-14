import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";

import Router from "@/routes/index";
import { setUserInfo } from "./redux/features/userSlice";
import AppSpeedDial from "./components/common/SpeedDialer";
import { useThemeContext } from "./themes/ThemeContextProvider";
import { useProfileQuery } from "./redux/services/authApiSlice";
import { setUserAuthentication } from "./redux/features/authSlice";

function App() {
  const { theme } = useThemeContext();
  const { data, isLoading } = useProfileQuery(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setUserAuthentication({ authLoading: isLoading }));
      dispatch(setUserInfo(data));
    }
  }, [data, isLoading, dispatch]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <AppSpeedDial />
    </ThemeProvider>
  );
}

export default App;
