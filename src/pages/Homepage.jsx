/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="w-full min-h-screen md:pt-[150px]">
          <HomeSection1 />
        </div>

        <HomeSection2 />

        <HomeSection3 />

        <HomeSection4 />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage;
