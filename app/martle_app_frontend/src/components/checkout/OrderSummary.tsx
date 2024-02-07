import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";

import {
  cartOrderSummary,
  convertToINR,
  deliveryCharges,
  orderTotal,
  productDiscount,
  productSavePrice,
} from "../common/utils/helperFunctions";

const styleBox = {
  width: "100%",
  display: "flex",
};

const styleTypography = {
  width: "100%",
  display: "flex",
  justifyContent: "end",
};

interface Props {
  discount_price?: string | any;
  selling_price?: string | any;
  payment_method?: string | any;
  product_id?: string;
  orderSummaryType?: string;
}

export default function OrderSummary({
  discount_price,
  selling_price,
  payment_method,
  product_id,
  orderSummaryType,
}: Props) {
  const quantity = useSelector((state: RootState) => state.quantity);
  const paymentMethod = useSelector(
    (state: RootState) => state.checkout.paymentMethod
  );
  const orderSummary = cartOrderSummary(quantity);

  return (
    <Box sx={{ width: "100%", display: "grid", gap: "5px" }}>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          {orderSummaryType === "cart" ? "Items" : "Quantity"}
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {orderSummaryType === "cart"
            ? orderSummary.totalItems
            : quantity.quantity}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Shipping charges
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {orderSummary.deliveryCharges == 0
            ? "Free"
            : deliveryCharges(discount_price)}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Payment method
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {paymentMethod
            ? paymentMethod
            : payment_method
            ? paymentMethod
            : "Select a payment method"}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Your Savings
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {orderSummary.productSavePrice}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Discount
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {orderSummary.productDiscount}%
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold">
          Order Total
        </Typography>
        <Typography sx={styleTypography} fontWeight="bold">
          {orderSummary.orderTotal}
        </Typography>
      </Box>
    </Box>
  );
}
