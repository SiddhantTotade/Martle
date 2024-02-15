import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  FormControl,
  Avatar,
  Tooltip,
} from "@mui/material";

import NavDrawer from "../Drawer";
import PrirmaryButton from "../PrirmaryButton";
import SearchBar from "./SearchBar";
import Navlinks from "./Navlinks";
import MobileSearchBar from "./MobileSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import Search from "./SearchModal";

export default function Navbar() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box>
      <AppBar
        sx={{ position: "fixed", top: 0, zIndex: 2 }}
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
          <Box sx={{ display: "flex", gap: "100px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                "@media (max-width: 800px)": {
                  display: "none",
                },
              }}
            >
              <Search />
              <Navlinks />
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
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
      <MobileSearchBar />
    </Box>
  );
}
