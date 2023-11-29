/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAppContext } from "../contexts/AppContext";
import { useAdminContext } from "../contexts/AdminContext";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const AdminEditProject = () => {
  const { userData } = useAppContext();
  const { editProject, tinyLoader, allProjects, fetchProjects } =
    useAdminContext();

  useEffect(() => {
    fetchProjects(userData?.access);
  }, []);

  const { id } = useParams();

  const currentProject = allProjects?.filter((x) => x?.id == id)[0];

  const [formData, setFormData] = useState({
    title: currentProject?.title || "",
    content: currentProject?.content || "",
    author: userData?.user_data?.id,
  });

  useEffect(() => {
    setFormData({
      title: currentProject?.title || "",
      content: currentProject?.content || "",
      author: userData?.user_data?.id,
    });
  }, [allProjects]);

  function handleFormChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }
  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[2rem]">
            Edit Project - {currentProject?.title}{" "}
          </h1>

          <form className="w-full border-2 border-[#f97316] rounded-lg p-4 bg-neutral-200/50 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Example project"
                onChange={handleFormChange}
                value={formData?.title}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                id="content"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Example content"
                onChange={handleFormChange}
                value={formData?.content}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                editProject(formData, userData?.access, currentProject?.id);
              }}
              className="w-fit bg-[#f97316] hover:opacity-70 border border-[#f97316] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300 flex gap-2 items-center"
            >
              {tinyLoader ? "Processing" : "Submit"}
              {tinyLoader && <ClipLoader color={"#fff"} size={20} />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminEditProject;
