/* eslint-disable react/prop-types */
const TeamCard = ({ item }) => {
  return (
    <div className="w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 sm:flex-row text-neutral-700">
      <img
        className="h-[400px] w-full sm:w-1/2 rounded-t-lg object-cover object-top md:!rounded-none md:!rounded-l-lg"
        src={item?.image}
        alt=""
      />
      <div className="w-full flex flex-col justify-start p-6 gap-2">
        <h5 className="mb-2 text-[1.75rem] font-bold">{item?.name}</h5>
        <p className="text-[#f97316]">{item?.role}</p>
        <p className="mb-4 text-base">{item?.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
