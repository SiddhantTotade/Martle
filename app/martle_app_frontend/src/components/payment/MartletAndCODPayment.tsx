import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

import Image from "../common/Image";
import walletGif from "./ui/wallet.gif";
import { usePlaceOrder } from "@/hooks/app/placeOrder";

export default function MartletAndCODPayment() {
  const state = useSelector((state: RootState) => state);
  const { onSubmit, isLoading } = usePlaceOrder();

  useEffect(() => {
    const order = {
      ...state.place_order,
      user: state.user.id,
      quantity: state.quantity[state.place_order.product]?.quantity,
    };

    const timeoutId = setTimeout(() => {
      onSubmit(order);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSubmit, state.place_order, state.user.id, state.quantity]);

  if (isLoading) {
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {isLoading && <Image src={walletGif} alt="wallet_gif" />}
    </Box>;
  }

  return null;
}
