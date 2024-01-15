import React from "react";
import { PaletteMode } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { blue } from "@mui/material/colors";
import { getAppNameColor, getComponentTitleColor } from "./ColorCodeMapper";
import { appThemes } from "./ColorCodeMapper";

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

const theme = {
  palette: blue,
};

export const getDesignTokens = (mode: PaletteMode) => {
  const typographyVariant: ExtendTypographyOptions = {
    fontFamily: "Segoe UI",
    appName: {
      fontSize: "2rem",
      color: getAppNameColor(mode),
    },
    componentTitle: {
      fontSize: "1.3rem",
      color: getComponentTitleColor(mode),
    },
  };

  return {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            letterSpacing: "1px",
          },
        },
      },
      MuiHelperText: {
        styleOverrides: {
          root: {
            color: "blue",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
    },
    ...appThemes[mode],
    typography: typographyVariant,
  };
};

export default theme;
