import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { openSideBar, toggleSidebar } = useAppContext();

  return (
    <>
      <div className="w-[280px] bg-[#0f172a] p-4 fixed left-0 top-0 h-screen overflow-y-auto text-white hidden md:block">
        <ul className="w-full flex flex-col gap-3">
          <li className="w-full mb-14">
            <div
              onClick={() => navigate("/")}
              className="gap-3 items-center flex cursor-pointer"
            >
              <img
                alt=""
                src="/images/logo.png"
                className="md:w-12 md:h-12 w-8 h-8"
              />
              <h1 className="text-white text-[1.75rem] md:text-[2rem] font-bold">
                SlumArt
              </h1>
            </div>
          </li>
          <li className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer">
            Projects
          </li>
          <li className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer">
            Art Pieces
          </li>
        </ul>
      </div>

      {/* mobile */}
      {openSideBar && (
        <div className="w-full fixed left-0 top-0 h-screen flex">
          <div className="w-[70%] bg-[#0f172a] p-4 overflow-y-auto text-white">
            <ul className="w-full flex flex-col gap-3">
              <li className="w-full mb-14 flex justify-between items-center">
                <div
                  onClick={() => navigate("/")}
                  className="gap-3 items-center flex cursor-pointer"
                >
                  <img
                    alt=""
                    src="/images/logo.png"
                    className="md:w-12 md:h-12 w-8 h-8"
                  />
                  <h1 className="text-white text-[1.75rem] md:text-[2rem] font-bold">
                    SlumArt
                  </h1>
                </div>
                <div
                  onClick={toggleSidebar}
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-white"
                >
                  <img
                    alt=""
                    src="/images/icons8-close-48.png"
                    className="w-5 h-auto"
                  />
                </div>
              </li>
              <li className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer">
                Projects
              </li>
              <li className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer">
                Art Pieces
              </li>
            </ul>
          </div>
          <div onClick={toggleSidebar} className="w-[30%] bg-black/50"></div>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
