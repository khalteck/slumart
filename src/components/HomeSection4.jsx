import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const HomeSection4 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-3 md:px-[10%] mt-[80px] py-10 mb-10">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="font-bold text-[1.5rem] md:text-[2rem]"
      >
        <div className="w-fit mx-auto">
          OUR STORY
          <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
        </div>
      </h2>

      <div className="mt-[60px] flex md:flex-row flex-col-reverse gap-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full flex flex-col gap-4"
        >
          <h3 className="font-bold text-[1.5rem]">Get to Know Us</h3>
          <p className="w-full font-medium text-[1.25rem]">
            Transform your surroundings with the allure of fine art through our
            art rental services. No matter if you're a corporate business or an
            interior designer, renting art will allow you to refresh your space
            with new and dynamic beauty. Let's chat about the flexibility and
            ease of art rental today.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          alt=""
          src="/images/story.jpg"
          className="w-full md:w-1/2 h-[400px] md:h-[550px] object-cover object-top"
        />
      </div>
    </section>
  );
};

export default HomeSection4;
