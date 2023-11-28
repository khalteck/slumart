/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useAppContext } from "../contexts/AppContext";

const AdminProjectCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteProject, tinyLoader, deleteId } = useAdminContext();
  const { userData } = useAppContext();

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="w-full min-w-[300px] flex flex-col rounded-lg bg-neutral-200 shadow-md"
    >
      <div className="px-6 pt-4 flex flex-col h-full">
        <h5
          onClick={() => navigate(`/admin/project/${item?.id}`)}
          className="mb-2 text-[2rem] font-medium leading-tight text-neutral-800 cursor-pointer hover:underline"
        >
          {item?.title}
        </h5>
        <p className="mb-4 text-xl text-neutral-600">
          {item?.content?.split("")?.slice(0, 50)?.join("")}
          {"..."}
        </p>
        <div className="text-neutral-600 px-2 border border-black/20 mt-auto flex justify-between items-end">
          <div>
            <p>Created:</p>
            <p className="text-neutral-600">{item?.author?.name}</p>
            <p className="text-neutral-600 text-[.9rem]">{item?.created_at}</p>
          </div>

          <img
            alt=""
            src={item?.author?.profile_image}
            className="w-8 h-8 rounded-full my-1"
          />
        </div>
      </div>
      <div className="w-full mt-auto p-6 flex justify-between items-center">
        {tinyLoader && deleteId === item?.id ? (
          <p className="text-red-500">Deleting...</p>
        ) : (
          <div
            onClick={() => deleteProject(userData?.access, item?.id)}
            className="w-8 h-8 p-1 rounded-full bg-red-500/20 cursor-pointer"
          >
            <img
              alt=""
              src="/images/icons8-delete-48.png"
              className="w-7 h-auto"
            />
          </div>
        )}
        <p className="flex gap-1 items-center">
          3{" "}
          <img
            alt=""
            src="/images/icons8-comment-50.png"
            className="w-5 h-auto"
          />
        </p>
      </div>
    </div>
  );
};

export default AdminProjectCard;