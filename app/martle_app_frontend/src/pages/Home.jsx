
import React from "react";
import HeaderSwiper from "../components/home_page_components/HeaderSwiper"
import ProductNavigator from "../components/home_page_components/ProductNavigator";
import ProductCarousel from "../components/home_page_components/ProductCarousel_1";
import RandomCardsPick from "../components/home_page_components/RandomPickCards";
import Footer from "../components/base_components/Footer";
import NavBar from "../components/base_components/NavBar";
import Sidebar from "../components/base_components/Sidebar";

export default function Home() {
    return (
        <>
            <NavBar />
            <Sidebar />
            <HeaderSwiper />
            <ProductNavigator />
            <ProductCarousel />
            {/* <ProductCarousel /> */}
            {/* <RandomCardsPick /> */}
            {/* <ProductCarousel /> */}
            <Footer />
        </>
    )
}