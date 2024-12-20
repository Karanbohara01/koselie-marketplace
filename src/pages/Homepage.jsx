import React from "react";
import Carousel from "../components/userComponents/Carousel";
import Sidebar from "../components/adminComponents/Sidebar";
import Products from "./userPages/Products";
import ProductCarousel from "../components/userComponents/ProductCarousel";
import LovedProducts from "../components/userComponents/LovedProducts";
import Gifts from "../components/userComponents/Gifts";
import Demo from "../components/userComponents/Demo";
import GradientBanner from "../components/userComponents/GradientBanner";

const Homepage = () => {
  return (
    <>
      <GradientBanner />
      <Demo />
      <ProductCarousel />
      <Products />
      <LovedProducts />
      <Gifts />
      <ProductCarousel />
    </>
  );
};

export default Homepage;
