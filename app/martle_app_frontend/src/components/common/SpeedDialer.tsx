import * as React from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ForestIcon from "@mui/icons-material/Forest";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "@/themes/ThemeContextProvider";

type PalletMode = "light" | "dark";

const actions = [
  { icon: <DarkModeIcon />, themeName: "dark" },
  { icon: <ForestIcon />, themeName: "forest" },
  { icon: <LightModeIcon />, themeName: "light" },
];

export default function AppSpeedDial() {
  const { toggleColorMode } = useThemeContext();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<AutoFixHighIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.themeName}
          icon={action.icon}
          onClick={() => toggleColorMode(action.themeName as PalletMode)}
        />
      ))}
    </SpeedDial>
  );
}
