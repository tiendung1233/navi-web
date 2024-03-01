import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import { useEffect } from "react";
import Footer from "./components/organs/Footer";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsService from "./components/pages/TermsService";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />
      <Routes>
          <Route path="/navi-web/" element={<Home />} />
          <Route path="/navi-web/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/navi-web/terms-of-service" element={<TermsService />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
