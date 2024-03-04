import { blue, deepPurple } from "@mui/material/colors";

const white = "#ffffff";
const black = "#000000";

export const appThemes = {
  light: {
    palette: {
      mode: "light",
      primary: blue,
      secondary: blue,
      background: {
        default: white,
        paper: white,
      },
      text: {
        primary: black,
        secondary: blue[900],
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      primary: blue,
      secondary: deepPurple,
      background: {
        default: "#121212",
        paper: "#121212",
      },
      text: {
        primary: white,
        secondary: white,
      },
    },
  },
};

export const getAppNameColor = (mode: string) => {
  switch (mode) {
    case "dark": {
      return white;
    }
    case "light": {
      return blue[900];
    }
    default: {
      return blue[900];
    }
  }
};

export const getComponentTitleColor = (mode: string) => {
  switch (mode) {
    case "dark": {
      return white;
    }
    case "light": {
      return blue[800];
    }
    default: {
      return blue[800];
    }
  }
};
