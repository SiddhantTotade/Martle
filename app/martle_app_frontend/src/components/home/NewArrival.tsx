import { Star } from "@mui/icons-material";
import { Typography, Box, Chip } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import CardSkeleton from "./ui/CardSkeleton";
import { productDiscount } from "./utils/helperFunctions";
import { useNavigate } from "react-router-dom";

interface Props {
  data?: any;
  isLoading?: boolean;
}

export default function NewArrival({ data, isLoading }: Props) {
  const navigate = useNavigate();

  return (
    <ProductCarousel id="new_arrival" title="New Arrival | Upto 50% off">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        data.data.map((product: any, id: number) => (
          <ProductCard
            key={id}
            elevation={5}
            sx={{
              mr: 3,
              p: 1,
              width: "300px",
              display: "grid",
              gap: "10px",
              cursor: "pointer",
              height: "400px",
              border: "1px solid transparent",
              maxWidth: "90%",
              "&:hover": { border: "1px solid" },
            }}
            onClick={() => navigate(product.product_slug)}
          >
            <Image
              src={`http://127.0.0.1:8000${product.product_cover_image}`}
              alt="product_image"
              width="100%"
              height=""
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "100%",
                height: "240px",
                borderRadius: "5px",
                border: "2px solid",
                objectFit: "contain",
                padding: "10px",
              }}
            />
            <Typography
              fontSize={13}
              fontWeight={500}
              textAlign={"justify"}
              padding={0.2}
              sx={{
                lineHeight: "1.2rem",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                maxHeight: "5rem",
              }}
            >
              {product.product_title}
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
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(product.product_discounted_price)}
              </Typography>
              <Chip
                size="small"
                sx={{ fontSize: 12, fontWeight: 500 }}
                label={`Discount ${productDiscount(
                  product.product_selling_price,
                  product.product_discounted_price
                )}%`}
              />
              <Chip
                size="small"
                sx={{ fontSize: 12, fontWeight: 500 }}
                label="5"
                icon={<Star color="inherit" />}
              />
            </Box>
          </ProductCard>
        ))
      )}
    </ProductCarousel>
  );
}
