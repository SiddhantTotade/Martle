import Navbar from "@/components/common/navbar/Navbar";
import Favorite from "@/components/favorite/Favorite";
import MobileFavorite from "@/components/favorite/MobileFavorite";

export default function FavoritesLayout() {
  return (
    <>
      <Navbar />
      {/* <MobileFavorite /> */}
      <Favorite />
    </>
  );
}
