/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ShopCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay="300"
      className="flex flex-col w-full md:w-[380px] gap-4 text-[1.5rem] md:text-[2rem] font-light scale2"
    >
      <img
        onClick={() => navigate(`/shop/${item?.id}`)}
        alt=""
        src={item?.image1}
        className="w-full h-[300px] bg-black/50 object-cover hover:scale-110 cursor-pointer transition-all duration-300"
      />
      <div className="flex flex-col gap-2 md:gap-3">
        <p>{item?.name} </p>
        {/* <p className="text-[1.3rem]">by - Omotolani Afeez</p> */}
        <p>${item?.price}</p>
        <button
          onClick={() => navigate(`/shop/${item?.id}`)}
          className="w-fit h-fit text-[1.25rem] bg-[#fecb04] hover:bg-white hover:text-[#fecb04] border border-[#fecb04] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
