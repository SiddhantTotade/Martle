import { AppBar, Box, Toolbar, FormControl } from "@mui/material";

import SearchBar from "./SearchBar";

export default function MobileSearchBar() {
  return (
    <Box
      sx={{ display: "none", "@media (max-width: 600px)": { display: "flex" } }}
    >
      <AppBar elevation={0} position="static">
        <Toolbar
          sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
        >
          <FormControl sx={{ flexGrow: "1" }} component="form">
            <SearchBar />
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
