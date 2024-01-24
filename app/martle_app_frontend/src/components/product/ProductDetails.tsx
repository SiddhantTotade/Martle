import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import ContentCollapse from "./ContentCollapse";
import AppContainer from "../common/Container";
import Offers from "./Offers";
import {
  productDiscount,
  productSavePrice,
} from "../common/utils/helperFunctions";
// import ContentCollapse from "../ContentCollapse";

export default function ProductDetails({ productData }: any) {
  const productDetailsList = productData
    ? productData?.[0]?.product_description?.split("<br>")
    : "";
  const productDetailsPreShow = productDetailsList
    ? productDetailsList.slice(0, 4)
    : "";
  const productDetailsPostShow = productDetailsList
    ? productDetailsList.slice(4, productDetailsList.length)
    : "";
  const [expanded, setExpanded] = React.useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setShowMore(!showMore);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {productData?.map?.((row, i) => {
        return (
          <Container key={i} sx={{ gap: "7px", display: "grid" }}>
            <Box sx={{ fontSize: "20px", fontWeight: "medium" }}>
              <Typography fontSize={20}>{row.product_title}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  color: "crimson",
                  fontSize: "30px",
                  fontWeight: "light",
                }}
              >
                -
                {productDiscount(
                  row.product_selling_price,
                  row.product_discounted_price
                )}
                %
              </Box>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <Box sx={{ marginTop: "5px", fontWeight: "medium" }}>₹</Box>
                <Typography fontSize={30}>
                  {row.product_discounted_price.toLocaleString("en-IN", {
                    currency: "INR",
                  })}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  letterSpacing: "1px",
                  fontWeight: "medium",
                  color: "grey",
                }}
                fontSize={12}
              >
                M.R.P :&nbsp;
              </Typography>
              <del className=" text-gray-600 text-sm">
                ₹{" "}
                {row.product_selling_price.toLocaleString("en-IN", {
                  currency: "INR",
                })}
              </del>
            </Box>
            <Box>
              <Typography
                fontSize={13}
                fontWeight="bold"
                sx={{ color: "green" }}
              >
                Save ₹
                {productSavePrice(
                  row.product_selling_price,
                  row.product_discounted_price
                )}{" "}
                on this product
              </Typography>
            </Box>
            <Box sx={{ gap: "7px", display: "grid" }}>
              <AppContainer sx={{ m: 0, display: "flex", gap: "10px" }}>
                <LocalOfferIcon sx={{ color: "#fa8423" }} />
                <Typography fontSize={15} fontWeight={"bold"}>
                  Offers
                </Typography>
              </AppContainer>
              <Offers />
            </Box>
            <br />
            <Box sx={{ display: "grid", gap: "10px" }}>
              <Typography fontSize={15} fontWeight={"bold"}>
                About this item
              </Typography>
              <AppContainer sx={{ mt: 0 }}>
                {Object.values(
                  productDetailsPreShow ? productDetailsPreShow : ""
                ).map((row: string, id: number) => {
                  return (
                    <ul key={id} className="text-sm font-medium list-disc mt-2">
                      <li style={{ textAlign: "justify", fontSize: 13 }}>
                        {row}
                      </li>
                    </ul>
                  );
                })}
                <ContentCollapse
                  handleRatingReview={handleExpandClick}
                  data={Object.values(
                    productDetailsPostShow ? productDetailsPostShow : ""
                  ).map((row, i) => (
                    <ul key={i} className="text-sm font-medium list-disc mt-2">
                      <li>{row}</li>
                    </ul>
                  ))}
                />
              </AppContainer>
            </Box>
          </Container>
        );
      })}
    </Box>
  );
}
