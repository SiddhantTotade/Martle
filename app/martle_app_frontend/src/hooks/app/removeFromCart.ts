import { enqueueSnackbar } from "notistack";
import { useRemoveCartMutation } from "@/redux/services/appApiSlice";

export const useRemoveFromCart = () => {
  const [removeFromCart, { isLoading }] = useRemoveCartMutation();

  const onSubmit = async (data: any) => {
    await removeFromCart(data)
      .then(() => enqueueSnackbar("Removed from cart", { variant: "success" }))
      .catch(() => enqueueSnackbar("Failed to remove", { variant: "error" }));
  };

  return { onSubmit, isLoading };
};
