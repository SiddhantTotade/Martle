import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/home_page/NavBar';
import Header from './components/home_page/HeaderSwiper';
import ProductNavigator from './components/home_page/ProductNavigator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <ProductNavigator />
  </React.StrictMode>
);