import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import "./index.css";
import App from "./App.tsx";
import { store } from "@/redux/store.ts";
import { ThemeContextProvider } from "./themes/ThemeContextProvider.tsx";

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
