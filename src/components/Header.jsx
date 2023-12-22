import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage, userData, logout, isAdmin } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 300;

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

  // function scrollToFooter() {
  //   const footerSection = document.getElementById("footer");
  //   if (footerSection) {
  //     footerSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // function scrollToTeam() {
  //   if (currentPage?.includes("about")) {
  //     const teamSection = document.getElementById("team");
  //     if (teamSection) {
  //       teamSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     navigate("/about#team");
  //   }
  // }

  return (
    <header
      className={`w-full h-[70px] font-poppins ${
        scrollBackground
          ? "bg-gray-100 text-black md:h-[90px]"
          : !scrollBackground && currentPage === "/"
          ? "bg-transparent text-black md:h-[90px]"
          : "bg-gray-100 text-black md:h-[90px]"
      } flex justify-between px-3 md:px-[3%] lg:px-[10%] items-center transition-all duration-700 fixed top-0 left-0 z-[100] font-mont md:pt-2`}
    >
      <Link to="/">
        <div className="">
          <div
            onClick={() => navigate("/")}
            className="gap-3 items-center flex cursor-pointer"
          >
            <img
              alt=""
              src="/images/new-logo3.png"
              className="w-[150px] md:w-[200px] h-auto"
            />
          </div>
        </div>
        {/* {scrollBackground ? (
          <>
            <div className="">
              <div
                onClick={() => navigate("/")}
                className="gap-3 items-center flex cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/new-logo2.png"
                  className="w-[150px] md:w-[200px] h-auto"
                />
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
              <img
                alt=""
                src="/images/new-logo.png"
                className="w-[150px] md:w-[250px] h-auto"
              />{" "}
            </div>
          </>
        )} */}
      </Link>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#F7C30D]"
              : !scrollBackground
              ? "bg-black"
              : "bg-[#F7C30D]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#F7C30D]"
              : !scrollBackground
              ? "bg-black"
              : "bg-[#F7C30D]"
          } rounded-lg`}
        ></div>{" "}
      </div>
      <div className="w-full hidden md:flex flex-col md:ml-[5%] lg:ml-[10%]">
        <ul className="sm:h-[80px] lg:h-[60px] gap-6 text-[1.1rem] items-center md:flex uppercase">
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/" ? "text-[#F7C30D] font-bold" : "text-black"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/about"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            About
          </li>
          {/* <li
            onClick={() => scrollToTeam()}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/team"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Team
          </li> */}
          <li
            onClick={() => navigate("/shop")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/shop"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Gallery
          </li>
          {/* <li
            onClick={() => navigate("/countries")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/countries"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Countries
          </li> */}

          <li
            onClick={() => navigate("/volunteers")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/volunteers"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Volunteer
          </li>

          <li
            // onClick={() => navigate("/volunteers")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/volunteer"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            DONATE
          </li>

          <li
            onClick={() => navigate("/projects")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/projects"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Blogs
          </li>

          {/* <li
            onClick={() => navigate("/shop")}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/shop"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Shop
          </li> */}
          {/* 
          <li
            onClick={() => scrollToFooter()}
            className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
              currentPage === "/contact"
                ? "text-[#F7C30D] font-bold"
                : "text-black"
            }`}
          >
            Contact
          </li> */}

          {isAdmin && (
            <li
              onClick={() => navigate("/admin")}
              className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ${
                currentPage === "/contact"
                  ? "text-[#F7C30D] font-bold"
                  : "text-black"
              }`}
            >
              Dashboard
            </li>
          )}

          {userData?.access ? (
            <li
              onClick={logout}
              className={`px-3 py-1 border-2 border-black bg-black text-white rounded-md ml-auto flex items-center gap-3 cursor-pointer`}
            >
              <img
                alt=""
                src={userData?.user_data?.profile_image}
                className="w-5 h-5 rounded-full"
              />
              <p>Logout</p>
            </li>
          ) : (
            <>
              <li
                onClick={() => navigate("/login")}
                className={`cursor-pointer transition-all duration-300 text-[.9rem] ml-auto ${
                  currentPage === "/login"
                    ? "text-[#F7C30D] font-bold"
                    : "text-black"
                }`}
              >
                <button className="px-3 py-1 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
                  Login
                </button>
              </li>
              <li
                onClick={() => navigate("/register")}
                className={`cursor-pointer hover:text-[#F7C30D] transition-all duration-300 text-[.9rem] ml-[-10px] ${
                  currentPage === "/login"
                    ? "text-[#F7C30D] font-bold"
                    : "text-black"
                }`}
              >
                <button className="px-3 py-1 border-2 border-black bg-black text-white rounded-md">
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full min-h-fit h-[100vh] z-[200] bg-black fixed top-0 left-0 lg:hidden overflow-y-auto">
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
          <ul className="slide float-right w-full min-h-[150px] bg-black py-10 text-white gap-3 px-7 text-[1.25rem] md:hidden flex flex-col">
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

            {/* <li
              onClick={() => {
                handleClick();
                scrollToTeam();
              }}
              className="py-2 uppercase"
            >
              Team
            </li> */}

            <li
              onClick={() => {
                handleClick();
                navigate("/shop");
              }}
              className="py-2 uppercase"
            >
              Gallery
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/volunteers");
              }}
              className="py-2 uppercase"
            >
              Volunteer
            </li>

            <li
              onClick={() => {
                handleClick();
                // navigate("/countries");
              }}
              className="py-2 uppercase"
            >
              Donate
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/projects");
              }}
              className="py-2 uppercase"
            >
              Blogs
            </li>

            {/* <li
              onClick={() => {
                handleClick();
                scrollToFooter();
              }}
              className="py-2 uppercase"
            >
              Contact
            </li> */}

            <li className="py-2 uppercase border-t">
              <div
                onClick={() => {
                  handleClick();
                  navigate("/login");
                }}
                className="flex gap-3 items-center font-light text-[1rem] cursor-pointer"
              >
                <p>Login</p>
              </div>

              <div
                onClick={() => {
                  handleClick();
                  navigate("/register");
                }}
                className="flex gap-3 items-center font-light text-[1rem] cursor-pointer mt-3"
              >
                <p>Register</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
