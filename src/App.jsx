import { useEffect } from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import Home from "./Home";  // 👈 new file for your landing page
import TallOaks from "./components/TallOaks.jsx";
import Evo from "./components/Evo.jsx";
import CafeSiri from "./components/CafeSiri.jsx";
import RamRathna from "./components/RamRathna.jsx";  

const App = () => {
const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      // Always scroll to top on non-home pages
      window.scrollTo(0, 0);
    } else if (hash) {
      // If there's a hash (#case-studies), scroll to that section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);
  
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Case Study Pages */}
      <Route path="/TallOaks" element={<TallOaks />} />
      <Route path="/Evo" element={<Evo />} />
      <Route path="/CafeSiri" element={<CafeSiri />} />
      <Route path="/RamRathna" element={<RamRathna />} />
    </Routes>
  );
};

export default App;
