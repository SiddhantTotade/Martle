import React from "react";
import { PaletteMode } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { blueGrey, blue, teal } from "@mui/material/colors";
import {
  getAppNameColor,
  getBackgroundColor,
  getComponentTitleColor,
  getPalettePrimaryColor,
  getPaletteSecondaryColor,
  getPaperColor,
  getPrimaryTextColor,
  getSecondaryTextColor,
} from "./ColorCodeMapper";

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
    palette: {
      primary: getPalettePrimaryColor(mode),
      background: {
        default: getBackgroundColor(mode),
        paper: getPaperColor(mode),
      },
      text: {
        primary: getPrimaryTextColor(mode),
        secondary: getSecondaryTextColor(mode),
      },
    },
    typography: typographyVariant,
  };
};

export default theme;
