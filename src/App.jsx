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
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import StepsSection from "./components/StepsSection";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <TrustedBrands />
      <StepsSection />
      <OurServices />
      <Industries />
      <WhyChoose />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
