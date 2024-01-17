import { Typography } from "@mui/material";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import Image from "../common/Image";

export default function ShopDeals() {
  return (
    <ProductCarousel title="Shop Deals in Top Categories | Home, Kitchen, Appliances & more">
      <ProductCard
        className="product-container shop-deals"
        elevation={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          position: "relative",
          transition: "0.5s",
          height: "30vh",
          cursor: "pointer",
        }}
      >
        <Typography
          className="card-content text"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "0.5s",
          }}
          fontSize={20}
          fontWeight={600}
        >
          Kitchen
        </Typography>
        <Image
          className="card-content image"
          src="https://img.freepik.com/free-vector/kitchen-equipment-icons_74855-182.jpg?w=740&t=st=1705474958~exp=1705475558~hmac=91408018e8adcae46677eb01b0c46f82aa680d192910d595b1d9ad1ac1905f14"
          alt="product_image"
          width="100%"
          height="auto"
          style={{
            width: "100%",
            height: "auto",
            transition: "0.5s",
          }}
        />
      </ProductCard>
    </ProductCarousel>
  );
}
