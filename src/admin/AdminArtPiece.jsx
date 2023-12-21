/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AdminArtPieceCard from "../components/AdminArtPieceCard";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAdminContext } from "../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

const AdminArtPiece = () => {
  const { fetchArts, allArtpieces } = useAdminContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchArts();
  }, []);

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <div className="w-full md:w-[300px] bg-slate-100 border-2 text-black/70 border-[#f97316] rounded-md p-3 shadow-md">
            <p className="text-[1.5rem] font-bold">Total Art Pieces</p>
            <div className="w-[60px] h-[60px] flex justify-center items-center text-white rounded-lg leading-tight bg-[#f97316] font-bold text-[2rem]">
              {allArtpieces?.length}
            </div>
          </div>

          <div className="w-full bg-slate-100 border-2 text-black/70 border-[#f97316] rounded-md p-3 md:p-6 shadow-md">
            <div className="w-full flex justify-between gap-10 flex-wrap mb-4">
              <h2 className="text-[1.5rem] font-medium mb-5">All Art Pieces</h2>
              <button
                onClick={() => navigate("/admin/create-art")}
                className="w-fit h-fit px-3 py-1 border-2 border-[#f97316] hover:border-[#f97316] rounded-sm hover:bg-[#f97316] hover:text-white flex gap-2 items-center"
              >
                Add Art Piece
                <img
                  alt=""
                  src="/images/icons8-plus-64.png"
                  className="w-5 h-auto"
                />
              </button>
            </div>
            {allArtpieces?.length === 0 && (
              <div className="w-full h-[200px] flex justify-center items-center bg-white border">
                No art pieces yet..
              </div>
            )}
            <div className="w-full flex flex-wrap gap-5 md:gap-10">
              {allArtpieces?.map((x, index) => {
                return <AdminArtPieceCard key={index} item={x} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminArtPiece;
