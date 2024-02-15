import { Box } from "@mui/material";

import AppContainer from "../common/Container";
import SearchedProducts from "./SearchedProducts";

export default function Search() {
  return (
    <AppContainer sx={{ mt: "6rem" }}>
      <Box></Box>
      <Box>
        <SearchedProducts />
      </Box>
    </AppContainer>
  );
}
