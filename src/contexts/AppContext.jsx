/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  // admin mobil header
  const [openSideBar, setopenSideBar] = useState(false);
  function toggleSidebar() {
    setopenSideBar((prev) => !prev);
  }

  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    country: "",
    password: "",
    about_you: "",
    profile_image: "",
  });

  const [image, setImage] = useState(null);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormDataValid, setIsFormDataValid] = useState(true);
  const [passwordError, setpasswordError] = useState(false);

  function handleChange(e) {
    setSendError("");
    setregError(null);
    const { value, id } = e.target;
    let isValidEmail = true;

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

    if (id === "password") {
      if (passwordRegex.test(value)) {
        setpasswordError(false);
        setFormData({
          ...formData,
          password: value,
        });
      } else {
        setpasswordError(true);
      }
    }

    if (id === "email") {
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setregError(null);
    setFormData({
      ...formData,
      profile_image: file,
    });
  };

  const [regError, setregError] = useState(null);
  const [regSuccess, setregSuccess] = useState("");

  async function register(data) {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("profile_image", image);

      // Append other data fields to FormData if needed
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/register/",
        // "https://slumart-production.up.railway.app/slum/reg/admin/",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(response);
      if (response?.status >= 200 && response?.status < 300) {
        navigate("/login");
        setregSuccess("Registration Success!");
        setTimeout(() => {
          setregSuccess("");
        }, 3000);
      }
    } catch (error) {
      console.log("error =>", error);
      const errors = Object.values(error?.response?.data);
      const arrangedErrors = errors?.map((x) => x[0]);
      setregError(arrangedErrors);
    } finally {
      setLoading(false);
    }
  }

  const [loginError, setloginError] = useState(null);
  const [loginSuccess, setloginSuccess] = useState("");

  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    userData?.user_data?.is_admin === true
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, [userData]);

  async function login(data) {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/api/signin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response", response);
      if (response?.status >= 200 && response?.status < 300) {
        localStorage.setItem("userData", JSON.stringify(response?.data));
        setuserData(response?.data);
        if (response?.data?.user_data?.is_admin === true) {
          navigate("/admin");
        } else {
          navigate("/");
        }
        setloginSuccess("Login Success!");
        setregSuccess("Logged In!");
        setTimeout(() => {
          setloginSuccess("");
          setregSuccess("");
        }, 3000);
      }
    } catch (error) {
      console.log("error =>", error);
      const errors = Object.values(error?.response?.data);
      // const arrangedErrors = errors?.map((x) => x[0]);
      setloginError(errors);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("userData");
    setIsAdmin(false);
    setuserData(null);
    navigate("/");
    setregSuccess("Logged Out!");
    setTimeout(() => {
      setregSuccess("");
    }, 3000);
  }

  //=================================================to fetch projects
  const [allProjectsHome, setAllProjectsHome] = useState([]);

  async function fetchProjectsHome() {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/create/blog/",
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("response", response);
      setAllProjectsHome(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  //====================================to submit comment

  const [inlineLoader, setInlineLoader] = useState(false);
  const [commentLoader, setCommentLoader] = useState(false);

  async function submitComment(data) {
    try {
      if (!userData?.access) {
        navigate("/login");
        return;
      }

      setCommentLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/comment/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log("error submitting comment =>", error);
    } finally {
      setCommentLoader(false);
      fetchProjectsHome();
      fetchComments();
    }
  }

  const [allComments, setAllComments] = useState([]);

  async function fetchComments() {
    try {
      setInlineLoader(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/comment/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAllComments(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  const [allReplies, setAllReplies] = useState([]);

  async function fetchReplies() {
    try {
      setInlineLoader(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/reply/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAllReplies(response.data);
    } catch (error) {
      console.error("Error fetching replies:", error);
    } finally {
      setInlineLoader(false);
    }
  }

  const [replyLoader, setReplyLoader] = useState(false);
  async function submitReplies(data) {
    try {
      if (!userData?.access) {
        navigate("/login");
        return;
      }

      setReplyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/reply/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response", response);
    } catch (error) {
      console.log("error submitting comment =>", error);
    } finally {
      setReplyLoader(false);
      fetchReplies();
    }
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loading,
        sendError,
        setSendError,
        register,
        handleImageChange,
        isValidEmail,
        isFormDataValid,
        handleChange,
        formData,
        setIsFormDataValid,
        passwordError,
        regError,
        regSuccess,
        setregSuccess,
        setloginError,
        loginError,
        loginSuccess,
        login,
        userData,
        isAdmin,
        toggleSidebar,
        openSideBar,
        logout,
        fetchProjectsHome,
        allProjectsHome,
        inlineLoader,
        submitComment,
        fetchComments,
        allComments,
        fetchReplies,
        allReplies,
        submitReplies,
        replyLoader,
        commentLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
