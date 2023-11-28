import { useAppContext } from "../contexts/AppContext";

const AdminHeader = () => {
  const { currentPage, toggleSidebar, logout, userData } = useAppContext();
  return (
    <div className="w-full h-[60px] md:h-[80px] flex items-center justify-between md:pl-[300px] md:pr-8 px-3 shadow-md">
      <p className="font-medium text-[.85rem] md:text-[1rem] flex items-center gap-1">
        Admin Dashboard{" "}
        <span className="font-normal">
          {currentPage === "/admin"
            ? "/ Projects"
            : currentPage === "/admin/art-pieces"
            ? "/ Art Pieces"
            : ""}
        </span>
      </p>
      <div className="flex gap-3 items-center">
        <img
          alt=""
          src={userData?.user_data?.profile_image}
          className="w-10 h-auto hidden md:block"
        />
        <button
          onClick={logout}
          className="px-3 py-1 border-2 border-[#f97316] hover:border-[#f97316] rounded-sm hover:bg-[#f97316] hover:text-white hidden md:block"
        >
          Sign out
        </button>
      </div>
      <img
        onClick={toggleSidebar}
        alt=""
        src="/images/icons8-menu-30.png"
        className="w-7 h-auto md:hidden block"
      />
    </div>
  );
};

export default AdminHeader;
