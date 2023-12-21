import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="w-full pb-[80px] md:pt-10 px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
      <div className="flex gap-3 items-center relative">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          className="w-[80%] h-[1px] bg-[#262626]"
        ></div>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="font-medium text-[1.2rem]"
        >
          Explore
        </p>
      </div>

      <div className="border-r border-[#262626] pt-5 pb-14 md:pr-[80px] pr-10 mt-5 md:mt-0">
        <div className="flex justify-between items-center gap-4 mt-4 md:mt-7">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-medium">
            DISCOVER <span className="font-bold">SLUMART</span>
          </h2>
          <div className="flex gap-4">
            <img
              alt="nav"
              src="/images/left-nav.png"
              className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
            />
            <img
              alt="nav"
              src="/images/right-nav.png"
              className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-10 flex md:flex-row flex-col">
          <div className="w-full h-[200px] md:h-[300px] md:w-[45%] bg-[#B19943] p-6 flex flex-col text-white">
            <p className="text-[2rem] lg:text-[2.5rem] font-bold mb-auto">
              Our
              <br />
              Mission
            </p>
            <Link to="/about">
              <p className="flex gap-2 items-center font-bold mt-auto cursor-pointer hover:underline text-[1.25rem]">
                Read<span>{">>"}</span>
              </p>
            </Link>
          </div>
          <img
            alt=""
            src="/images/hero3.png"
            className="w-full md:w-[55%] h-auto min-h-[350px] bg-black/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
