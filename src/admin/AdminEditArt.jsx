/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAdminContext } from "../contexts/AdminContext";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const AdminEditArt = () => {
  const {
    fetchArts,
    allArtpieces,
    editArt,
    tinyLoader,
    setsendError,
    sendError,
  } = useAdminContext();

  const { userData, currentPage } = useAppContext();

  useEffect(() => {
    fetchArts();
  }, []);

  useEffect(() => {
    setsendError("");
  }, [currentPage]);

  const { id } = useParams();

  const currentArt = allArtpieces?.filter((x) => x?.id == id)[0];

  const [formData, setFormData] = useState({
    name: currentArt?.name || "",
    size: currentArt?.size || "",
    materials: currentArt?.materials || "",
    condition: currentArt?.condition || "",
    price: currentArt?.price || "",
    from_home: currentArt?.from_home || "",
    likes: Number(currentArt?.likes) || 0,
    // images: [],
  });

  console.log("formData", formData);

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

  const [selectedImages, setSelectedImages] = useState([]);

  // const [oldImages, setoldImages] = useState(currentArt?.images || []);

  // console.log("currentArt", currentArt);

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    const selectedFiles = [];

    for (let i = 0; i < files.length && i < 4; i++) {
      // Limiting to 4 files
      if (files[i].type.startsWith("image/")) {
        selectedFiles.push(files[i]);
      }
    }

    const formDataObject = {};
    selectedFiles.forEach((file, index) => {
      formDataObject[`image${index + 1}`] = file;
    });

    setSelectedImages(selectedFiles);
    setFormData((prev) => {
      return {
        ...prev,
        ...formDataObject,
      };
    });
  };

  const removeImageAtIndex = (indexToRemove) => {
    setsendError("");
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
          <h1 className="text-[2rem]">Edit Art - {currentArt?.name}</h1>

          <form className="w-full border-2 border-[#f97316] rounded-lg p-4 bg-neutral-200/50 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                placeholder="Art piece name"
                onChange={handleFormChange}
                value={formData?.name}
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
                value={formData?.size}
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
                value={formData?.materials}
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
                value={formData?.condition}
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
                value={formData?.price}
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
                value={formData?.likes}
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
                    src={
                      typeof file === "string"
                        ? file
                        : URL.createObjectURL(file)
                    }
                    alt={`preview-${index}`}
                    className="w-[100px] h-[100px]"
                  />
                </div>
              ))}
            </div>

            {/* <h3>Previously uploaded image(s)</h3>
            <div className="w-full flex gap-3 flex-wrap">
              {currentArt?.images?.map((file, index) => (
                <div
                  key={index}
                  className="relative w-fit h-fit border border-[#f97316] rounded-lg"
                >
                  {/* <div
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
                    src={
                      typeof file === "string"
                        ? file
                        : URL.createObjectURL(file)
                    }
                    alt={`preview-${index}`}
                    className="w-[100px] h-[100px]"
                  />
                </div>
              ))}
            </div> */}

            {sendError && (
              <p className="w-full md:w-[80%] px-3 py-2 bg-red-500/30 border border-red-500">
                An error occurred!
              </p>
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                editArt(formData, userData?.access, currentArt?.id);
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

export default AdminEditArt;
