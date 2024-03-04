import { useEffect } from "react";
import { useSelector } from "react-redux";

import Hero from "./Hero";
import Clothing from "./Clothing";
import ShopDeals from "./ShopDeals";
import ProductNav from "./ProductNav";
import NewArrival from "./NewArrival";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import RecentlyViewed from "./RecentlyViewed";
import TrendingDeals from "../home/TrendingDeals";
import { useGetProducts } from "@/hooks/app/getProducts";
import { newArrivals, trendDeals } from "./utils/productCategory";
import ElectronicsAndAccessories from "./ElectronicsAndAccessories";

export default function Home() {
  const data = useSelector((state: any) => state.product);
  const { onSubmit, isLoading } = useGetProducts();

  const newArrivalFetched = useSelector(
    (state: RootState) => state.product.new_arrival.fetched
  );
  const newTrendingFetched = useSelector(
    (state: RootState) => state.product.trending_deals.fetched
  );

  const fetchData = () => {
    if (!newArrivalFetched) {
      onSubmit({ productCategory: newArrivals, type: "new_arrival" });
    }
    if (!newTrendingFetched) {
      onSubmit({ productCategory: trendDeals, type: "trending_deals" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500;

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
