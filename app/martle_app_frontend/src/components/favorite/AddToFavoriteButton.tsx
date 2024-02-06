import { CircularProgress, Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAddToFavorite } from "@/hooks/app/addToFavorite";
import { useRemoveFromFavorite } from "@/hooks/app/removeFromFavorite";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export default function AddToFavoriteButton() {
  const { onSubmit: add, isLoading: addIsLoad } = useAddToFavorite();
  const { onSubmit: remove, isLoading: removeIsLoad } = useRemoveFromFavorite();
  const favorite = useSelector((state: RootState) => state.favorite);
  const user = useSelector((state: RootState) => state.user);

  return (
    <Fab
      size="small"
      sx={{
        left: "45%",
        top: "10%",
        background: "#fff",
        position: "absolute",
        boxShadow: 0,
      }}
    >
      {addIsLoad || removeIsLoad ? (
        <Fab
          component="p"
          sx={{ background: "#fff", position: "absolute", boxShadow: 0 }}
          size="small"
          variant="circular"
        >
          <CircularProgress
            size="small"
            sx={{ width: "20px", height: "20px" }}
          />
        </Fab>
      ) : favorite?.favoriteToUser?.length === 0 ? (
        <Fab
          component="p"
          sx={{ background: "#fff", position: "absolute", boxShadow: 0 }}
          size="small"
          variant="circular"
          onClick={() => add({ user: user.id, product: favorite.favorite })}
        >
          <FavoriteBorderIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          component="p"
          sx={{ background: "#fff", position: "absolute", boxShadow: 0 }}
          size="small"
          variant="circular"
          onClick={() => remove({ user: user.id, product: favorite.favorite })}
        >
          <FavoriteIcon color="primary" />
        </Fab>
      )}
    </Fab>
  );
}
