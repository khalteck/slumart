import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAppContext } from "../contexts/AppContext";
import { useAdminContext } from "../contexts/AdminContext";
import { ClipLoader } from "react-spinners";

const AdminAddArt = () => {
  const { userData } = useAppContext();
  const { subitProject, tinyLoader } = useAdminContext();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: userData?.user_data?.id,
  });

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
          <h1 className="text-[2rem]">Create Art</h1>

          <form className="w-full border-2 border-[#f97316] rounded-lg p-4 bg-neutral-200/50 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Art piece name"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                id="size"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="E.g Medium"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="materials">Materials</label>
              <input
                type="text"
                id="materials"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="E.g Canvas, Oil Paint"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="condition">Condition</label>
              <input
                type="text"
                id="condition"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Excellent"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Excellent"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="from_home">From home</label>
              <select
                id="from_home"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                onChange={handleFormChange}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" hidden>
                  Select
                </option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="likes">Likes</label>
              <input
                type="number"
                id="likes"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder=""
                onChange={handleFormChange}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                subitProject(formData);
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

export default AdminAddArt;
