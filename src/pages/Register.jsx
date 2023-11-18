/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //   const {
  //     setSendError,
  //     setFormData,
  //     setIsValidEmail,
  //     formData,
  //     isValidEmail,
  //     sendError,
  //     loading,
  //     login,
  //   } = useAppContext();

  //   function handleChange(e) {
  //     setSendError("");
  //     const { value, id } = e.target;
  //     let isValidEmail = true;

  //     if (id === "email") {
  //       // Define a regex pattern for email validation
  //       const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //       isValidEmail = emailPattern.test(value);
  //     }

  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         [id]: value,
  //       };
  //     });
  //     setIsValidEmail(isValidEmail);
  //   }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     await login();
  //   }

  const isFormDataValid = Object.values({}).every((value) => Boolean(value));

  const [showPassword, setShowPassword] = useState(false);
  const isValidEmail = true;

  const navigate = useNavigate();

  return (
    <div className="w-full flex md:flex-row flex-col font-mont">
      <div className="w-full h-[250px] md:h-screen bg-caro3 bg-no-repeat bg-cover bg-center relative">
        <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-black/50 flex flex-col">
          {/* <img
            alt=""
            src="/images/logo.png"
            className="w-[130px] h-auto md:w-[200px] md:h-[180px] rounded-sm md:rounded-b-lg"
          /> */}
          <div
            onClick={() => navigate("/")}
            className="gap-3 items-center flex cursor-pointer"
          >
            <img alt="" src="/images/logo.png" className="w-12 h-12" />
            <h1 className="text-white text-[2rem] md:text-[3rem] font-bold">
              SlumArt
            </h1>
          </div>
          <p className="text-[1.25rem] md:text-[2.5rem] mb-auto md:mb-0 mt-auto text-white font-medium first-section-text">
            Transform your surroundings with the allure of fine art through our
            art rental services.
          </p>
        </div>
      </div>
      <div className="w-full h-full md:min-h-screen bg-white p-5 md:p-14 flex items-center">
        <div className="w-full">
          <h2 className="text-[1.75rem] md:text-[2em] font-bold">
            Register an account
          </h2>

          <form className="mt-8 flex flex-col gap-3">
            <div>
              <label htmlFor="first_name">First name</label>
              <input
                type="first_name"
                id="first_name"
                // onChange={handleChange}
                // value={formData?.email}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
            </div>
            <div>
              <label htmlFor="first_name">Last name</label>
              <input
                type="first_name"
                id="first_name"
                // onChange={handleChange}
                // value={formData?.email}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                // onChange={handleChange}
                // value={formData?.email}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none ${
                  isValidEmail ? "border-black/30" : "border-red-500"
                }`}
                required
              />
              {!isValidEmail && (
                <p className="text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                // onChange={handleChange}
                // value={formData?.password}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              <p
                onClick={() => setShowPassword((prev) => !prev)}
                className="w-fit absolute top-[53%] right-3 font-medium px-2 py-1 bg-[#f97316]/20 rounded-lg cursor-pointer text-[.75rem]"
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
            <p>Have an account?</p>
            <p
              onClick={() => navigate("/login")}
              className="font-bold border-2 border-neutral-700 p-2 w-fit cursor-pointer"
            >
              Login
            </p>

            {/* {sendError && <p className="text-red-500">{sendError}</p>} */}

            <div className="w-full flex justify-center mt-7 md:mt-14">
              <button
                // disabled={!isFormDataValid || !isValidEmail}
                // onClick={(e) => handleSubmit(e)}
                className={`w-[200px] min-w-fit bg-[#f97316] hover:bg-[#f97316]/80 px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300 ${
                  !isFormDataValid || (!isValidEmail && "cursor-not-allowed")
                }`}
              >
                {/* {loading ? "Processing" : "Login"} */}
                Login
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
