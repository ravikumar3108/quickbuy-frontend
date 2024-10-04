import React from "react";
import Header from "../Home Pages/Header";
import HeroSection from "../Home Pages/HeroSection";
import Products from "../Home Pages/Products";
import Contact from "../Home Pages/Contact";
import GetProducts from "../Components/GetProducts";
import Footer from "../Home Pages/Footer";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <GetProducts />
        <Contact />
      </Layout>
    </>
  );
}

export default Home;
