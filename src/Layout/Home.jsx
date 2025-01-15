import React from "react";
import HeroSection from "../Pages/HeroSection";
import Contact from "../Pages/Contact";
import GetProducts from "../Components/GetProducts";
import Layout from "./Layout";
import Team from "../Pages/Team";
import Blogs from "../Pages/Blogs";
import Pomotion from "../Pages/Pomotion";

function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Pomotion/>
        <GetProducts />
        <Team/>
        <Blogs/>
        <Contact />
      </Layout>
    </>
  );
}

export default Home;
