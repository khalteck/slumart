/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import ShopCard from "../ShopCard";

const Section4 = () => {
  const { fetchArts, allArtpieces } = useAdminContext();

  useEffect(() => {
    fetchArts();
  }, []);

  return (
    <section className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
      <div className="flex md:flex-row flex-col justify-between items-end">
        <div>
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-medium">
            BUY OUR <span className="font-bold">ARTWORKS</span>
          </h2>
          <p className="text-[1.1rem]">
            Bring home the vibrant creations of SlumArt kids and let them know
            they matter in every brushstroke.
          </p>
        </div>

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

      {allArtpieces?.length === 0 && (
        <div className="w-full h-[200px] flex justify-center items-center bg-white border mt-10">
          No art pieces yet..
        </div>
      )}
      <div className="w-full flex flex-wrap gap-4 md:gap-10 mb-8 mt-10">
        {allArtpieces?.map((item, index) => {
          return <ShopCard key={index} item={item} />;
        })}
      </div>

      {/* <div className="mt-10 flex gap-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          className="flex flex-col w-full md:w-[400px] gap-4 text-[1.5rem] md:text-[2rem] font-light"
        >
          <img
            alt=""
            src="/images/art1.png"
            className="w-full h-auto min-h-[300px] bg-black/50"
          />
          <div className="flex flex-col gap-2 md:gap-3">
            <p>Roman Empire </p>
            <p className="text-[1.3rem]">by- Omotolani Afeez</p>
            <p>N25,000</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          className="sm:flex flex-col w-full md:w-[400px] gap-4 text-[1.5rem] md:text-[2rem] font-light hidden"
        >
          <img
            alt=""
            src="/images/art1.png"
            className="w-full h-auto min-h-[300px] bg-black/50"
          />
          <div className="flex flex-col gap-2 md:gap-3">
            <p>Roman Empire </p>
            <p className="text-[1.3rem]">by- Omotolani Afeez</p>
            <p>N25,000</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Section4;
