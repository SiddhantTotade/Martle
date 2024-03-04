import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CircularProgress, Fab, useTheme } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAddToFavorite } from "@/hooks/app/addToFavorite";
import { useRemoveFromFavorite } from "@/hooks/app/removeFromFavorite";

export default function AddToFavoriteButton() {
  const { onSubmit: add, isLoading: addIsLoad } = useAddToFavorite();
  const { onSubmit: remove, isLoading: removeIsLoad } = useRemoveFromFavorite();
  const favorite = useSelector((state: RootState) => state.favorite);
  const user = useSelector((state: RootState) => state.user);
  const theme = useTheme();

  return (
    <Fab
      size="small"
      sx={{
        left: "45.27%",
        top: "10%",
        zIndex: 1,
        background: theme.palette.mode === "dark" ? "#121212" : "#fff",
        position: "absolute",
        boxShadow: 0,
        "&:active": {
          boxShadow: 0,
        },
        "@media(max-width:600px)": {
          top: "17%",
          left: "45.2%",
        },
      }}
    >
      {addIsLoad || removeIsLoad ? (
        <Fab
          component="p"
          sx={{
            background: "transparent",
            position: "absolute",
            boxShadow: 0,
          }}
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
          sx={{
            background: "transparent",
            position: "absolute",
            boxShadow: 0,
            "&:active": {
              boxShadow: 0,
            },
          }}
          size="small"
          variant="circular"
          onClick={() => add({ user: user.id, product: favorite.favorite })}
        >
          <FavoriteBorderIcon color="primary" />
        </Fab>
      ) : (
        <Fab
          component="p"
          sx={{
            background: "transparent",
            position: "absolute",
            boxShadow: 0,
            "&:active": {
              boxShadow: 0,
            },
          }}
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
