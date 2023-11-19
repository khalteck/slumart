/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Countries = () => {
  return (
    <>
      <Header />
      <main className="w-full md:pt-[120px]">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0 bg-countries`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                SLUMART WORLDWIDE
              </h1>
            </div>
          </div>
        </section>

        <div className="w-full min-h-[500px] md:pt-[150px] bg-gray-100 text-[2rem] flex justify-center items-center">
          Countries Page
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Countries;
