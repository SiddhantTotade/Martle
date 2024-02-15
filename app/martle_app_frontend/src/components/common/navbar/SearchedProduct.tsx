import { Typography, Box } from "@mui/material";

import Image from "../Image";
import ProductCard from "../Card";

export default function SearchedProduct({ currentData }: any) {
  return (
    <>
      {currentData?.map((product, index: number) => (
        <ProductCard
          sx={{ display: "flex", gap: "10px", p: 0.5 }}
          key={index}
          elevation={5}
        >
          <Box sx={{ width: "20%", display: "flex", alignItems: "center",border:"1px solid",borderRadius:"3px" }}>
            <Image
              src={`http://127.0.0.1:8000${product.product_cover_image}`}
              alt="product_image"
              sx={{ display: "flex", alignItems: "center", p: 1 }}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography fontSize={12}>{product.product_title}</Typography>
          </Box>
        </ProductCard>
      ))}
    </>
  );
}
