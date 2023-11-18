/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const HomeSection2 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-3 md:px-[10%] pt-10 md:pt-0">
      <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
        <div className="w-fit mx-auto">
          GET INVOLVED
          <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
        </div>
      </h2>

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-[60px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full min-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 py-4 flex flex-col"
        >
          <img
            alt=""
            src="/images/vol.png"
            className="w-[80px] h-[80px] rounded-full mx-auto"
          />
          <div className="border-b-2 border-[#f97316]/30 px-6 py-3 text-black font-medium text-xl text-center">
            Become a Volunteer
          </div>
          <div className="p-6">
            <p className="text-center text-black">
              Volunteers are needed to handle different sections of the
              training. They are seen as partners that will help in the
              implementation of the project as well as contribute effectively to
              its success.
            </p>
          </div>
          <div className="w-full text-center mt-auto">
            <button
              // onClick={() => navigate("/gallery")}
              className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
            >
              Join Us
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full min-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 py-4 flex flex-col"
        >
          <img
            alt=""
            src="/images/icons8-money-50.png"
            className="w-[80px] h-[80px] rounded-full mx-auto"
          />
          <div className="border-b-2 border-[#f97316]/30 px-6 py-3 text-black font-medium text-xl text-center">
            Donate to Support
          </div>
          <div className="p-6">
            <p className="text-center text-black">
              You can donate to support the dream by sponsoring a child(ren)or a
              slum.
            </p>
          </div>
          <div className="w-full text-center mt-auto">
            <button
              // onClick={() => navigate("/gallery")}
              className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
            >
              Donate Now
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full min-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 py-4 flex flex-col"
        >
          <img
            alt=""
            src="/images/icons8-project-50.png"
            className="w-[80px] h-[80px] mx-auto"
          />
          <div className="border-b-2 border-[#f97316]/30 px-6 py-3 text-black font-medium text-xl text-center">
            The Project
          </div>
          <div className="p-6">
            <p className="text-center text-black">
              This project is aimed at Mentoring and Supporting the dream of
              over twenty intakes (children from twenty slums) between the ages
              of ten to seventeen.
            </p>
          </div>
          <div className="w-full text-center mt-auto">
            <button
              // onClick={() => navigate("/gallery")}
              className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
            >
              The Project
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold text-[1.5rem] md:text-[2rem]"
        >
          <div className="w-fit mx-auto">
            RECENT CHARITY CAMPAIGNS
            <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
          </div>
        </h2>

        <div className="w-full flex md:flex-row flex-col justify-center gap-10 mt-14">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-full min-w-[300px] md:w-[40%] flex flex-col rounded-lg bg-neutral-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src="/images/Slumart05-4.png"
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="px-6 pt-4">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                SUPPORT CHILDREN AND YOUTH TO REACH THEIR FULL POTENTIAL{" "}
              </h5>
              <p className="mb-4 text-base text-neutral-600">
                This project will have twenty intakes (children from twenty
                slums) between the ages of ten to seventeen.
              </p>
            </div>
            <div className="w-full mt-auto p-6">
              <button
                // onClick={() => navigate("/gallery")}
                className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-full min-w-[300px] md:w-[40%] flex flex-col rounded-lg bg-neutral-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src="/images/project2.png"
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="px-6 pt-4">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                A REVOLUTION IN ART AND FINANCE
              </h5>
              <p className="mb-4 text-base text-neutral-600">
                A great transformation in Art and Finance is gradually taking
                over the space.
              </p>
            </div>
            <div className="w-full mt-auto p-6">
              <button
                // onClick={() => navigate("/gallery")}
                className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* container */}
      {/* <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-[60px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat1.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat2.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat3.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat4.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat5.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-[#f97316]"
        >
          <img
            alt=""
            src="/images/feat6.jpg"
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:opacity-60 transition-all duration-500"
          />
        </div>
      </div> */}

      {/* <div className="w-full text-center mt-8">
        <button
          onClick={() => navigate("/gallery")}
          className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300"
        >
          View More
        </button>
      </div> */}
    </section>
  );
};

export default HomeSection2;
