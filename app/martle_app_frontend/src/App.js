import React from "react";
import NavBar from "./components/base_components/NavBar";
import HeaderSwiper from "./components/home_page/HeaderSwiper"
import ProductNavigator from "./components/home_page/ProductNavigator";
import ProductCarousel from "./components/home_page/ProductCarousel";
import RandomCardsPick from "./components/home_page/RandomPickCards";
import Footer from "./components/base_components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderSwiper />
      <ProductNavigator />
      <ProductCarousel />
      <ProductCarousel />
      <RandomCardsPick />
      <ProductCarousel />
      <Footer />
    </>
  )
}