/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAdminContext } from "../../contexts/AdminContext";

const Section2 = () => {
  const { fetchExhibition, allExhibitions } = useAdminContext();

  useEffect(() => {
    fetchExhibition();
  }, []);

  function isOdd(number) {
    return number % 2 !== 0;
  }

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

      <div className="w-full mt-14">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 w-full">
          {allExhibitions?.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
                className={`relative w-full h-fit min-h-[350px] ${
                  isOdd(index) ? "md:mt-10" : "mt-0"
                }`}
              >
                <img
                  alt=""
                  src={item?.image}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
                  <div className="flex flex-col gap-1 items-center">
                    <p>{item?.title}</p>
                    <p>19-05-2022</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
