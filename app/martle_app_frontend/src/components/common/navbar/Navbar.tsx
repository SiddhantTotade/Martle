import { AppBar, Box, Toolbar, Typography, FormControl } from "@mui/material";

import NavDrawer from "../Drawer";
import PrirmaryButton from "../PrirmaryButton";
import SearchBar from "./SearchBar";
import Navlinks from "./Navlinks";
import MobileSearchBar from "./MobileSearchBar";

export default function Navbar() {
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
          <FormControl
            sx={{
              flexGrow: "1",
              "@media (max-width: 600px)": { display: "none" },
            }}
            component="form"
          >
            <SearchBar />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              "@media (max-width: 800px)": {
                display: "none",
              },
            }}
          >
            <Navlinks />
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <PrirmaryButton label="Login" />
            <PrirmaryButton label="Register" />
          </Box>
        </Toolbar>
      </AppBar>
      <MobileSearchBar />
    </Box>
  );
}
