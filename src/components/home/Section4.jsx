/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import ShopCard from "../ShopCard";
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const Section4 = () => {
  const { fetchArts, allArtpieces } = useAdminContext();
  const { currentPage } = useAppContext();

  useEffect(() => {
    fetchArts();
  }, []);

  const [displayindex, setDisplayIndex] = useState(0);

  const [art, setart] = useState(allArtpieces[displayindex]);

  useEffect(() => {
    setart(allArtpieces[displayindex]);
  }, [displayindex, currentPage, allArtpieces]);

  function next() {
    const lastIndex = allArtpieces?.length - 1;
    if (art === allArtpieces[lastIndex]) {
      setDisplayIndex(0);
    } else {
      setDisplayIndex((prev) => prev + 1);
    }
  }

  function prev() {
    const lastIndex = allArtpieces?.length - 1;
    if (art === allArtpieces[0]) {
      setDisplayIndex(lastIndex);
    } else {
      setDisplayIndex((prev) => prev - 1);
    }
  }

  const [slicedArr, setSlicedArr] = useState();
  useEffect(() => {
    const arr = allArtpieces?.slice(
      displayindex === 0 ? 0 : displayindex === 1 ? 2 : 3,
      3
    );
    setSlicedArr(arr);
  }, [displayindex]);

  function nextDesk() {
    if (slicedArr?.length <= 1) {
      setDisplayIndex(0);
    } else {
      setDisplayIndex((prev) => prev + 1);
    }
  }

  function prevDesk() {
    if (displayindex === 0) {
      setDisplayIndex(0);
    } else {
      setDisplayIndex((prev) => prev - 1);
    }
  }

  // console.log("displayindex", displayindex);

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

        <div className="flex gap-4 md:hidden">
          <img
            onClick={prev}
            alt="nav"
            src="/images/left-nav.png"
            className="w-7 h-7 md:w-10 md:h-10 cursor-pointer hover:bg-yellow-300/60"
          />
          <img
            onClick={next}
            alt="nav"
            src="/images/right-nav.png"
            className="w-7 h-7 md:w-10 md:h-10 cursor-pointer hover:bg-yellow-300/60"
          />
        </div>
        <div className="hidden md:flex gap-4">
          <img
            onClick={prevDesk}
            alt="nav"
            src="/images/left-nav.png"
            className="w-7 h-7 md:w-10 md:h-10 cursor-pointer hover:bg-yellow-300/60"
          />
          <img
            onClick={nextDesk}
            alt="nav"
            src="/images/right-nav.png"
            className="w-7 h-7 md:w-10 md:h-10 cursor-pointer hover:bg-yellow-300/60"
          />
        </div>
      </div>

      {allArtpieces?.length === 0 && (
        <div className="w-full h-[200px] flex justify-center items-center bg-white border mt-10">
          No art pieces yet..
        </div>
      )}
      <div className="w-full flex-wrap gap-4 md:gap-10 mb-8 mt-10 hidden md:flex">
        {allArtpieces
          ?.slice(displayindex === 0 ? 0 : displayindex === 1 ? 2 : 3, 3)
          ?.map((item, index) => {
            return <ShopCard key={index} item={item} />;
          })}
      </div>

      <div className="w-full flex flex-wrap gap-4 md:gap-10 mb-8 mt-10 md:hidden">
        <ShopCard item={art} />;
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
