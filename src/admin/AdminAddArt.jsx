import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAdminContext } from "../contexts/AdminContext";
import { ClipLoader } from "react-spinners";

const AdminAddArt = () => {
  const {
    submitProject,
    tinyLoader,
    setsendError,
    sendError,
    setSelectedImages,
    selectedImages,
  } = useAdminContext();

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    materials: "",
    condition: "",
    price: "",
    from_home: "",
    likes: "",
    images: [],
  });

  function handleFormChange(e) {
    setsendError("");
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
    const selectedFiles = [];

    for (let i = 0; i < files.length && i < 4; i++) {
      // Limiting to 4 files
      if (files[i].type.startsWith("image/")) {
        selectedFiles.push(files[i]);
      }
    }

    setSelectedImages(selectedFiles);
    setFormData((prev) => {
      return {
        ...prev,
        images: selectedFiles,
      };
    });
  };

  const removeImageAtIndex = (indexToRemove) => {
    const updatedImages = [
      ...selectedImages.slice(0, indexToRemove),
      ...selectedImages.slice(indexToRemove + 1),
    ];
    setSelectedImages(updatedImages);
  };

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
                placeholder=""
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

            <div className="flex flex-col gap-1">
              <label htmlFor="profile_image">Upload Images (Maximum - 4)</label>
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

            <div className="w-full flex gap-3 flex-wrap">
              {selectedImages?.map((file, index) => (
                <div
                  key={index}
                  className="relative w-fit h-fit border border-[#f97316] rounded-lg"
                >
                  <div
                    onClick={() => removeImageAtIndex(index)}
                    className="w-6 h-6 flex justify-center items-center p-1 rounded-full cursor-pointer bg-red-300 absolute top-[-8px] right-[-8px]"
                  >
                    <img
                      src="/images/icons8-close-48.png"
                      alt={`remove`}
                      className="w-4 h-4"
                    />
                  </div>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="w-[100px] h-[100px]"
                  />
                </div>
              ))}
            </div>

            {sendError && (
              <p className="w-full md:w-[80%] px-3 py-2 bg-red-500/30 border border-red-500">
                An error occurred!
              </p>
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                submitProject(formData);
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
