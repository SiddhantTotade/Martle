import React from "react";
import NavBar from "../components/base_components/NavBar";
import Sidebar from "../components/base_components/Sidebar";
import HeaderSwiper from "../components/home_page_components/HeaderSwiper";
import ProductNavigator from "../components/home_page_components/ProductNavigator";
import TopDealsCarousel from "../components/home_page_components/TopDealsCarousel";
import ShopByBrandsCarousel from "../components/home_page_components/ShopByBrandsCarousel";
import SpeciallyFromCarousel from "../components/home_page_components/SpeciallyFromCarousel";
import WeddingCarousels from "../components/home_page_components/WeddingCarousels";
import RandomCardsPick from "../components/home_page_components/RandomPickCards";
import GroceriesCarousel from "../components/home_page_components/GroceriesCarousel";
import VisitedItemsCarousel from "../components/home_page_components/VisitedItemsCarousel";
import Footer from "../components/base_components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <HeaderSwiper />
      <ProductNavigator />
      <TopDealsCarousel />
      <ShopByBrandsCarousel />
      <SpeciallyFromCarousel />
      <WeddingCarousels />
      <GroceriesCarousel />
      <RandomCardsPick />
      <VisitedItemsCarousel />
      <Footer />
    </>
  );
}
