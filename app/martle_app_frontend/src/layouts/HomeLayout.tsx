import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "@/components/common/navbar/Navbar";
import TrendingDeals from "@/components/home/TrendingDeals";
import NewArrival from "@/components/home/NewArrival";
import ElectronicsAndAccessories from "@/components/home/ElectronicsAndAccessories";
import Clothing from "@/components/home/Clothing";
import ShopDeals from "@/components/home/ShopDeals";
import RecentlyViewed from "@/components/home/RecentlyViewed";
import Hero from "@/components/home/Hero";
import ProductNav from "@/components/home/ProductNav";
import Footer from "@/components/common/footer/Footer";
import { useGetProducts } from "@/hooks/app/getProducts";
import {
  newArrivals,
  trendDeals,
} from "@/components/home/utils/productCategory";

export default function HomeLayout() {
  const data = useSelector((state: any) => state["product"]);
  const { onSubmit, isLoading } = useGetProducts();

  const newArrivalFetched = useSelector(
    (state: any) => state["product"]["new_arrival"]["fetched"]
  );
  const newTrendingFetched = useSelector(
    (state: any) => state["product"]["trending_deals"]["fetched"]
  );

  const fetchData = () => {
    if (!newArrivalFetched) {
      onSubmit({ productCategory: newArrivals, type: "new_arrival" });
    } else if (!newTrendingFetched) {
      onSubmit({ productCategory: trendDeals, type: "trending_deals" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (isBottom) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductNav />
      <NewArrival data={data["new_arrival"]} isLoading={isLoading} />
      <TrendingDeals data={data["trending_deals"]} isLoading={isLoading} />
      <ElectronicsAndAccessories />
      <Clothing />
      <ShopDeals />
      <RecentlyViewed />
      <Footer />
    </>
  );
}
