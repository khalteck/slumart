/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";

/* eslint-disable react/prop-types */
const PastProjectCard = ({ item }) => {
  const { currentPage } = useAppContext();
  const imageArr = item?.images;
  //======================================================to handle image display
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imageArr[index]);

  useEffect(() => {
    setImage(imageArr[index]);
  }, [index, currentPage]);

  function next() {
    const lastIndex = imageArr?.length - 1;
    if (image === imageArr[lastIndex]) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function prev() {
    const lastIndex = imageArr?.length - 1;
    if (image === imageArr[0]) {
      setIndex(lastIndex);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="w-full flex md:flex-row flex-col gap-10 mt-8 border-b border-black/30 pb-10">
      <div>
        <h2 className="font-light text-[1.5rem] md:text-[2rem] mb-5">
          {item?.title}
        </h2>
        <div className="">
          <div className="w-auto max-w-[500px] md:max-w-full flex justify-center border-2 border-black relative">
            <img
              src={image}
              alt="product image"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
            <div className="w-full absolute top-[50%] translate-y-[-50%] flex justify-between">
              <div
                onClick={prev}
                className="w-10 h-10 flex justify-center items-center cursor-pointer border-2 border-black bg-white"
              >
                {"<"}
              </div>
              <div
                onClick={next}
                className="w-10 h-10 flex justify-center items-center cursor-pointer border-2 border-black bg-white"
              >
                {">"}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-5 gap-4">
            {imageArr?.map((img, ind) => {
              return (
                <img
                  key={ind}
                  src={img}
                  alt="product image"
                  className={`w-[100px] h-[100px] object-contain cursor-pointer border-black ${
                    ind === index ? "border-2 bg-black/20" : "border"
                  }`}
                  onClick={() => setIndex(ind)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="font-light text-[1.5rem] md:text-[2rem] mb-5">
          Description
        </h3>
        <p className="text-[1.1rem]">{item?.body}</p>
      </div>
    </div>
  );
};

export default PastProjectCard;
