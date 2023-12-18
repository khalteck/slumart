/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();

  console.log(item);
  return (
    // <div
    //   data-aos="fade-left"
    //   data-aos-duration="1000"
    //   data-aos-delay="300"
    //   className="w-full min-w-[300px] flex flex-col rounded-lg bg-neutral-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    // >
    //   <div
    //     className="h-[100px] relative overflow-hidden bg-cover bg-no-repeat"
    //     data-te-ripple-init
    //     data-te-ripple-color="light"
    //   >
    //     <img
    //       className="rounded-t-lg w-full h-full object-cover object-top"
    //       src="/images/project2.png"
    //       alt=""
    //     />
    //     <div
    //       onClick={() => navigate(`/project-details/${item?.id}`)}
    //       className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] cursor-pointer bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
    //     ></div>
    //   </div>
    //   <div className="px-6 pt-4">
    //     <h5
    //       onClick={() => navigate(`/project-details/${item?.id}`)}
    //       className="mb-2 text-[1.5rem] font-medium leading-tight text-neutral-800 hover:underline cursor-pointer"
    //     >
    //       {item?.title}
    //     </h5>
    //     <p className="mb-4 text-[1.25rem] text-neutral-600">
    //       {item?.content?.split("")?.slice(0, 40)?.join("")}
    //       {"..."}
    //     </p>
    //   </div>
    //   <div className="w-full mt-auto p-6">
    //     <button
    //       onClick={() => navigate(`/project-details/${item?.id}`)}
    //       className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
    //     >
    //       View Details
    //     </button>
    //   </div>
    // </div>

    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay="200"
      className="relative w-full md:w-[500px] h-fit min-h-[350px] cursor-pointer transition-all duration-300 font-rale"
      onClick={() => navigate(`/project-details/${item?.id}`)}
    >
      <img alt="" src="/images/exhibition1.png" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 hover:bg-black/70 p-5 flex items-center justify-center font-semibold text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-white">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-center"> {item?.title}</p>
          <p>19-05-2022</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
