/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAdminContext } from "../contexts/AdminContext";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const AdminArtDetails = () => {
  const { fetchArts, allArtpieces, tinyLoader, deleteIdArt, deleteArt } =
    useAdminContext();
  const { userData } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchArts();
  }, []);

  const { id } = useParams();

  const currentArt = allArtpieces?.filter((x) => x?.id == id)[0];

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[2rem]">Art Details - {currentArt?.name}</h1>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 gap-2">
              {currentArt?.images?.map((img, ind) => {
                return (
                  <img
                    key={ind}
                    src={img}
                    alt={`image-preview-${ind + 1}`}
                    className="w-full h-[250px] object-cover border-2 border-[#f97316] rounded-lg"
                  />
                );
              })}
            </div>

            <h3 className="text-[1.5rem] font-medium mt-4">Art Details</h3>

            <div className="w-full flex flex-col gap-3 border-2 border-[#f97316] rounded-lg p-3">
              <p>
                Name:{" "}
                <span className="font-bold text-[1.25rem]">
                  {currentArt?.name}
                </span>
              </p>
              <p>
                Materials:{" "}
                <span className="font-normal text-[1.25rem]">
                  {currentArt?.materials}
                </span>
              </p>
              <p>
                Size:{" "}
                <span className="font-normal text-[1.25rem]">
                  {currentArt?.size}
                </span>
              </p>
              <p>
                Condition:{" "}
                <span className="font-normal text-[1.25rem]">
                  {currentArt?.condition}
                </span>
              </p>
              <p>
                From home:{" "}
                <span className="font-normal text-[1.25rem]">
                  {currentArt?.from_home ? "Yes" : "No"}
                </span>
              </p>
              <p>
                Price:{" "}
                <span className="font-bold text-[1.25rem]">
                  {currentArt?.price}
                </span>
              </p>

              <div className="mt-5">
                {tinyLoader && deleteIdArt === currentArt?.id ? (
                  <p className="text-red-500">Deleting...</p>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        navigate(`/admin/art/${currentArt?.id}/edit`)
                      }
                      className="w-fit bg-white text-red-black border border-black px-5 md:px-8 py-2 rounded-sm font-medium transition-all duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        deleteArt(userData?.access, currentArt?.id)
                      }
                      className="w-fit bg-red-500 hover:bg-white hover:text-red-500 border border-red-500 px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminArtDetails;
