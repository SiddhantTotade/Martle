import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Tooltip,
  useTheme,
} from "@mui/material";

import NavDrawer from "../Drawer";
import PrirmaryButton from "../PrirmaryButton";
import Navlinks from "./Navlinks";
import MobileSearchBar from "./MobileSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import Search from "./SearchModal";
import ToggleThemeButton from "../ToggleThemeButton";

export default function Navbar() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.user);
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 2,
          background: theme.palette.mode === "dark" ? "transparent" : "",
          backdropFilter: theme.palette.mode === "dark" ? "blur(20px)" : "",
          borderBottom: theme.palette.mode === "dark" ? 1 : "",
        }}
        elevation={0}
        position="static"
      >
        <Toolbar
          sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavDrawer />
            <Typography fontSize={30} sx={{ flexGrow: 1 }}>
              Martle
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                "@media (max-width: 800px)": {
                  display: "none",
                },
              }}
            >
              <Navlinks />
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Search />
              <ToggleThemeButton />
              {isAuthenticated ? (
                <Tooltip title={`${user.name} | ${user.email}`}>
                  <Avatar />
                </Tooltip>
              ) : (
                <>
                  <PrirmaryButton label="Login" />
                  <PrirmaryButton label="Register" />
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
