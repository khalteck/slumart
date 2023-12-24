/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper";
import "../swiper-pagination.css";
import "swiper/css/effect-fade";

/* eslint-disable react/prop-types */
const PastProjectCard = ({ item }) => {
  // const { currentPage } = useAppContext();
  const imageArr = item?.images;

  console.log("imageArr", imageArr);
  // //======================================================to handle image display

  return (
    <div className="w-full flex md:flex-row flex-col gap-10 mt-8 border-b border-black/30 pb-10">
      <div>
        <h2 className="font-light text-[1.5rem] md:text-[2rem] mb-5">
          {item?.title}
        </h2>
        <div className="">
          <div className="w-full md:w-[500px] lg:w-[600px] flex justify-center relative">
            <Swiper
              effect={"fade"}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
            >
              {imageArr?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      alt="project image"
                      className="w-full h-[300px] md:h-[500px] object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
