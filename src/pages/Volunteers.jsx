/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Volunteers = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="w-full md:pt-[80px]">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0 bg-countries`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                Become a Volunteer
              </h1>
              <button
                onClick={() => navigate("/register")}
                className="w-fit bg-[#F7C30D] hover:bg-white hover:text-[#F7C30D] border border-[#F7C30D] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-[10%] py-[80px] flex gap-10 md:flex-row flex-col">
          <img
            alt=""
            src="/images/volunteer.jpg"
            className="w-full md:w-1/2 h-auto"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
              <div className="w-fit">
                BECOME A VOLUNTEER
                <div className="w-[70%] h-3 bg-[#F7C30D] mt-1"></div>
              </div>
            </h2>
            <div className="text-[1.1rem]">
              Volunteers are needed to handle different sections of the
              training. They are seen as partners that will help in the
              implementation of the project as well as contribute effectively to
              its success.
            </div>

            <button
              onClick={() => navigate("/register")}
              className="w-fit bg-[#F7C30D] hover:bg-white hover:text-[#F7C30D] border border-[#F7C30D] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
            >
              Join Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Volunteers;
