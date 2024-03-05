import { useParams } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";

import Image from "../common/Image";
import OrderStatus from "./OrderStatus";
import AppContainer from "../common/Container";
import OrderSummary from "../checkout/OrderSummary";
import AddReviewRating from "../product/AddReviewAndRating";
import AddressCard from "../common/order-product/AddressCard";
import { convertToINR } from "../common/utils/helperFunctions";
import { useGetSingleOrderQuery } from "@/redux/services/appApiSlice";

export default function SingleOrder() {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleOrderQuery(slug);

  return (
    <>
      <AppContainer sx={{ mt: 10 }}>
        {data?.length === 0 ? (
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
              <Box sx={{ borderRadius: "5px", p: 1 }}>
                <Image
                  src={`http://127.0.0.1:8000${data?.[0].product.product_cover_image}`}
                  alt="product_image"
                  style={{
                    width: "150px",
                    height: "100%",
                    objectFit: "scale-down",
                    borderRadius: "5px",
                    padding: 10,
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
                {new Date(data?.[0].ordered_datetime).toDateString()}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography fontWeight="bold">
                  {convertToINR(data ? data?.[0].product_discounted_price : 0)}
                </Typography>
                <del style={{ fontSize: "small" }}>
                  {convertToINR(data ? data?.[0].product_selling_price : 0)}
                </del>
              </Box>
              <Typography fontWeight="bold" fontSize="medium">
                {data?.[0].product.product_title}
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
                  address={data?.[0].address.address}
                  locality={data?.[0].address.locality}
                  city={data?.[0].address.city}
                  state={data?.[0].address.state}
                  country={data?.[0].address.country}
                  zipcode={data?.[0].address.zipcode}
                />
                <Divider color="#fff" orientation="vertical" />
                <OrderSummary
                  product_quantity={data?.[0].quantity}
                  payment_method={data?.[0].payment_method}
                  discount_price={data?.[0].product_discounted_price}
                  selling_price={data?.[0].product_selling_price}
                />
              </Box>
              <OrderStatus status={data?.[0].status.product_status} />
            </Box>
          </Box>
        )}
      </AppContainer>
    </>
  );
}
