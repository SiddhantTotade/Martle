import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/Typography" {
  interface TypographyVariantsOverride {
    appName: true;
    componentTitle: true;
  }
}

interface ExtendTypographyOptions extends TypographyOptions {
  appName: React.CSSProperties;
  componentTitle: React.CSSProperties;
}

export const GlobalStyle = createTheme({
  typography: {
    fontFamily: "Segoe UI",
    appName: {
      fontSize: "2rem",
      color: "#0d47a1",
    },
    componentTitle: {
      fontSize: "1.3rem",
      color: "#1565c0",
    },
  } as ExtendTypographyOptions,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "1px",
        },
      },
    },
  },
} as ThemeOptions);
