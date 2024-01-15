import { AppBar, Box, Toolbar, Typography, FormControl } from "@mui/material";

import NavDrawer from "../Drawer";
import PrirmaryButton from "../PrirmaryButton";
import SearchBar from "./SearchBar";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <Box>
      <AppBar elevation={0} position="static">
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Martle
            </Typography>
          </Box>
          <FormControl sx={{ flexGrow: "1" }} component="form">
            <SearchBar />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            <Navlinks />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <PrirmaryButton label="Login" />
              <PrirmaryButton label="Register" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
