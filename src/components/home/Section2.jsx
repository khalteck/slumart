const Section2 = () => {
  return (
    <section className="w-full py-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
      <div className="flex gap-3 items-center relative">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-medium">
          EXHIBITIONS
        </h2>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          className="w-full h-[1px] bg-[#262626]"
        ></div>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="absolute font-light bottom-[-10px] right-0"
        >
          Past Exhibitions
        </p>
      </div>

      <div className="w-full flex sm:flex-row flex-col gap-5 md:gap-10 mt-14">
        <div className="flex-col flex gap-5 md:gap-10 w-full md:w-1/2">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            className="relative w-full h-fit"
          >
            <img
              alt=""
              src="/images/exhibition1.png"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
              <div className="flex flex-col gap-1 items-center">
                <p>Eniola’s Collage</p>
                <p>19-05-2022</p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            className="relative w-full h-fit"
          >
            <img
              alt=""
              src="/images/exhibition1.png"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
              <div className="flex flex-col gap-1 items-center">
                <p>Eniola’s Collage</p>
                <p>19-05-2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col flex gap-5 md:gap-10 w-full md:w-1/2 sm:mt-[120px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            className="relative w-full h-fit"
          >
            <img
              alt=""
              src="/images/exhibition2.png"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
              <div className="flex flex-col gap-1 items-center">
                <p className="text-center w-[70%]">
                  Olumuyiwa’s Oil Paint Drawing of Wole Soyinka
                </p>
                <p>19-05-2022</p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            className="relative w-full h-fit"
          >
            <img
              alt=""
              src="/images/exhibition1.png"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
              <div className="flex flex-col gap-1 items-center">
                <p>Eniola’s Collage</p>
                <p>19-05-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
