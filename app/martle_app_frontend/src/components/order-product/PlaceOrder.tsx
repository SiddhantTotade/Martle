import { useParams } from "react-router-dom";
import { Card, Box, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import { deliveryDate } from "../common/utils/helperFunctions";
import { useProductForPlaceOrderQuery } from "@/redux/services/appApiSlice";
import Image from "../common/Image";
import ProductQuantity from "./ProductQuantity";

export default function PlaceOrder() {
  const { slug } = useParams();
  const { data } = useProductForPlaceOrderQuery(slug);

  console.log(data);

  return (
    <AppContainer>
      <Card sx={{ display: "flex", alignItems: "center", gap: "20px", p: 2 }}>
        <Box>
          <Image
            src={`http://127.0.0.1:8000${data?.data[0].product_cover_image}`}
            alt="product_image"
            style={{ width: "100px" }}
          />
        </Box>
        <Box>
          <Typography color="green" fontWeight="bold" fontSize="small">
            Guaranteed delivery :{" "}
            {deliveryDate(
              new Date().toUTCString(),
              data?.data[0].product_discounted_price
            )}
          </Typography>
          <Typography fontSize="small">
            {data?.data[0].product_title}
          </Typography>
          <Typography color="darkred" fontSize="medium">
            ₹{data?.data[0].product_discounted_price}
          </Typography>
          <del>₹{data?.data[0].product_selling_price}</del>
          <ProductQuantity />
        </Box>
      </Card>
    </AppContainer>
  );
}
