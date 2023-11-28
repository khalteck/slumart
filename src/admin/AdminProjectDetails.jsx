/* eslint-disable react-hooks/exhaustive-deps */
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
// import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

const AdminProjectDetails = () => {
  // const { userData } = useAppContext();
  const { id } = useParams();
  const { fetchProjects, allProjects, deleteProject, tinyLoader, deleteId } =
    useAdminContext();
  const { userData } = useAppContext();

  useEffect(() => {
    fetchProjects(userData?.access);
  }, []);

  const currentProject = allProjects?.filter((x) => x?.id == id)[0];

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[1.25rem]">
            PROJECT DETAILS - {currentProject?.title}
          </h1>

          <div className="w-full">
            <div className="w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200/50 border-2 border-[#f97316] text-neutral-700 lg:flex-row">
              {/* <img
                className="h-96 w-full lg:w-1/2 rounded-t-lg object-cover md:h-[500px] md:!rounded-none md:!rounded-l-lg"
                src={currentProject?.image}
                alt=""
              /> */}
              <div className="w-full flex flex-col justify-start p-6">
                <h5 className="mb-2 text-[1.5rem] md:text-[2.5rem] font-medium">
                  {currentProject?.title}
                </h5>
                <p className="mb-4 text-[1.1rem]">{currentProject?.content}</p>
                <div className="w-fit text-neutral-600 mt-auto flex gap-5 items-center justify-between">
                  <img
                    alt=""
                    src={currentProject?.author?.profile_image}
                    className="w-[100px] h-[100px] object-cover rounded-full my-1"
                  />
                  <div>
                    <p>Created:</p>
                    <p className="text-neutral-600">
                      {currentProject?.author?.name}
                    </p>
                    <p className="text-neutral-600 text-[.9rem]">
                      {currentProject?.created_at}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-3 mt-10">
                  <p className="flex gap-1 items-center text-[1.5rem]">
                    3{" "}
                    <img
                      alt=""
                      src="/images/icons8-comment-50.png"
                      className="w-8 h-auto"
                    />
                  </p>

                  {tinyLoader && deleteId === currentProject?.id ? (
                    <p className="text-red-500">Deleting...</p>
                  ) : (
                    <button
                      onClick={() =>
                        deleteProject(userData?.access, currentProject?.id)
                      }
                      className="w-fit bg-red-500 hover:bg-white hover:text-red-500 border border-red-500 px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full border-2 border-[#f97316] rounded-lg p-4 mt-10 bg-neutral-200/50">
              <h2 className="text-[1.5rem] font-medium mb-5">
                Projects Comments
              </h2>

              <div className="w-full flex flex-col gap-3">
                <div className="w-full bg-white rounded-lg p-3">
                  <p className="text-[.85rem] text-black/50 mb-2">
                    By: John Doe
                  </p>
                  <p>
                    {" "}
                    This project will have twenty intakes (children from ten
                    slum) between ages ten to seventeen.
                  </p>
                  <div className="w-full pl-12 md:pl-[100px]">
                    <div className="w-full border-l-2 border-gray-300 flex flex-col gap-2 mt-3 pl-3">
                      <p className="text-[.85rem] text-black/50">Replies:</p>
                      <p className="border-b border-black/20 pt-2">
                        Thanks for this
                      </p>
                      <p className="border-b border-black/20 pt-2">Wow</p>
                      <p className="border-b border-black/20 pt-2">Nice one</p>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-white rounded-lg p-3">
                  <p className="text-[.85rem] text-black/50 mb-2">
                    By: John Doe
                  </p>
                  <p>
                    {" "}
                    This project will have twenty intakes (children from ten
                    slum) between ages ten to seventeen.
                  </p>
                  <div className="w-full pl-12 md:pl-[100px]">
                    <div className="w-full border-l-2 border-gray-300 flex flex-col gap-2 mt-3 pl-3">
                      <p className="text-[.85rem] text-black/50">Replies:</p>
                      <p className="border-b border-black/20 pt-2">
                        Thanks for this
                      </p>
                      <p className="border-b border-black/20 pt-2">Wow</p>
                      <p className="border-b border-black/20 pt-2">Nice one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default AdminProjectDetails;
