import Navbar from "@/components/common/navbar/Navbar";
import TrendingDeals from "@/components/home/TrendingDeals";
import NewArrival from "@/components/home/NewArrival";
import ElectronicsAndAccessories from "@/components/home/ElectronicsAndAccessories";
import Clothing from "@/components/home/Clothing";
import ShopDeals from "@/components/home/ShopDeals";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <NewArrival />
      <TrendingDeals />
      <ElectronicsAndAccessories />
      <Clothing />
      <ShopDeals />
    </>
  );
}
