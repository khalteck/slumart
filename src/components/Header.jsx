import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 500;

      setScrollBackground(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <header
      className={`w-full h-[60px] ${
        scrollBackground
          ? "bg-gray-100 text-black shadow-md md:h-[80px]"
          : "bg-transparent md:bg-white text-black md:h-[130px] lg:h-[160px]"
      } flex justify-between px-3 lg:px-[10%] items-center transition-all duration-700 fixed top-0 left-0 z-[100] font-mont`}
    >
      <Link to="/">
        {scrollBackground ? (
          <>
            <div className="">
              <div
                onClick={() => navigate("/")}
                className="gap-3 items-center flex cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/logo.png"
                  className="md:w-12 md:h-12 w-8 h-8"
                />
                <h1 className="text-black text-[2rem] md:text-[3rem] font-bold">
                  SlumArt
                </h1>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div
              onClick={() => navigate("/")}
              className="gap-3 items-center md:hidden flex cursor-pointer"
            >
              <img alt="" src="/images/logo.png" className="w-10 h-10" />
              <h1 className="text-white text-[2rem] md:text-[3rem] font-bold">
                SlumArt
              </h1>
            </div>
          </>
        )}
      </Link>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#f97316]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#f97316]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#f97316]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#f97316]"
          } rounded-lg`}
        ></div>{" "}
      </div>
      <div className="w-full hidden md:flex flex-col items-center justify-center">
        {!scrollBackground && (
          <div className="w-full h-[80px] flex gap-12 items-center justify-center sm:text-[.8rem] lg:text-[.9rem]">
            <div
              onClick={() => navigate("/")}
              className="flex gap-3 items-center cursor-pointer"
            >
              <img alt="" src="/images/logo.png" className="w-14 h-14" />
              <h1 className="text-black text-[2rem] md:text-[4rem] font-bold">
                SlumArt
              </h1>
            </div>
            {/* <div
              onClick={() => navigate("/login")}
              className=" flex gap-3 items-center text-[#f97316] text-[1.25rem] font-medium cursor-pointer"
            >
              <img
                alt=""
                src="/images/icons8-user-50.png"
                className="w-10 h-10"
              />
              <p>Login</p>
            </div> */}
          </div>
        )}

        <ul className="sm:h-[80px] lg:h-[60px] gap-6 text-[1.1rem] items-center justify-center md:flex uppercase">
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/" ? "text-[#f97316] font-bold" : "text-black"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/about"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            About
          </li>
          <li
            onClick={() => navigate("/gallery")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/gallery"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            Gallery
          </li>
          <li
            onClick={() => navigate("/blog")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/blog"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            Blog
          </li>

          <li
            onClick={() => navigate("/shop")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/shop"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            Shop
          </li>

          <li
            // onClick={() => navigate("/contact")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/contact"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            Contact
          </li>

          <li
            // onClick={() => navigate("/contact")}
            className={`cursor-pointer hover:text-[#f97316] transition-all duration-300 text-[.9rem] ${
              currentPage === "/contact"
                ? "text-[#f97316] font-bold"
                : "text-black"
            }`}
          >
            Join Us
          </li>

          {/* {scrollBackground && (
            <li className="gap-4 items-center ml-auto flex">
              <div className="ml-auto flex gap-3 items-center text-[#f97316] text-[1.25rem] font-medium">
                <img
                  alt=""
                  src="/images/icons8-user-50.png"
                  className="w-10 h-10"
                />
                <p>Login</p>
              </div>
            </li>
          )} */}
        </ul>
      </div>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full min-h-fit h-[100vh] z-[200] bg-neutral-800 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer mr-[25px] absolute top-4 right-0"
          >
            <img
              className="w-5 h-5  text-white"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide float-right w-full min-h-[150px] bg-neutral-800 py-10 text-white gap-3 px-7 text-[1.25rem] md:hidden flex flex-col">
            <li className="py-2 uppercase border-b">
              <div
                onClick={() => {
                  handleClick();
                  navigate("/login");
                }}
                className="flex gap-3 items-center text-[#f97316] text-[1.25rem] font-medium cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/icons8-user-50.png"
                  className="w-10 h-10"
                />
                <p>Login</p>
              </div>
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("/");
              }}
              className="py-2 uppercase"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/about");
              }}
              className="py-2 uppercase"
            >
              About
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/gallery");
              }}
              className="py-2 uppercase"
            >
              Gallery
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/blog");
              }}
              className="py-2 uppercase"
            >
              Blog
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/shop");
              }}
              className="py-2 uppercase"
            >
              Shop
            </li>

            <li
              onClick={() => {
                handleClick();
                // navigate("/contact");
              }}
              className="py-2 uppercase"
            >
              Contact
            </li>

            <li
              onClick={() => {
                handleClick();
                // navigate("/contact");
              }}
              className="py-2 uppercase"
            >
              Join us
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
