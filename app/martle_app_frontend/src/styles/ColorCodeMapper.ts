import { blueGrey, blue, teal } from "@mui/material/colors";

const white = "#ffffff";
const black = "#000000";

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
      return teal[800];
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
      return teal[800];
    }
  }
};

export const getPalettePrimaryColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return blue;
    }
    case "dark": {
      return blue;
    }
    case "light": {
      return blue;
    }
    default: {
      return "";
    }
  }
};

export const getPaletteSecondaryColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return blue;
    }
    case "dark": {
      return blue;
    }
    case "light": {
      return blue;
    }
    default: {
      return "";
    }
  }
};

export const getBackgroundColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return teal[900];
    }
    case "dark": {
      return blueGrey[900];
    }
    case "light": {
      return white;
    }
    default: {
      return white;
    }
  }
};

export const getPaperColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return teal[800];
    }
    case "dark": {
      return blueGrey[700];
    }
    case "light": {
      return white;
    }
    default: {
      return white;
    }
  }
};

export const getPrimaryTextColor = (mode: string) => {
  switch (mode) {
    case "forest": {
      return white;
    }
    case "dark": {
      return white;
    }
    case "light": {
      return black;
    }
    default: {
      return white;
    }
  }
};

export const getSecondaryTextColor = (mode: string) => {
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
      return white;
    }
  }
};
