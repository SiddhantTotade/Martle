import { Box, Container } from "@mui/material";
import React from "react";

const ProductDetails = (props) => {
  console.log(props);
  const handleDiscount = (sellingPrice, discountPrice) => {
    const discount = ((discountPrice - sellingPrice) / discountPrice) * 100;

    return discount.toFixed(2);
  };
  return (
    <Box
      sx={{
        width: "55%",
        border: "2px solid red",
        right: 5,
        position: "absolute",
      }}
    >
      {props.productDetails.map((row, i) => {
        return (
          <Container>
            <Box key={i} sx={{ fontSize: "20px", fontWeight: "medium" }}>
              {row.product_title}
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
                {handleDiscount(
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
                <Box sx={{ fontSize: "30px" }}>
                  {row.product_discounted_price.toLocaleString("en-IN", {
                    currency: "INR",
                  })}
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  letterSpacing: "1px",
                  fontWeight: "medium",
                  color: "grey",
                }}
              >
                M.R.P :&nbsp;
              </Box>
              <del className=" text-gray-600 text-sm">
                ₹{" "}
                {row.product_selling_price.toLocaleString("en-IN", {
                  currency: "INR",
                })}
              </del>
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default ProductDetails;
