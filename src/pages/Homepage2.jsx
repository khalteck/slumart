/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";

const Homepage2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  function scrollToSection3() {
    const section3 = document.getElementById("section3");

    if (section3) {
      section3.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Header />
      <main className="text-[#262626]">
        <Section1 scrollToSection3={scrollToSection3} />

        <Section2 />

        <Section3 />

        <Section4 />

        <Section5 />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage2;
