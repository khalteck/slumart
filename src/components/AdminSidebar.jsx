import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { openSideBar, toggleSidebar, currentPage, logout } = useAppContext();

  return (
    <>
      <div className="w-[280px] bg-[#0f172a] p-4 fixed left-0 top-0 h-screen overflow-y-auto text-white hidden md:block">
        <ul className="w-full flex flex-col gap-3">
          <li className="w-full mb-14">
            <img
              alt=""
              src="/images/new-logo.png"
              className="w-[150px] md:w-[200px] h-auto"
              onClick={() => navigate("/")}
            />
          </li>
          <li
            onClick={() => navigate("/admin")}
            className="w-full bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer py-3 pl-6 flex gap-3 relative"
          >
            {currentPage === "/admin" && (
              <div className="w-2 h-[80%] absolute top-[50%] left-0 translate-y-[-50%] rounded-md bg-[#f97316]"></div>
            )}
            Projects
          </li>
          <li
            onClick={() => navigate("/admin/art-piece")}
            className="w-full bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer py-3 pl-6 flex gap-3 relative"
          >
            {currentPage === "/admin/art-piece" && (
              <div className="w-2 h-[80%] absolute top-[50%] left-0 translate-y-[-50%] rounded-md bg-[#f97316]"></div>
            )}
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
                <img
                  alt=""
                  src="/images/new-logo.png"
                  className="w-[150px] md:w-[200px] h-auto"
                  onClick={() => navigate("/")}
                />
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
              <li
                onClick={() => {
                  navigate("/admin");
                  toggleSidebar();
                }}
                className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => {
                  navigate("/admin/art-piece");
                  toggleSidebar();
                }}
                className="w-full p-3 bg-white/10 rounded-md hover:bg-[#f97316]/80 cursor-pointer"
              >
                Art Pieces
              </li>
              <li
                onClick={logout}
                className="w-full p-3 bg-red-500/40 rounded-md hover:bg-[#f97316]/80 cursor-pointer"
              >
                Sign out
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
