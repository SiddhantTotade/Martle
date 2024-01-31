import { useParams } from "react-router-dom";
import { Card, Box, Typography, Divider } from "@mui/material";

import AppContainer from "../common/Container";
import { deliveryDate } from "../common/utils/helperFunctions";
import { useProductForPlaceOrderQuery } from "@/redux/services/appApiSlice";
import Image from "../common/Image";
import ProductQuantity from "./ProductQuantity";
import AddressCard from "../common/order-product/AddressCard";
import OrderSummary from "./OrderSummary";

export default function PlaceOrder() {
  const { slug } = useParams();
  const { data } = useProductForPlaceOrderQuery(slug);

  return (
    <AppContainer>
      <Card
        elevation={5}
        sx={{ display: "flex", alignItems: "center", gap: "20px", p: 2 }}
      >
        <Box>
          <Image
            src={`http://127.0.0.1:8000${data?.data[0].product_cover_image}`}
            alt="product_image"
            style={{ width: "100px" }}
          />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography color="green" fontWeight="bold">
            Guaranteed delivery :{" "}
            {deliveryDate(
              new Date().toUTCString(),
              data?.data[0].product_discounted_price
            )}
          </Typography>
          <Typography>{data?.data[0].product_title}</Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <Typography fontWeight="bold" fontSize="medium">
              ₹{data?.data[0].product_discounted_price}
            </Typography>
            <del style={{ fontSize: "13px" }}>
              ₹{data?.data[0].product_selling_price}
            </del>
          </Box>
          <ProductQuantity />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <AddressCard
            address={data?.address[0].address}
            locality={data?.address[0].locality}
            city={data?.address[0].city}
            state={data?.address[0].state}
            country={data?.address[0].country}
            zipcode={data?.address[0].zipcode}
          />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <OrderSummary
          discount_price={data?.data[0].product_discounted_price}
          selling_price={data?.data[0].product_selling_price}
        />
      </Card>
    </AppContainer>
  );
}
