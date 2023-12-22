import hero from "../data/hero.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectFlip } from "swiper";
import "../swiper-pagination.css";
import "swiper/css/effect-flip";

export default function Carousel() {
  return (
    <Swiper
      effect={"flip"}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFlip]}
    >
      {hero?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img alt="hero" src={item} className="w-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
