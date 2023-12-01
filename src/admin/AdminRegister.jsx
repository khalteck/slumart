/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { useAdminContext } from "../contexts/AdminContext";
// import { useNavigate } from "react-router-dom";
import countriesArray from "../data/countries.json";
import { useAppContext } from "../contexts/AppContext";

const AdminRegister = () => {
  const {
    loadingReg,
    registerAdmin,
    formData,
    setIsFormDataValid,
    isValidEmail,
    passwordError,
    handleChange,
    isFormDataValid,
    handleImageChange,
    regError,
  } = useAdminContext();

  const { regSuccess } = useAppContext();

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = Object.values(formData).every((value) => Boolean(value));
    setIsFormDataValid(isValid);

    if (isValid && isValidEmail && !passwordError) {
      await registerAdmin(formData);
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <AdminSidebar />
      <AdminHeader />
      <div className="w-full md:pl-[300px] md:pr-8 px-3 pt-5 pb-[100px]">
        <div className="flex flex-col gap-8">
          <div className="w-full bg-slate-100 border-2 text-black/70 border-[#f97316] rounded-md p-3 md:p-6 shadow-md">
            <div className="w-full flex justify-between gap-10 flex-wrap mb-4">
              <h2 className="text-[1.5rem] font-medium mb-5">
                Register new admin
              </h2>
            </div>

            <p className="">
              Please note the credentials used to create the new admin account.
              After successful creation, logout then sign in to the newly
              created account!
            </p>

            <form className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  onChange={handleChange}
                  value={formData?.first_name}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                  required
                />
                {!isFormDataValid && !formData?.first_name && (
                  <p className="text-red-500 text-sm mt-2">
                    First name is required
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  onChange={handleChange}
                  value={formData?.last_name}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                  required
                />
                {!isFormDataValid && !formData?.last_name && (
                  <p className="text-red-500 text-sm mt-2">
                    Last name is required
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={formData?.email}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none ${
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

              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  onChange={handleChange}
                  value={formData?.username}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                  required
                />
                {!isFormDataValid && !formData?.username && (
                  <p className="text-red-500 text-sm mt-2">
                    Username is required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="about_you">About you</label>
                <textarea
                  type="text"
                  id="about_you"
                  onChange={handleChange}
                  value={formData?.about_you}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                  required
                />
                {!isFormDataValid && !formData?.about_you && (
                  <p className="text-red-500 text-sm mt-2">
                    About you is required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="profile_image">Profile Image</label>
                <input
                  type="file"
                  id="profile_image"
                  onChange={handleImageChange}
                  // value={formData?.profile_image}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
                  required
                />

                {!isFormDataValid && !formData?.profile_image && (
                  <p className="text-red-500 text-sm mt-2">
                    Profile Image is required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  onChange={handleChange}
                  value={formData?.country}
                  className={`w-full md:w-[70%] px-3 py-4 border border-black/30 mt-2 outline-none`}
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
                  <p className="text-red-500 text-sm mt-2">
                    Country is required
                  </p>
                )}
              </div>

              <div className="relative flex flex-col w-full md:w-[70%]">
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
                  className="w-fit absolute top-[50%] right-3 font-medium px-2 py-1 bg-[#f97316]/20 rounded-lg cursor-pointer text-[.75rem]"
                >
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">
                  Password must include at least one special symbol, one number
                </p>
              )}

              {regError && (
                <div className="w-full border border-red-500 p-3">
                  {regError?.map((err, ind) => {
                    return (
                      <p key={ind} className="text-red-500 text-sm">
                        {err}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* <p>Have an account?</p>
              <p
                onClick={() => navigate("/login")}
                className="font-bold border-2 border-neutral-700 p-2 w-fit cursor-pointer"
              >
                Login
              </p> */}

              {/* {regError && <p className="text-red-500">{regError}</p>} */}
              {/* {!isFormDataValid && (
              <p className="text-red-500 text-sm mt-2">
                All fields are required
              </p>
            )} */}

              {regSuccess && (
                <p className="w-full md:w-[70%] px-3 py-2 border border-green-500 bg-green-500/20">
                  {regSuccess}
                </p>
              )}

              <div className="w-full flex mt-7">
                <button
                  disabled={loadingReg}
                  onClick={(e) => handleSubmit(e)}
                  className={`w-[200px] min-w-fit bg-[#f97316] hover:bg-[#f97316]/80 px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300 ${
                    !isFormDataValid || (!isValidEmail && "cursor-not-allowed")
                  }`}
                >
                  {loadingReg ? "Processing..." : "Register"}
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
