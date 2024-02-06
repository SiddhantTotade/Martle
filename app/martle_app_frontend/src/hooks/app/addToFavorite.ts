import { useAddFavoritesMutation } from "@/redux/services/appApiSlice";
import { enqueueSnackbar } from "notistack";

export const useAddToFavorite = () => {
  const [addToFavorite, { isLoading }] = useAddFavoritesMutation();

  const onSubmit = async (data: any) => {
    await addToFavorite(data)
      .then(() => enqueueSnackbar("Added to favorites", { variant: "success" }))
      .catch(() => enqueueSnackbar("Failed to add", { variant: "error" }));
  };

  return { onSubmit, isLoading };
};
