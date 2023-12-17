/* eslint-disable react/no-unescaped-entities */
const Section1 = () => {
  return (
    <section className="w-full px-3 md:px-[3%] lg:pl-[10%] md:pr-0 pt-[100px] md:pt-0 flex md:flex-row flex-col-reverse gap-10 md:gap-5 justify-between items-center font-poppins">
      <div className="flex flex-col gap-4 md:pt-[100px] lg:pt-0 w-full md:w-[45%]">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-bold"
        >
          It’s <span className="text-[#B19943]">Cre</span>
          <span className="text-[#F7C30D]">a</span>
          <span className="text-[#B19943]">ti</span>
          <span className="text-[#F7C30D]">vi</span>
          <span className="text-[#B19943]">ty</span> <br />
          from the unprivileged
          <br /> communities of <span className="text-[#2C45C8]">Lagos</span>.
        </h1>
        <p data-aos="fade-up" data-aos-duration="800">
          Art opens doors to opportunity, turning imagination into a gateway for
          endless possibilities. In every stroke of art, there lies the brush of
          opportunity, creating a canvas where creativity meets endless
          potential.
        </p>
        <button
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-black py-3 px-4 flex gap-2 items-center text-white w-fit rounded-2xl font-medium text-[1.2rem] mt-3"
        >
          Let's Go{" "}
          <img alt="arrow" src="/images/Arrow 1.png" className="w-7 h-auto" />
        </button>
        <img
          data-aos="fade-up"
          data-aos-duration="800"
          alt="decor"
          src="/images/decor1.png"
          loading="lazy"
          className="w-[200px] h-auto mt-10"
        />
      </div>
      <img alt="hero" src="/images/hero1.png" className="w-full md:w-[50%]" />
    </section>
  );
};

export default Section1;
