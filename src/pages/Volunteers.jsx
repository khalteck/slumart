/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Volunteers = () => {
  return (
    <>
      <Header />
      <main>
        <div className="w-full min-h-screen md:pt-[150px] bg-gray-100 text-[2rem] flex justify-center items-center">
          Volunteers Page
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Volunteers;
