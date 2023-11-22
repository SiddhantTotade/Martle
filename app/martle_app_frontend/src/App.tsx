import { CssBaseline, ThemeProvider } from "@mui/material";
import Router from "./routes";

import { useThemeContext } from "./themes/ThemeContextProvider";
import AppSpeedDial from "./components/SpeedDialer";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppSpeedDial />
      <Router />
    </ThemeProvider>
  );
}

export default App;
