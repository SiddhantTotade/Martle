import { useRemoveFavoritesMutation } from "@/redux/services/appApiSlice";
import { enqueueSnackbar } from "notistack";

export const useRemoveFromFavorite = () => {
  const [removeFromFavorite, { isLoading }] = useRemoveFavoritesMutation();

  const onSubmit = async (data: any) => {
    await removeFromFavorite(data)
      .then(() =>
        enqueueSnackbar("Removed from favorites", { variant: "success" })
      )
      .catch(() => enqueueSnackbar("Failed to remove", { variant: "error" }));
  };

  return { onSubmit, isLoading };
};
