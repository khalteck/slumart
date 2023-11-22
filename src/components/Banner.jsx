/* eslint-disable react/prop-types */
const Banner = ({ message }) => {
  return (
    <div className="w-[80%] md:w-[300px] text-center z-[999] fixed top-10 left-[50%] translate-x-[-50%] shadow-md p-3 rounded-md bg-green-300 text-black font-bold">
      {message}
    </div>
  );
};

export default Banner;
