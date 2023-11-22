import { blueGrey, blue, teal, cyan } from "@mui/material/colors";

const white = "#ffffff";
const black = "#000000";

export const appThemes = {
  light: {
    palette: {
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
      primary: blue,
      secondary: blue,
      background: {
        default: blueGrey[900],
        paper: blueGrey[800],
      },
      text: {
        primary: white,
        secondary: blueGrey[100],
      },
    },
  },
  forest: {
    palette: {
      primary: cyan,
      secondary: blue,
      background: {
        default: teal[900],
        paper: teal[800],
      },
      text: {
        primary: white,
        secondary: teal[100],
      },
    },
  },
};

export const getAppNameColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return white;
    }
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
    case "forest": {
      return white;
    }
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
