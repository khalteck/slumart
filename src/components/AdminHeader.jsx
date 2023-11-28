import { useAppContext } from "../contexts/AppContext";

const AdminHeader = () => {
  const { currentPage, toggleSidebar, logout } = useAppContext();
  return (
    <div className="w-full h-[80px] flex items-center justify-between md:pl-[300px] md:pr-8 px-3 shadow-md">
      <p className="font-medium text-[.85rem] md:text-[1rem] flex items-center gap-1">
        Admin Dashboard{" "}
        <span className="font-normal">
          / {currentPage === "/admin" ? "Projects" : "Art Pieces"}
        </span>
      </p>
      <button
        onClick={logout}
        className="px-3 py-2 border-2 border-black/80 hover:border-red-500 rounded-sm hover:bg-red-500 hover:text-white hidden md:block"
      >
        Sign out
      </button>
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
