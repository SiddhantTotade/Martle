import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { CircularProgress } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import AppContainer from "../common/Container";
import { useCreateSubscription } from "@/hooks/app/subscription";
import { addQuantityToProducts } from "../common/utils/helperFunctions";
import Martle from "@/assets/svg/Martle";

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_KEY);

export default function Payment() {
  const checkout_data = useSelector(
    (state: RootState) => state.checkout_product_data
  );
  const quantity = useSelector((state: RootState) => state.quantity);
  const checkout = addQuantityToProducts(
    checkout_data.productCartData[checkout_data.productCartData.length - 1],
    quantity
  );
  const { onSubmit, isLoading, clientSecret } = useCreateSubscription();
  const options = { clientSecret };

  useEffect(() => {
    onSubmit({ product_cart_data: checkout });
  }, []);

  return (
    <AppContainer id="checkout">
      {isLoading ? (
        <Martle />
      ) : (
        clientSecret && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )
      )}
    </AppContainer>
  );
}
