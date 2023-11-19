import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const HomeSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-fit h-screen flex flex-col">
      <div className="w-full">
        <Carousel />
      </div>
      <div className="w-full md:min-h-[150px] h-[450px] md:h-[30vh] flex flex-col md:flex-row relative top-[-20px]">
        <div className="w-full h-full bg-caro1 bg-no-repeat bg-cover text-white md:text-[1.5rem] items-center md:pt-[30px] relative">
          <div className="w-full h-full absolute top-0 left-0 p-2 md:p-6 flex flex-col gap-1 items-center bg-blue-500/70 font">
            <h1 className="font-bold leading-tight text-[1.5rem] md:text-[2.5rem]">
              15,000+
            </h1>
            <p className="leading-tight">Volunteers</p>
            <button
              onClick={() => navigate("/volunteers")}
              className="w-fit border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem] mt-1 md:mt-4"
            >
              Join Us
            </button>
          </div>
        </div>

        <div className="w-full h-full bg-caro3 bg-no-repeat bg-cover text-white md:text-[1.5rem] items-center md:pt-[30px] relative">
          <div className="w-full h-full absolute top-0 left-0 p-2 md:p-6 flex flex-col gap-1 items-center bg-green-500/70 font">
            <h1 className="font-bold leading-tight text-[1.5rem] md:text-[2.5rem]">
              380+
            </h1>
            <p className="leading-tight">Sponsors</p>
            <button
              onClick={() => navigate("/about")}
              className="w-fit border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem] mt-1 md:mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full h-full bg-caro2 bg-no-repeat bg-cover text-white md:text-[1.5rem] items-center md:pt-[30px] relative">
          <div className="w-full h-full absolute top-0 left-0 p-2 md:p-6 flex flex-col gap-1 items-center bg-red-500/70 font">
            <h1 className="font-bold leading-tight text-[1.5rem] md:text-[2.5rem]">
              77+
            </h1>
            <p className="leading-tight">Awards</p>
            <button
              onClick={() => navigate("/projects")}
              className="w-fit border-2 border-white rounded-sm px-3 py-1 md:py-2 font-bold text-[.85rem] mt-1 md:mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
