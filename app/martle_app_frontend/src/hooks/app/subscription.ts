import { useCreateSubscriptionMutation } from "@/redux/services/appApiSlice";
import { useState } from "react";

export const useCreateSubscription = () => {
  const [createSubscription, { isLoading }] = useCreateSubscriptionMutation();
  const [clientSecret, setClientSecret] = useState("");

  const onSubmit = async () => {
    await createSubscription(undefined)
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
  };

  return { onSubmit, isLoading, clientSecret };
};
