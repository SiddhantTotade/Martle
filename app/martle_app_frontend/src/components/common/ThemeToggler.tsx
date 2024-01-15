import { IconButton } from "@mui/material";
import { useThemeContext } from "@/themes/ThemeContextProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggler() {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <IconButton onClick={() => toggleColorMode("dark")}>
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
