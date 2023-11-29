/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { ClipLoader } from "react-spinners";

/* eslint-disable react/prop-types */
const Comment = ({ item }) => {
  const { fetchReplies, allReplies, userData, replyLoader, submitReplies } =
    useAppContext();

  useEffect(() => {
    fetchReplies();
  }, []);

  const [commentReplies, setcommentReplies] = useState([]);

  useEffect(() => {
    const dataArray = allReplies?.filter((x) => x?.comment == item?.id);
    setcommentReplies(dataArray);
  }, [allReplies]);

  const [replyData, setreplyData] = useState({
    text: "",
    comment: Number(item?.id),
    user: userData?.user_data?.id,
  });

  useEffect(() => {
    setreplyData({
      text: "",
      comment: Number(item?.id),
      user: userData?.user_data?.id,
    });
  }, [commentReplies]);

  function handleReplyChange(e) {
    const { id, value } = e.target;
    setreplyData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

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

        <div className="w-full bg-white rounded-lg p-3 mt-4">
          <h2 className="text-[1.25rem] font-normal mb-4">Add Reply</h2>

          <form className="w-full">
            <textarea
              type="text"
              id="text"
              className="w-full md:w-[300px] h-[60px] bg-white p-3 border border-black/60 rounded-sm outline-none"
              placeholder="Type reply here.."
              onChange={handleReplyChange}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                submitReplies(replyData);
              }}
              className="w-fit bg-[#f97316] hover:opacity-70 border border-[#f97316] px-5 md:px-8 py-2 mt-3 rounded-sm text-white font-medium transition-all duration-300 flex gap-2 items-center"
            >
              {replyLoader ? "Processing" : "Reply"}
              {replyLoader && <ClipLoader color={"#fff"} size={20} />}
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
