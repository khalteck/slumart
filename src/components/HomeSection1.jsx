import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const HomeSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-fit h-screen flex flex-col">
      <div className="w-full">
        <Carousel />
      </div>
      <div className="w-full h-fit md:h-[20vh] flex flex-col md:flex-row relative top-[-20px] bg-black/50">
        <div className="w-full h-full bg-red-400/70 p-2 md:p-5 flex flex-col gap-3 font-light text-white md:text-[1.5rem] items-center md:pt-[30px]">
          <h1 className="font-bold">Immerse in Creativity</h1>
          <button className="border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem]">
            View Gallery
          </button>
        </div>
        <div className="w-full h-full bg-[#f97316]/70 p-2 md:p-5 flex flex-col gap-3 font-light text-white md:text-[1.5rem] items-center md:pt-[30px]">
          <h1 className="font-bold">Elevating Artistry</h1>
          <button className="border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem]">
            View Blog
          </button>
        </div>
        <div className="w-full h-full bg-yellow-400/70  p-2 md:p-5 flex flex-col gap-3 font-light text-white md:text-[1.5rem] items-center md:pt-[30px]">
          <h1 className="font-bold">Canvas of Infinite Inspiration</h1>
          <button
            onClick={() => navigate("/about")}
            className="border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem]"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
