import { Typography, Box, Chip } from "@mui/material";
import { Star } from "@mui/icons-material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";

export default function NewArrival() {
  return (
    <ProductCarousel title="New Arrival | Upto 50% off">
      <ProductCard
        elevation={5}
        sx={{
          mr: 3,
          p: 1,
          display: "grid",
          gap: "10px",
          cursor: "pointer",
          border: "1px solid transparent",
          "&:hover": { border: "1px solid" },
        }}
      >
        <Image
          src="https://m.media-amazon.com/images/I/51AjohATwIL._AC_SY200_.jpg"
          alt="product_image"
          width="100%"
          height=""
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "5px",
            border: "2px solid",
            objectFit: "none",
          }}
        />
        <Typography
          fontSize={13}
          fontWeight={500}
          textAlign={"justify"}
          padding={0.2}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab
          velit adipisci, laborum veritatis rerum enim saepe beatae minus
          aspernatur.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0.7,
          }}
        >
          <Typography fontSize={15} fontWeight={700}>
            ₹ 14,000
          </Typography>
          <Chip
            size="small"
            sx={{ fontSize: 12, fontWeight: 500 }}
            label="Discount 10%"
          />
          <Chip
            size="small"
            sx={{ fontSize: 12, fontWeight: 500 }}
            label="5"
            icon={<Star color="inherit" />}
          />
        </Box>
      </ProductCard>
    </ProductCarousel>
  );
}
