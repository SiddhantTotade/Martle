import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/home_page/NavBar';
import Header from './components/home_page/HeaderSwiper';
import ProductNavigator from './components/home_page/ProductNavigator';
import ProductCarousel from './components/home_page/ProductCarousel';
import RandomCardsPick from './components/home_page/RandomPickCards';
import Footer from './components/home_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <ProductNavigator />
    <ProductCarousel />
    <ProductCarousel />
    <RandomCardsPick/>
    <ProductCarousel />
    <Footer />
  </React.StrictMode>
);