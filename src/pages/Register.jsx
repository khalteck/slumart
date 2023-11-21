/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import countriesArray from "../data/countries.json";

const Register = () => {
  const { setSendError, sendError, loading, register } = useAppContext();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    country: "",
    password: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormDataValid, setIsFormDataValid] = useState(true);

  function handleChange(e) {
    setSendError("");
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setIsValidEmail(isValidEmail);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = Object.values(formData).every((value) => Boolean(value));
    setIsFormDataValid(isValid);

    if (isValid && isValidEmail) {
      await register(formData);
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full flex md:flex-row flex-col font-mont md:h-screen">
      <div className="w-full h-[250px] md:h-screen bg-reg bg-no-repeat bg-cover bg-center relative">
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
      <div className="w-full h-full md:min-h-screen overflow-auto bg-white p-5 md:p-14 flex items-center">
        <div className="w-full">
          <h2 className="text-[1.75rem] md:text-[2em] font-bold">
            Register an account
          </h2>

          <form className="mt-8 flex flex-col gap-3">
            <div>
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                onChange={handleChange}
                value={formData?.first_name}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              {!isFormDataValid && !formData?.first_name && (
                <p className="text-red-500 text-sm mt-2">
                  First name is required
                </p>
              )}
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                onChange={handleChange}
                value={formData?.last_name}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              {!isFormDataValid && !formData?.last_name && (
                <p className="text-red-500 text-sm mt-2">
                  Last name is required
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData?.email}
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
              {!isFormDataValid && !formData?.email && (
                <p className="text-red-500 text-sm mt-2">Email is required</p>
              )}
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                value={formData?.username}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              {!isFormDataValid && !formData?.username && (
                <p className="text-red-500 text-sm mt-2">
                  Username is required
                </p>
              )}
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                onChange={handleChange}
                value={formData?.country}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              >
                <option value="" hidden>
                  Select a country
                </option>
                {countriesArray?.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {!isFormDataValid && !formData?.country && (
                <p className="text-red-500 text-sm mt-2">Country is required</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
                value={formData?.password}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              {!isFormDataValid && !formData?.password && (
                <p className="text-red-500 text-sm mt-2">
                  Password is required
                </p>
              )}

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

            {sendError && <p className="text-red-500">{sendError}</p>}
            {/* {!isFormDataValid && (
              <p className="text-red-500 text-sm mt-2">
                All fields are required
              </p>
            )} */}

            <div className="w-full flex justify-center mt-7 md:mt-14">
              <button
                disabled={loading}
                onClick={(e) => handleSubmit(e)}
                className={`w-[200px] min-w-fit bg-[#f97316] hover:bg-[#f97316]/80 px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300 ${
                  !isFormDataValid || (!isValidEmail && "cursor-not-allowed")
                }`}
              >
                {loading ? "Processing" : "Register"}
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
