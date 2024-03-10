import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import {
  convertToINR,
  productDiscount,
  shortText,
} from "../common/utils/helperFunctions";

export default function SearchedProducts({ data }: any) {
  const [elevations, setElevations] = useState({} || 0);
  const windowSize = window.innerWidth;
  const navigate = useNavigate();

  const handleCardHover = (index: number, elevate: number) => {
    setElevations((prevElevations) => ({
      ...prevElevations,
      [index]: elevate,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        width: "100%",
        "@media(max-width:600px)": { display: "grid", gap: 0 },
      }}
    >
      {data?.map((product: any, index: number) => (
        <ProductCard
          key={index}
          sx={{
            width: "18%",
            gap: "5px",
            cursor: "pointer",
            p: 1,
            mt: 5,
            "@media(max-width:600px)": { width: "100%" },
          }}
          onMouseEnter={() => handleCardHover(index, 10)}
          onMouseLeave={() => handleCardHover(index, 0)}
          elevation={windowSize > 600 ? elevations[index] || 0 : 5}
          onClick={() => navigate("/product/" + product.product_slug)}
        >
          <Image
            src={`http://127.0.0.1:8000${product.product_cover_image}`}
            alt="product_image"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
          <Box sx={{ display: "grid", gap: "10px", placeItems: "center" }}>
            <Typography sx={{ textAlign: "justify" }} fontSize={13}>
              {shortText(product.product_title, 120)}
              ...
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: "10px" }}>
              <Typography
                sx={{ textAlign: "justify" }}
                fontWeight={600}
                fontSize={15}
              >
                {convertToINR(product.product_discounted_price)}
              </Typography>
              <del style={{ fontSize: "12px" }}>
                {convertToINR(product.product_selling_price)}
              </del>
            </Box>
            <Typography
              sx={{
                background: "#e53935",
                color: "#fff",
                borderRadius: "3px",
                p: 0.5,
              }}
              fontSize={13}
            >
              Discount -{" "}
              {productDiscount(
                product.product_selling_price,
                product.product_discounted_price
              )}
              %
            </Typography>
          </Box>
        </ProductCard>
      ))}
    </Box>
  );
}
