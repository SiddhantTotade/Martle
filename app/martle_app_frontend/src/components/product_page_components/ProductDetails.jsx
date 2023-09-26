import { Box, Collapse, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Offers from "./Offers";
import React, { useState } from "react";

const ProductDetails = (props) => {
  const productDetailsList = props
    ? props.productDetails[0]?.product_details.split("<br>")
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

  const handleDiscount = (sellingPrice, discountPrice) => {
    const discount = ((discountPrice - sellingPrice) / discountPrice) * 100;

    return discount.toFixed(2);
  };

  const handleSavePrice = (sellingPrice, discountPrice) => {
    return sellingPrice - discountPrice;
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {props.productDetails.map((row, i) => {
        return (
          <Container key={i} sx={{ gap: "5px", display: "grid" }}>
            <Box sx={{ fontSize: "20px", fontWeight: "medium" }}>
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
            <Box>
              <Typography
                fontSize={13}
                fontWeight="bold"
                sx={{ color: "green" }}
              >
                Save ₹
                {handleSavePrice(
                  row.product_selling_price,
                  row.product_discounted_price
                )}{" "}
                on this product
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={15} fontWeight={"bold"}>
                About this item
              </Typography>
              <Container>
                {Object.values(
                  productDetailsPreShow ? productDetailsPreShow : ""
                ).map((row, i) => {
                  return (
                    <ul key={i} className="text-sm font-medium list-disc mt-2">
                      <li>{row}</li>
                    </ul>
                  );
                })}
                {showMore ? (
                  ""
                ) : (
                  <div
                    className="text-sm cursor-pointer text-blue-700 mt-2"
                    onClick={() => handleExpandClick()}
                  >
                    Show more
                    <ExpandMoreIcon />
                  </div>
                )}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  {Object.values(
                    productDetailsPostShow ? productDetailsPostShow : ""
                  ).map((row, i) => {
                    return (
                      <ul
                        key={i}
                        className="text-sm font-medium list-disc mt-2"
                      >
                        <li>{row}</li>
                      </ul>
                    );
                  })}
                  {showMore ? (
                    <div
                      className="text-sm cursor-pointer text-blue-700 mt-2"
                      onClick={() => handleExpandClick()}
                    >
                      Show less
                      <ExpandLessIcon />
                    </div>
                  ) : (
                    ""
                  )}
                </Collapse>
              </Container>
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default ProductDetails;
