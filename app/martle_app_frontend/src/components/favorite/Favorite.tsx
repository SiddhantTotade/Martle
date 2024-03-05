import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

import NoFavorites from "./NoFavorites";
import FavoriteItems from "./FavoriteItems";
import AppContainer from "../common/Container";
import PrirmaryButton from "../common/PrirmaryButton";
import MobileFavoriteItems from "./MobileFavoriteItems";
import { extractProductId } from "../common/utils/helperFunctions";
import { useGetFavoritesQuery } from "@/redux/services/appApiSlice";
import { useRemoveFromFavorite } from "@/hooks/app/removeFromFavorite";

export default function Favorite() {
  const user = useSelector((state: RootState) => state.user);
  const { onSubmit, isLoading: removeFavorite } = useRemoveFromFavorite();
  const { data, isLoading: getFavorite } = useGetFavoritesQuery(undefined);
  const productIds = extractProductId(data ? data : []);

  return (
    <>
      {data?.length === 0 ? (
        <NoFavorites />
      ) : (
        <AppContainer
          sx={{
            mt: 10,
            display: "grid",
            placeItems: "end",
            gap: "10px",
            "@media(max-width:800px)": {
              display: "block",
            },
          }}
        >
          <Box>
            <PrirmaryButton
              onClick={() => onSubmit({ user: user.id, product: productIds })}
              label="Empty Favorites"
            />
          </Box>
          <FavoriteItems
            data={data}
            getFavoriteIsLoading={getFavorite}
            removeFavoriteIsLoading={removeFavorite}
            onSubmit={onSubmit}
          />
          <MobileFavoriteItems
            data={data}
            getFavoriteIsLoading={getFavorite}
            removeFavoriteIsLoading={removeFavorite}
            onSubmit={onSubmit}
          />
        </AppContainer>
      )}
    </>
  );
}
