import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

const AdminArtPiece = () => {
  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5">
        <h1>Admin Art piece</h1>
      </div>
    </>
  );
};

export default AdminArtPiece;
