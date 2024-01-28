import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";

import Router from "./routes";
import { setUserInfo } from "./redux/features/userSlice";
import AppSpeedDial from "./components/common/SpeedDialer";
import { useThemeContext } from "./themes/ThemeContextProvider";
import { useProfileQuery } from "./redux/services/authApiSlice";
import { setUserAuthentication } from "./redux/features/authSlice";
import { RootState } from "@reduxjs/toolkit/query";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useThemeContext();
  const { data, isLoading } = useProfileQuery(undefined);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setUserInfo(data));
      dispatch(setUserAuthentication());
    }
  }, [data, isLoading, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading ? (
        <CircularProgress />
      ) : isAuthenticated ? (
        <Router />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      )}
      <AppSpeedDial />
    </ThemeProvider>
  );
}

export default App;
