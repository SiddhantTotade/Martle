import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import SortProduct from "./SortProducts";
import AppContainer from "../common/Container";
import SearchedProducts from "./SearchedProducts";
import ProductPriceRangeSlider from "./ProductPriceRangeSlider";
import { useSearchProductQuery } from "@/redux/services/appApiSlice";
import { generateSearchQuery } from "../common/utils/generateSearchQuery";

export default function Search() {
  const location = useLocation();
  const query = generateSearchQuery(
    decodeURIComponent(location.pathname).replace("/search/", "")
  );
  const { data } = useSearchProductQuery(query);

  return (
    <AppContainer sx={{ mt: "6rem", display: "flex", gap: "10px" }}>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <ProductPriceRangeSlider />
        <SortProduct />
      </Box>
      <Box sx={{ width: "70%", ml: "2rem" }}>
        <SearchedProducts data={data} />
      </Box>
    </AppContainer>
  );
}
