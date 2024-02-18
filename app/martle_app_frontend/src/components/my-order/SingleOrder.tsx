import { useParams } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import Image from "../common/Image";
import { useGetSingleOrderQuery } from "@/redux/services/appApiSlice";
import OrderStatus from "./OrderStatus";
import OrderSummary from "../checkout/OrderSummary";
import AddressCard from "../common/order-product/AddressCard";
import AddReviewRating from "../product/AddReviewAndRating";

export default function SingleOrder() {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleOrderQuery(slug);

  return (
    <>
      <AppContainer
        sx={{
          mt: "6rem",
          "@media(max-width:600px)": {
            mt: 1,
          },
        }}
      >
        {data?.data.length === 0 ? (
          <Typography>No data available</Typography>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              "@media(max-width:600px)": {
                display: "grid",
              },
            }}
          >
            <Box>
              <Box sx={{ border: "1px solid", borderRadius: "5px", p: 1 }}>
                <Image
                  src={`http://127.0.0.1:8000${data?.data[0].product.product_cover_image}`}
                  alt="product_image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "scale-down",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <AddReviewRating />
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "grid",
                gap: "15px",
                "@media(max-width:600px)": {
                  width: "100%",
                },
              }}
            >
              <Typography color="#2196f3" fontWeight="bold" fontSize="small">
                Delivered on{" "}
                {new Date(data?.data[0].ordered_datetime).toDateString()}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography fontWeight="bold">
                  ₹{data?.data[0].product_discounted_price}
                </Typography>
                <del style={{ fontSize: "small" }}>
                  ₹{data?.data[0].product_selling_price}
                </del>
              </Box>
              <Typography fontSize="small">
                {data?.data[0].product.product_title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  "@media(max-width:960px)": {
                    display: "grid",
                  },
                }}
              >
                <AddressCard
                  address={data?.data[0].address.address}
                  locality={data?.data[0].address.locality}
                  city={data?.data[0].address.city}
                  state={data?.data[0].address.state}
                  country={data?.data[0].address.country}
                  zipcode={data?.data[0].address.zipcode}
                />
                <Divider color="#fff" orientation="vertical" />
                <OrderSummary
                  payment_method={data?.data[0].payment_method}
                  discount_price={data?.data[0].product_discounted_price}
                  selling_price={data?.data[0].product_selling_price}
                />
              </Box>
              <OrderStatus status={data?.data[0].status.product_status} />
            </Box>
          </Box>
        )}
      </AppContainer>
    </>
  );
}
