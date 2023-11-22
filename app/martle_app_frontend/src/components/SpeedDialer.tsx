import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ForestIcon from "@mui/icons-material/Forest";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "@/themes/ThemeContextProvider";

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
    <Box sx={{ height: 330, flexGrow: 20, bottom: 0 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", right: 15, bottom: 15 }}
        icon={<AutoFixHighIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.themeName}
            icon={action.icon}
            onClick={() => toggleColorMode(action.themeName)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
