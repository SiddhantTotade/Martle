import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import App from "./App.tsx";
import { ThemeContextProvider } from "./themes/ThemeContextProvider.tsx";
import { store } from "./Store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
