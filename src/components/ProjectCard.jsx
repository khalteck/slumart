/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="w-full min-w-[300px] flex flex-col rounded-lg bg-neutral-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div
        className="h-[100px] relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded-t-lg w-full h-full object-cover object-top"
          src="/images/project2.png"
          alt=""
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="px-6 pt-4">
        <h5 className="mb-2 text-[1.5rem] font-medium leading-tight text-neutral-800">
          {item?.title}
        </h5>
        <p className="mb-4 text-[1.25rem] text-neutral-600">
          {item?.content?.split("")?.slice(0, 40)?.join("")}
          {"..."}
        </p>
      </div>
      <div className="w-full mt-auto p-6">
        <button
          onClick={() => navigate(`/project-details/${item?.id}`)}
          className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
