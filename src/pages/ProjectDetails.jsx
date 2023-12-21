/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import Comment from "../components/Comment";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const ProjectDetails = () => {
  const { id } = useParams();
  const {
    allProjectsHome,
    fetchProjectsHome,
    commentLoader,
    submitComment,
    userData,
    fetchComments,
    allComments,
    currentPage,
  } = useAppContext();

  useEffect(() => {
    fetchProjectsHome();
    fetchComments();
  }, []);

  const [currentProject, setcurrentProject] = useState({});

  useEffect(() => {
    const dataArray = allProjectsHome?.filter((x) => x?.id == id)[0];
    setcurrentProject(dataArray);
  }, [allProjectsHome, currentPage]);

  const [formData, setFormData] = useState({
    comment: "",
    blog: Number(currentProject?.id),
    user: userData?.user_data?.id,
  });

  useEffect(() => {
    setFormData({
      comment: "",
      blog: Number(currentProject?.id),
      user: userData?.user_data?.id,
    });
  }, [currentProject]);

  function handleCommentChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const [projectComments, setProjectComments] = useState([]);

  useEffect(() => {
    const array = allComments?.filter((itm) => {
      return itm?.blog == currentProject?.id;
    });

    setProjectComments(array);
  }, [allComments]);

  return (
    <>
      <Header />
      <main className="w-full md:pt-[80px] min-h-screen pb-10 bg-neutral-100/50">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0`}
          style={{ backgroundImage: `url(${currentProject?.image})` }}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3rem] text-center font-bold text-white leading-tight scale first-section-text uppercase`}
              >
                {currentProject?.title}
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full px-3 md:px-[10%] py-10">
          <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-10">
            <div className="w-fit mx-auto">
              BLOG DETAILS
              <div className="w-[70%] h-3 bg-[#F7C30D] mt-1"></div>
            </div>
          </h2>
          <div className="w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white border-2 border-[#F7C30D] text-neutral-700 lg:flex-row">
            <div className="w-full flex flex-col justify-start p-6">
              <h5 className="mb-2 text-[1.5rem] md:text-[2.5rem] font-medium">
                {capitalizeFirstLetter(currentProject?.title)}
              </h5>
              <p className="mb-4 text-[1.1rem]">{currentProject?.content}</p>
              <div className="w-fit text-neutral-600 mt-auto flex gap-5 items-center justify-between">
                <img
                  alt=""
                  src={currentProject?.author?.profile_image}
                  className="w-[80px] h-[80px] object-cover rounded-full my-1"
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
              </div>
            </div>
          </div>{" "}
          <div className="w-full border-2 border-[#F7C30D] rounded-lg p-4 mt-10 bg-neutral-200/50">
            <h2 className="text-[1.5rem] font-medium mb-5">
              Projects Comments
            </h2>

            {projectComments?.map((item, index) => {
              return (
                <Comment
                  key={index}
                  item={item}
                  submitComment={submitComment}
                  formData={formData}
                  projectComments={projectComments}
                />
              );
            })}

            <div className="w-full flex flex-col gap-3">
              <div className="w-full bg-white rounded-lg p-3 mt-4">
                <h2 className="text-[1.25rem] font-normal mb-4">Add Comment</h2>

                <form className="w-full">
                  <textarea
                    type="text"
                    id="comment"
                    className="w-full md:w-[80%] bg-white p-3 border border-black/60 rounded-sm outline-none"
                    placeholder="Type comment here.."
                    onChange={handleCommentChange}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      submitComment(formData);
                    }}
                    className="w-fit bg-[#F7C30D] hover:opacity-70 border border-[#F7C30D] px-5 md:px-8 py-2 mt-3 rounded-sm text-white font-medium transition-all duration-300 flex gap-2 items-center"
                  >
                    {commentLoader ? "Processing" : "Comment"}
                    {commentLoader && <ClipLoader color={"#fff"} size={20} />}
                  </button>{" "}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectDetails;
