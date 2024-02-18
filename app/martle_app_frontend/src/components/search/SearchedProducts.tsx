import { Box, Typography } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import {
  convertToINR,
  productDiscount,
  shortText,
} from "../common/utils/helperFunctions";

export default function SearchedProducts({ data }: any) {
  return (
    <Box sx={{ display: "flex" }}>
      {data?.map((product, index) => (
        <ProductCard key={index} sx={{ width: "25%", p: 1 }} elevation={5}>
          <Box>
            <Image
              src={`http://127.0.0.1:8000${product.product_cover_image}`}
              alt="product_image"
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ display: "grid", gap: "10px", placeItems: "center" }}>
            <Typography sx={{ textAlign: "justify" }} fontSize={13}>
              {shortText(product.product_title, 120)}
              ...
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: "10px" }}>
              <Typography sx={{ textAlign: "justify" }} fontSize={13}>
                {convertToINR(product.product_discounted_price)}
              </Typography>
              <del style={{ fontSize: "11px" }}>
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
            </Typography>
          </Box>
        </ProductCard>
      ))}
    </Box>
  );
}
