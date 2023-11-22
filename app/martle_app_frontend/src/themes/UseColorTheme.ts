import { useEffect, useMemo, useState } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import { getDesignTokens } from "@/styles/GlobalStyles";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    return (localStorage.getItem("themeMode") as PaletteMode) || "light";
  });

  const toggleColorMode = (targetMode: PaletteMode) => {
    setMode(targetMode);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    mode,
    toggleColorMode,
    theme: modifiedTheme,
  };
};
