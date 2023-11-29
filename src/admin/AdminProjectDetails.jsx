/* eslint-disable react-hooks/exhaustive-deps */
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import AdminComment from "../components/AdminComment";

const AdminProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchProjects, allProjects, deleteProject, tinyLoader, deleteId } =
    useAdminContext();

  const { userData, fetchComments, allComments } = useAppContext();

  useEffect(() => {
    fetchProjects(userData?.access);
    fetchComments();
  }, []);

  const currentProject = allProjects?.filter((x) => x?.id == id)[0];

  const [projectComments, setProjectComments] = useState([]);

  useEffect(() => {
    const array = allComments?.filter((itm) => {
      return itm?.blog == currentProject?.id;
    });

    setProjectComments(array);
  }, [allComments]);

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
                    {projectComments?.length}{" "}
                    <img
                      alt=""
                      src="/images/icons8-comment-50.png"
                      className="w-8 h-auto"
                    />
                  </p>

                  {tinyLoader && deleteId === currentProject?.id ? (
                    <p className="text-red-500">Deleting...</p>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          navigate(`/admin/project/${currentProject?.id}/edit`)
                        }
                        className="w-fit bg-white text-red-black border border-black px-5 md:px-8 py-2 rounded-sm font-medium transition-all duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          deleteProject(userData?.access, currentProject?.id)
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

            <div className="w-full border-2 border-[#f97316] rounded-lg p-4 mt-10 bg-neutral-200/50">
              <h2 className="text-[1.5rem] font-medium mb-5">
                Projects Comments
              </h2>

              {projectComments?.map((item, index) => {
                return (
                  <AdminComment
                    key={index}
                    item={item}
                    projectComments={projectComments}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default AdminProjectDetails;
