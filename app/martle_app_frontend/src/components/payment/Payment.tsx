import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box } from "@mui/material";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import AppContainer from "../common/Container";
import SuspenseLoader from "@/assets/svg/SuspenseLoader";
import { useCreateSubscription } from "@/hooks/app/subscription";
import { addQuantityToProducts } from "../common/utils/helperFunctions";

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_KEY);

export default function Payment() {
  const navigate = useNavigate();
  const checkout_data = useSelector(
    (state: RootState) => state.checkout_product_data
  );

  const quantity = useSelector((state: RootState) => state.quantity);
  const checkout =
    checkout_data.productCartData.length !== 0
      ? addQuantityToProducts(
          checkout_data.productCartData[
            checkout_data.productCartData.length - 1
          ],
          quantity
        )
      : [checkout_data.productData[checkout_data.productData.length - 1]];
  const { onSubmit, isLoading, clientSecret } = useCreateSubscription();
  const options = { clientSecret };

  useEffect(() => {
    const handleUnload = (e) => {
      e.preventDefault();
      localStorage.setItem("reload", "true");
    };

    if (localStorage.getItem("reload") === "true") {
      navigate(-1);
    }
    localStorage.setItem("reload", false as unknown as string);
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [navigate]);

  useEffect(() => {
    onSubmit({
      product_cart_data:
        checkout ||
        checkout_data.productData[checkout_data.productData.length - 1],
    });
  }, []);

  return (
    <AppContainer id="checkout">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "1rem",
          gap: "10px",
        }}
      >
        <DoNotDisturbIcon fontSize="small" color="error" />
        <Typography color="error" fontSize={12}>
          Do not reload this page
        </Typography>
      </Box>
      {isLoading ? (
        <SuspenseLoader />
      ) : (
        clientSecret && (
          <>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </>
        )
      )}
    </AppContainer>
  );
}
