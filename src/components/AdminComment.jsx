/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/prop-types */
const AdminComment = ({ item }) => {
  const { fetchReplies, allReplies } = useAppContext();

  useEffect(() => {
    fetchReplies();
  }, []);

  const [commentReplies, setcommentReplies] = useState([]);

  useEffect(() => {
    const dataArray = allReplies?.filter((x) => x?.comment == item?.id);
    setcommentReplies(dataArray);
  }, [allReplies]);

  return (
    <div className="w-full bg-white rounded-lg p-3 mt-3">
      <p className="text-[.85rem] text-black/50 mb-2">By: User</p>
      <p>{item?.comment}</p>
      <div className="w-full pl-12 md:pl-[100px]">
        <div className="w-full border-l-2 border-gray-300 flex flex-col gap-2 mt-3 pl-3">
          <p className="text-[.85rem] text-black/50">Replies:</p>
          {commentReplies?.map((reply, ind) => {
            return (
              <p key={ind} className="border-b border-black/20 pt-2">
                {reply?.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminComment;
