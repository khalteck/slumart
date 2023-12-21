/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";

const AdminArtPieceCard = ({ item }) => {
  const navigate = useNavigate();
  const { tinyLoader, deleteIdArt, deleteArt } = useAdminContext();
  const { userData } = useAppContext();

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="w-full md:w-[300px] flex flex-col rounded-lg bg-neutral-200 shadow-md"
    >
      <div
        className="h-[200px] relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded-t-lg w-full h-full object-cover object-center"
          src={item?.image1}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>
      <div className="px-6 pt-4">
        <h5
          onClick={() => navigate(`/admin/art/${item?.id}`)}
          className="mb-2 text-[1.5rem] font-medium leading-tight text-neutral-800 hover:underline cursor-pointer"
        >
          {item?.name}
        </h5>
        <p className="text-[1rem] text-neutral-500">{item?.size}</p>
        <p className="text-[1rem] text-neutral-500">{item?.materials}</p>
        <p className="text-[1.25rem] text-neutral-600 font-bold mt-3">
          N {item?.price}
        </p>
      </div>
      <div className="w-full mt-auto p-6">
        {tinyLoader && deleteIdArt === item?.id ? (
          <p className="text-red-500">Deleting...</p>
        ) : (
          <div className="flex gap-3 items-center justify-between">
            <button
              onClick={() => navigate(`/admin/art/${item?.id}`)}
              className="w-fit bg-[#f97316] hover:bg-white hover:text-[#f97316] border border-[#f97316] px-4 py-1 rounded-sm text-white font-medium transition-all duration-300"
            >
              View
            </button>
            <div className="flex gap-2 items-center">
              {/* <div
                onClick={() => navigate(`/admin/art/${item?.id}/edit`)}
                className="w-8 h-8 p-1 rounded-full bg-green-500/20 cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/icons8-edit-64.png"
                  className="w-7 h-auto"
                />
              </div> */}
              <div
                onClick={() => deleteArt(userData?.access, item?.id)}
                className="w-8 h-8 p-1 rounded-full bg-red-500/20 cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/icons8-delete-48.png"
                  className="w-7 h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminArtPieceCard;
