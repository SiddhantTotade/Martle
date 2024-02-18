import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

import Image from "../Image";
import ProductCard from "../Card";
import {
  convertToINR,
  productDiscount,
  shortText,
} from "../utils/helperFunctions";

export default function SearchedProduct({ currentData }: any) {
  const navigate = useNavigate();

  return (
    <>
      {currentData?.product_tags_suggest__completion?.map((product: any) =>
        product.options?.map((item: any, itemIndex: number) => (
          <ProductCard
            sx={{
              display: "flex",
              gap: "10px",
              p: 0.5,
              border: "1px solid transparent",
              "&:hover": { cursor: "pointer", border: "1px solid" },
            }}
            key={itemIndex}
            elevation={5}
            onClick={() => navigate(`/product/${item._source.product_slug}`)}
          >
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                borderRadius: "3px",
              }}
            >
              <Image
                src={`http://127.0.0.1:8000${item._source.product_cover_image}`}
                alt="product_image"
                sx={{ display: "flex", alignItems: "center", p: 1 }}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box sx={{ width: "100%", display: "grid", alignItems: "center" }}>
              <Typography fontSize={12}>
                {shortText(item._source.product_title, 130)}...
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  gap: "10px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "end", gap: "10px" }}>
                  <Typography fontSize={15}>
                    {convertToINR(item._source.product_discounted_price)}
                  </Typography>
                  <del style={{ fontSize: "11px" }}>
                    {convertToINR(item._source.product_selling_price)}
                  </del>
                </Box>
                <Typography
                  sx={{
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "4px",
                    p: 0.5,
                  }}
                  fontSize={12}
                >
                  Discount -{" "}
                  {productDiscount(
                    item._source.product_selling_price,
                    item._source.product_discounted_price
                  )}
                  %
                </Typography>
              </Box>
            </Box>
          </ProductCard>
        ))
      )}
    </>
  );
}
