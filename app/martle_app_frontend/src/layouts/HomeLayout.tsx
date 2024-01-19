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

  console.log(data["new_arrival"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        if (data["new_arrival"]["fetched"] != true) {
          onSubmit({ productCategory: newArrivals, type: "new_arrival" });
        } else if (data["trending_deals"]["fetched"] != true) {
          onSubmit({ productCategory: trendDeals, type: "trending_deals" });
        }
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
