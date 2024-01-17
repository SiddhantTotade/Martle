import { Typography, Box } from "@mui/material";
import ProductCard from "../common/Card";
import AppContainer from "../common/Container";
import Image from "../common/Image";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ElectronicsAndAccessories() {
  return (
    <AppContainer sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontSize={20} fontWeight={500}>
        No Cost EMI upto 14 months | Electronics & Accessories
      </Typography>
      <Box sx={{ display: "flex" }}>
        <AppContainer sx={{ width: "40%", mt: 1.3 }}>
          <ProductCard
            elevation={5}
            sx={{
              p: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              gap: "10px",
            }}
          >
            {[...Array(6)].map((_, id) => (
              <Box key={id} sx={{ display: "grid", justifyItems: "center" }}>
                <Image
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/PC-Acc/Jan-ART/GW/qc/1_1x._SY116_CB584305906_.jpg"
                  alt="product_image"
                  width="100%"
                  height=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography fontSize={10}>
                  Keyboards and Mice | Starting from ₹ 999
                </Typography>
              </Box>
            ))}
          </ProductCard>
        </AppContainer>
        <AppContainer sx={{ width: "27%", mt: 1.3 }}>
          <ProductCard elevation={5} sx={{ p: 1 }}>
            <Image
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg"
              alt="product_image"
              width="100%"
              height=""
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </ProductCard>
        </AppContainer>
        <AppContainer sx={{ p: "10px", width: "27%", mt: 0 }}>
          <AppContainer
            sx={{
              mt: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ProductCard elevation={5}>
              <Carousel
                className="product-carousel"
                itemClass="carousel"
                slidesToSlide={1}
                responsive={responsive}
                arrows={true}
                showDots={true}
                renderButtonGroupOutside={true}
              >
                <Image
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg"
                  alt="product_image"
                  width="100%"
                  height=""
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <Image
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg"
                  alt="product_image"
                  width="100%"
                  height=""
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <Image
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2024/JanART/banner/SHOPCAT/STRIPE/Stripe/CC/1/Desktop_CC_1._SY304_CB585892817_.jpg"
                  alt="product_image"
                  width="100%"
                  height=""
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Carousel>
            </ProductCard>
          </AppContainer>
        </AppContainer>
      </Box>
    </AppContainer>
  );
}
