/* eslint-disable react/prop-types */
const ShopCard = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay="300"
      className="flex flex-col w-full md:w-[400px] gap-4 text-[1.5rem] md:text-[2rem] font-light"
    >
      <img
        alt=""
        src={item?.images[0]}
        className="w-full h-auto min-h-[300px] bg-black/50 hover:scale-110 cursor-pointer transition-all duration-300"
      />
      <div className="flex flex-col gap-2 md:gap-3">
        <p>{item?.name} </p>
        <p className="text-[1.3rem]">by- Omotolani Afeez</p>
        <p>N{item?.price}</p>
        <button
          // onClick={() => navigate("/gallery")}
          className="w-fit h-fit text-[1.25rem] bg-[#F7C30D] hover:bg-white hover:text-[#F7C30D] border border-[#F7C30D] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
