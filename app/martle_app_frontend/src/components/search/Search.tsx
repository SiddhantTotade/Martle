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
    <AppContainer
      sx={{ mt: "6rem", display: "grid", gap: "10px", placeItems: "end" }}
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          gap: "30px",
          "@media(max-width:600px)": {
            width: "90%",
            margin: "auto",
            display: "grid",
          },
        }}
      >
        <ProductPriceRangeSlider />
        <SortProduct />
      </Box>
      <SearchedProducts data={data} />
    </AppContainer>
  );
}
