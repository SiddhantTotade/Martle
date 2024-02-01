import { Typography, Box } from "@mui/material";
import {
  deliveryCharges,
  orderTotal,
  productDiscount,
  productSavePrice,
} from "../common/utils/helperFunctions";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export default function OrderSummary({ discount_price, selling_price }: any) {
  const quantity = useSelector((state: RootState) => state.quantity.quantity);
  const paymentMethod = useSelector(
    (state: RootState) => state.checkout.paymentMethod
  );

  return (
    <Box sx={{ display: "grid", gap: "5px" }}>
      <Typography fontSize="small">Quantity : {quantity}</Typography>
      <Typography fontSize="small">
        Shipping charges :{" "}
        {deliveryCharges(discount_price) === 0
          ? "Free"
          : deliveryCharges(discount_price)}
      </Typography>
      <Typography fontSize="small">Payment method : {paymentMethod}</Typography>
      <Typography fontSize="small">
        Your Savings : ₹
        {quantity * productSavePrice(selling_price, discount_price)}
      </Typography>
      <Typography fontSize="small">
        Discount :{" "}
        {(quantity * productDiscount(selling_price, discount_price)).toFixed(1)}
        %
      </Typography>
      <Typography>
        Order Total : ₹
        {(deliveryCharges(discount_price) as number) +
          orderTotal(quantity, discount_price)}
      </Typography>
    </Box>
  );
}
