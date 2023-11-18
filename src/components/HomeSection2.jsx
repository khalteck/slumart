import { useNavigate } from "react-router-dom";

const HomeSection2 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-3 md:px-[10%]">
      <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
        <div className="w-fit mx-auto">
          FEATURED COLLECTION
          <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
        </div>
      </h2>

      {/* container */}
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-[60px]">
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
      </div>

      <div className="w-full text-center mt-8">
        <button
          onClick={() => navigate("/gallery")}
          className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default HomeSection2;
