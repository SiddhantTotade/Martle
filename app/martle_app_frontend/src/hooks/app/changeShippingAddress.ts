import { useLazyChangeShippingAddressQuery } from "@/redux/services/appApiSlice";
import { enqueueSnackbar } from "notistack";

export const useChangeShippingAddress = () => {
  const [changeShippingAddress, { isLoading }] =
    useLazyChangeShippingAddressQuery();

  const onSubmit = async (data: any) => {
    await changeShippingAddress(data)
      .then(() => enqueueSnackbar("Address changed", { variant: "success" }))
      .catch(() =>
        enqueueSnackbar("Failed to changed address", { variant: "error" })
      );
  };

  return { isLoading, onSubmit };
};
