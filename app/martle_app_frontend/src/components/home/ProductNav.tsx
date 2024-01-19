import { Typography } from "@mui/material";
import ProductCard from "../common/Card";
import AppContainer from "../common/Container";
import Image from "../common/Image";

export default function ProductNav() {
  return (
    <AppContainer
      id="product_nav"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 2fr)",
        gap: "10px",
      }}
    >
      <ProductCard
        className="product-nav-card"
        sx={{
          position: "relative",
          height: "20vh",
          border: "2px solid tranparent",
        }}
        elevation={10}
      >
        <Image
          className="product-nav-img"
          src="https://kaka.pk/wp-content/uploads/2023/11/website-banner-mega-sale-1-scaled.webp"
          alt="product_image"
          style={{ height: "20vh" }}
        />
        <Typography
          className="product-nav-text"
          fontSize={20}
          sx={{
            color: "#fff",
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%) translateY(100%)",
            opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Electronics & Appliances
        </Typography>
      </ProductCard>
      <ProductCard elevation={5}>Hello</ProductCard>
      <ProductCard elevation={5}>Hello</ProductCard>
      <ProductCard elevation={5}>Hello</ProductCard>
      <ProductCard elevation={5}>Hello</ProductCard>
      <ProductCard elevation={5}>Hello</ProductCard>
    </AppContainer>
  );
}
