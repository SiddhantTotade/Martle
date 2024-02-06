import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Radio,
  RadioGroup,
  SxProps,
  Typography,
} from "@mui/material";

import AppContainer from "../common/Container";
import { setCheckoutPayment } from "@/redux/features/checkoutSlice";
import { useProductForPlaceOrderQuery } from "@/redux/services/appApiSlice";

interface Props {
  sx?: SxProps;
}

export default function PaymentOptions({ sx }: Props) {
  const [dataLength, setDataLength] = useState();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data } = useProductForPlaceOrderQuery(slug);

  useEffect(() => {
    setDataLength(data?.data.length);
  }, [data]);

  const handlePayment = (e) => {
    dispatch(setCheckoutPayment({ paymentMethod: e.target.value }));
  };

  return (
    <AppContainer sx={{ ...sx }}>
      <RadioGroup sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center", gap: "10px" }}
        >
          <Box>
            <Radio onClick={handlePayment} value="Martlet" size="small" />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              Martle Pay - ₹0.00
            </Typography>
            <Typography fontSize="small">
              Pay via Martle Pay and get upto ₹100 cashback. Orders above ₹2000
            </Typography>
          </Box>
        </Card>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center", gap: "10px" }}
        >
          <Box>
            <Radio
              onClick={handlePayment}
              value={
                dataLength
                  ? `EMI - ₹${Math.round(
                      data?.data[0].product_discounted_price / 3
                    )}/month`
                  : ""
              }
              size="small"
              disabled={
                dataLength
                  ? data?.data[0].product_discounted_price >= 6000
                    ? false
                    : true
                  : true
              }
            />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              No Cost EMI - Starting from ₹
              {dataLength
                ? Math.round(data?.data[0].product_discounted_price / 3)
                : ""}
              /month
            </Typography>
            <Typography fontSize="small">
              EMI interest saving on selected credit cards. Orders above ₹6000
            </Typography>
          </Box>
        </Card>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center", gap: "10px" }}
        >
          <Box>
            <Radio
              onClick={handlePayment}
              value="Cash on delivery"
              size="small"
            />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              Cash on Delivery / Pay on Delivery
            </Typography>
            <Typography fontSize="small">Cash, UPI, Cards accepted</Typography>
          </Box>
        </Card>
      </RadioGroup>
    </AppContainer>
  );
}
