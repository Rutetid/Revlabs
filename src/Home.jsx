import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TrustedBrands from "./components/TrustedBrands";
import OurServicesHeader from "./components/OurServicesHeader";
import StepsSection from "./components/StepsSection";
import Industries from "./components/Industries";
import WhyChoose from "./components/WhyChoose";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <TrustedBrands />
      <OurServicesHeader />
      <StepsSection />
      <Industries />
      <WhyChoose />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
