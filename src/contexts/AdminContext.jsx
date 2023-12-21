/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [tinyLoader, setTinyLoader] = useState(false);
  const [sendError, setsendError] = useState("");

  async function subitProject(data) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/create/blog/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        navigate("/admin");
      }
    } catch (error) {
      console.log("error =>", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
    }
  }

  const [allProjects, setAllProjects] = useState([]);

  async function fetchProjects(token) {
    try {
      setTinyLoader(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/create/blog/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAllProjects(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTinyLoader(false);
    }
  }

  const [deleteId, setdeleteId] = useState(null);

  async function deleteProject(token, projectId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this project?"
      );

      if (!confirmed) {
        return;
      }

      setTinyLoader(true);
      setdeleteId(projectId);

      const response = await axios.delete(
        `https://slumart-production.up.railway.app/slum/create/blog/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setTinyLoader(false);
      setdeleteId(null);
      fetchProjects(token);
    }
  }

  async function editProject(data, token, projectId) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.put(
        `https://slumart-production.up.railway.app/slum/create/blog/${projectId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
      fetchProjects(token);
    }
  }

  //========================================================to handle exhibitions =========

  async function submitExhibit(data) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/create/exhibit/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        navigate("/admin/exhibition");
      }
    } catch (error) {
      console.log("error =>", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
    }
  }

  const [allExhibitions, setAllExhibitions] = useState([]);

  async function fetchExhibition() {
    try {
      setTinyLoader(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/create/exhibit/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAllExhibitions(response.data);
    } catch (error) {
      console.error("Error fetching exhibit:", error);
    } finally {
      setTinyLoader(false);
    }
  }

  const [deleteIdEx, setdeleteIdEx] = useState(null);

  async function deleteExhibition(token, exhibitId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this exhibition?"
      );

      if (!confirmed) {
        return;
      }

      setTinyLoader(true);
      setdeleteId(exhibitId);

      const response = await axios.delete(
        `https://slumart-production.up.railway.app/slum/create/exhibit/${exhibitId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin/exhibition");
      }
    } catch (error) {
      console.error("Error deleting exhibit:", error);
    } finally {
      setTinyLoader(false);
      setdeleteIdEx(null);
      fetchExhibition(token);
    }
  }

  async function editExhibition(data, token, exhibitId) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.put(
        `https://slumart-production.up.railway.app/slum/create/exhibit/${exhibitId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin/exhibition");
      }
    } catch (error) {
      console.error("Error updating exhibiton:", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
      fetchExhibition(token);
    }
  }

  //==========================================================to handle art pieces ====================
  const [allArtpieces, setAllArtpieces] = useState([]);

  async function fetchArts() {
    try {
      setTinyLoader(true);

      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/sell/artpiece/",
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAllArtpieces(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTinyLoader(false);
    }
  }

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesBlog, setSelectedImagesBlog] = useState([]);

  async function submitProject(data) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      // formData.append("images", selectedImages);

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/sell/artpiece/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response", response);
      if (response.status === 201) {
        navigate("/admin/art-piece");
      }
    } catch (error) {
      console.log("error =>", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
    }
  }

  const [deleteIdArt, setdeleteIdArt] = useState(null);

  async function deleteArt(token, projectId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this art piece?"
      );

      if (!confirmed) {
        return;
      }

      setTinyLoader(true);
      setdeleteIdArt(projectId);

      const response = await axios.delete(
        `https://slumart-production.up.railway.app/slum/sell/artpiece/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin/art-piece");
      }
    } catch (error) {
      console.error("Error deleting art:", error);
    } finally {
      setTinyLoader(false);
      setdeleteIdArt(null);
      fetchArts();
    }
  }

  async function editArt(data, token, projectId) {
    try {
      setTinyLoader(true);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.put(
        `https://slumart-production.up.railway.app/slum/sell/artpiece/${projectId}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        navigate("/admin/art-piece");
      }
    } catch (error) {
      console.error("Error updating art:", error);
      setsendError("An error occurred");
    } finally {
      setTinyLoader(false);
      fetchArts();
    }
  }

  //==========================================================================to add new admin
  const [loadingReg, setLoadingReg] = useState(false);

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
    setsendError("");
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
  // const [regSuccess, setregSuccess] = useState("");

  const { regSuccess, setregSuccess } = useAppContext();

  async function registerAdmin(data) {
    try {
      setLoadingReg(true);

      const formData = new FormData();
      formData.append("profile_image", image);

      // Append other data fields to FormData if needed
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/reg/admin/",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setregSuccess("New admin created successfully!");
      setTimeout(() => {
        setregSuccess("");
      }, 3000);
    } catch (error) {
      console.log("error =>", error);
      const errors = Object.values(error?.response?.data);
      const arrangedErrors = errors?.map((x) => x[0]);
      setregError(arrangedErrors);
      // setregError("An error occurred");
    } finally {
      setLoadingReg(false);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        tinyLoader,
        subitProject,
        fetchProjects,
        allProjects,
        deleteProject,
        deleteId,
        editProject,
        allArtpieces,
        fetchArts,
        submitProject,
        setsendError,
        sendError,
        deleteArt,
        deleteIdArt,
        setSelectedImages,
        selectedImages,
        editArt,
        loadingReg,
        isValidEmail,
        isFormDataValid,
        setIsFormDataValid,
        passwordError,
        handleChange,
        handleImageChange,
        regError,
        regSuccess,
        registerAdmin,
        formData,
        selectedImagesBlog,
        setSelectedImagesBlog,
        submitExhibit,
        allExhibitions,
        fetchExhibition,
        editExhibition,
        deleteExhibition,
        deleteIdEx,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = () => {
  return useContext(AdminContext);
};

export default AdminContextProvider;
