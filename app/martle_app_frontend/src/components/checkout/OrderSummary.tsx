import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";

import {
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
}

export default function OrderSummary({
  discount_price,
  selling_price,
  payment_method,
}: Props) {
  const quantity = useSelector((state: RootState) => state.quantity.quantity);
  const paymentMethod = useSelector(
    (state: RootState) => state.checkout.paymentMethod
  );

  return (
    <Box sx={{ width: "100%", display: "grid", gap: "5px" }}>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Quantity
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {quantity}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Shipping charges
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {deliveryCharges(discount_price) === 0
            ? "Free"
            : deliveryCharges(discount_price)}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Payment method
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {paymentMethod ? paymentMethod : payment_method}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Your Savings
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {quantity * productSavePrice(selling_price, discount_price)}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
          Discount
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {(quantity * productDiscount(selling_price, discount_price)).toFixed(
            1
          )}
          %
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={{ width: "100%" }} fontWeight="bold">
          Order Total
        </Typography>
        <Typography sx={styleTypography} fontWeight="bold">
          ₹
          {(deliveryCharges(discount_price) as number) +
            orderTotal(quantity, discount_price)}
        </Typography>
      </Box>
    </Box>
  );
}
