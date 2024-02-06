import { enqueueSnackbar } from "notistack";
import { useAddCartMutation } from "@/redux/services/appApiSlice";

export const useAddToCart = () => {
  const [addToCart, { isLoading }] = useAddCartMutation();

  const onSubmit = async (data: any) => {
    await addToCart(data)
      .then(() => enqueueSnackbar("Added to cart", { variant: "success" }))
      .catch(() => enqueueSnackbar("Failed to add", { variant: "error" }));
  };

  return { onSubmit, isLoading };
};
