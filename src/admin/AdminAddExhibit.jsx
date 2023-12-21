import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
// import { useAppContext } from "../contexts/AppContext";
import { useAdminContext } from "../contexts/AdminContext";
import { ClipLoader } from "react-spinners";

const AdminAddExhibit = () => {
  const { submitExhibit, tinyLoader } = useAdminContext();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
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

  const handleFileInputChange = (e) => {
    const files = e.target.files;

    // setSelectedImagesBlog(files[0]);
    setFormData((prev) => {
      return {
        ...prev,
        image: files[0],
      };
    });
  };

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[2rem]">Create Exhibition</h1>

          <form className="w-full border-2 border-[#f97316] rounded-lg p-4 bg-neutral-200/50 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Example exhibition"
                onChange={handleFormChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="profile_image">Upload Image</label>
              <input
                type="file"
                id="Images"
                className={`w-full md:w-[80%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
                multiple
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                submitExhibit(formData);
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

export default AdminAddExhibit;
