import React from "react";
import NavBar from "../components/base_components/NavBar";
import Sidebar from "../components/base_components/Sidebar";
import HeaderSwiper from "../components/home_page_components/HeaderSwiper";
import ProductNavigator from "../components/home_page_components/ProductNavigator";
import ProductCarousel1 from "../components/home_page_components/ProductCarousel_1";
import ProductCarousel2 from "../components/home_page_components/ProductCarousel_2";
import SpeciallyFromCarousel from "../components/home_page_components/SpeciallyFromCarousel";
import Wedding from "../components/home_page_components/Wedding";
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
      <ProductCarousel1 />
      <ProductCarousel2 />
      <SpeciallyFromCarousel />
      <Wedding />
      <GroceriesCarousel />
      <RandomCardsPick />
      <VisitedItemsCarousel />
      <Footer />
    </>
  );
}
