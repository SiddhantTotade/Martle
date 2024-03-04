import { useEffect, useState } from "react";
import { IconButton, useTheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "@/themes/ThemeContextProvider";

export default function ToggleThemeButton() {
  const { toggleColorMode } = useThemeContext();
  const [rotate, setRotate] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setRotate(0);
    }, 130);
  }, [rotate]);

  return (
    <IconButton
      onClick={() => {
        setTimeout(() => {
          toggleColorMode(theme.palette.mode === "dark" ? "light" : "dark");
        }, 130);
        setRotate(360);
      }}
    >
      {theme.palette.mode === "dark" ? (
        <DarkModeIcon
          sx={{
            transform: `rotate(${rotate}deg)`,
            transition: "all .2s linear",
          }}
        />
      ) : (
        <LightModeIcon
          sx={{
            color: "#fff",
            transform: `rotate(${rotate}deg)`,
            transition: "all .2s linear",
          }}
        />
      )}
    </IconButton>
  );
}
