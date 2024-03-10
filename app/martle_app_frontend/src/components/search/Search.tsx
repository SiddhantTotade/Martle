import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";

import SortProduct from "./SortProducts";
import AppContainer from "../common/Container";
import SearchedProducts from "./SearchedProducts";
import ProductPriceRangeSlider from "./ProductPriceRangeSlider";
import { useSearchProductQuery } from "@/redux/services/appApiSlice";
import { generateSearchQuery } from "../common/utils/generateSearchQuery";

export default function Search() {
  const location = useLocation();
  const range = useSelector((state: RootState) => state.search_product_range);
  const query = generateSearchQuery(
    decodeURIComponent(location.pathname).replace("/search/", ""),
    range
  );
  const { data } = useSearchProductQuery(query);
  const searchQueryStr = location.pathname
    .replace("/search/", "")
    .replace(/%20/g, " ");

  return (
    <AppContainer
      sx={{ mt: "6rem", display: "grid", gap: "10px", placeItems: "end" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "@media(max-width:600px)": {
            width: "100%",
            margin: "auto",
            display: "grid",
          },
        }}
      >
        <Typography
          fontSize={20}
          sx={{
            width: "50%",
            "@media(max-width:600px)": {
              width: "100%",
            },
          }}
        >
          Search Results for {searchQueryStr}
        </Typography>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
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
      </Box>
      <Divider
        orientation="horizontal"
        sx={{ width: "100%", mt: 2 }}
        flexItem
      />
      <SearchedProducts data={data} />
    </AppContainer>
  );
}
