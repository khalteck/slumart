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
  const itemsPerPage = 3;
  const [lastItemDisplayed, setLastItemDisplayed] = useState(false);
  const [firstItemDisplayed, setFirstItemDisplayed] = useState(false);

  useEffect(() => {
    // Calculate the first index of the displayed items
    const firstDisplayedIndex = displayindex * itemsPerPage;
    const isFirstDisplayed = firstDisplayedIndex === 0;

    // Update the state accordingly
    setFirstItemDisplayed(isFirstDisplayed);

    // Calculate the last index of the displayed items
    const lastDisplayedIndex = (displayindex + 1) * itemsPerPage;
    const totalItems = allArtpieces?.length || 0;

    // Check if the last set of items is being displayed
    const isLastDisplayed = lastDisplayedIndex >= totalItems;

    // Update the state accordingly
    setLastItemDisplayed(isLastDisplayed);
  }, [displayindex, allArtpieces]);

  const [art, setart] = useState(allArtpieces[displayindex]);

  useEffect(() => {
    setart(allArtpieces[displayindex]);
  }, [displayindex, currentPage, allArtpieces]);

  function next() {
    if (!lastItemDisplayed) {
      const lastIndex = allArtpieces?.length - 1;
      if (art === allArtpieces[lastIndex]) {
        setDisplayIndex(0);
      } else {
        setDisplayIndex((prev) => prev + 1);
      }
    }
  }

  function prev() {
    if (!firstItemDisplayed) {
      const lastIndex = allArtpieces?.length - 1;
      if (art === allArtpieces[0]) {
        setDisplayIndex(lastIndex);
      } else {
        setDisplayIndex((prev) => prev - 1);
      }
    }
  }

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
      </div>

      {allArtpieces?.length === 0 && (
        <div className="w-full h-[200px] flex justify-center items-center bg-white border mt-10">
          No art pieces yet..
        </div>
      )}
      <div className="w-full flex-wrap gap-4 md:gap-10 mb-8 mt-10 hidden md:flex">
        {allArtpieces
          ?.slice(
            displayindex * itemsPerPage,
            (displayindex + 1) * itemsPerPage
          )
          ?.map((item, index) => {
            const currentIndex = displayindex * itemsPerPage + index;
            return <ShopCard key={currentIndex} item={item} />;
          })}
      </div>

      <div className="w-full flex flex-wrap gap-4 md:gap-10 mb-8 mt-10 md:hidden">
        <ShopCard item={art} />;
      </div>
    </section>
  );
};

export default Section4;
