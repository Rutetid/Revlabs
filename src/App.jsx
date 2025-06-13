import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TrustedBrands from "./components/TrustedBrands";
import OurServices from "./components/OurServices";
import Industries from "./components/Industries";
import WhyChoose from "./components/WhyChoose";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <TrustedBrands />
      <OurServices />
      <Industries />
      <WhyChoose />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default App;
