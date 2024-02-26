import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

import { usePlaceOrder } from "@/hooks/app/placeOrder";
import SuspenseLoader from "@/assets/svg/SuspenseLoader";
import { placeCartOrder } from "../common/utils/helperFunctions";

export default function MartletAndCODPayment() {
  const state = useSelector((state: RootState) => state);
  const { onSubmit } = usePlaceOrder();

  useEffect(() => {
    const cartOrders = placeCartOrder(state.place_order, state.user.id);
    console.log(cartOrders);

    const timeoutId = setTimeout(() => {
      onSubmit(cartOrders);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSubmit, state.place_order, state.user.id, state.quantity]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <SuspenseLoader />
      <Typography fontSize="13px" sx={{ mt: "7rem" }}>
        Hold tight, your order is being processed
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
        fontSize="small"
        color="error"
      >
        <DoNotDisturbIcon fontSize="small" />
        Do not close or refresh this page
      </Typography>
    </Box>
  );
}
