import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CircularProgress } from "@mui/material";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import { useCreateSubscription } from "@/hooks/app/subscription";
import AppContainer from "../common/Container";

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_KEY);

export default function Payment() {
  const { onSubmit, isLoading, clientSecret } = useCreateSubscription();

  useEffect(() => {
    onSubmit();
  }, []);

  const options = { clientSecret };

  return (
    <AppContainer id="checkout">
      {isLoading ? (
        <CircularProgress />
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
