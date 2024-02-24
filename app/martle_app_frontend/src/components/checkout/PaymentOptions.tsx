import { useDispatch } from "react-redux";
import {
  Box,
  Card,
  CircularProgress,
  Radio,
  RadioGroup,
  SxProps,
  Typography,
} from "@mui/material";

import AppContainer from "../common/Container";
import { setCheckoutPayment } from "@/redux/features/checkoutSlice";
import { useMartlePayQuery } from "@/redux/services/appApiSlice";
import { convertToINR } from "../common/utils/helperFunctions";
import { paymentOptions } from "./PaymentOption";

interface Props {
  sx?: SxProps;
}

export default function PaymentOptions({ sx }: Props) {
  const dispatch = useDispatch();
  const { data: martle_pay, isLoading } = useMartlePayQuery(undefined);

  const handlePayment = (e) => {
    dispatch(setCheckoutPayment({ paymentMethod: e.target.value }));
  };

  return (
    <AppContainer sx={{ ...sx }}>
      <RadioGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {paymentOptions.map((pay, index) => (
          <Card
            key={index}
            elevation={5}
            sx={{
              width: "100%",
              display: "flex",
              p: 1,
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <Radio
                onClick={handlePayment}
                value={
                  pay.label.includes("Martle")
                    ? "Martlet"
                    : pay.label.includes("Stripe")
                    ? "Stripe"
                    : pay.label.includes("Delivery")
                    ? "Cash on delivery"
                    : ""
                }
                size="small"
              />
            </Box>
            <Box>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Typography fontSize="small" fontWeight="bold">
                  {pay.label}
                  {pay.label.includes("Martle") &&
                    " - " + convertToINR(martle_pay?.martle_pay)}
                </Typography>
              )}
              <Typography fontSize="small">{pay.subLabel}</Typography>
            </Box>
          </Card>
        ))}
      </RadioGroup>
    </AppContainer>
  );
}
