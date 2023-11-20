import Router from "./routes";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
