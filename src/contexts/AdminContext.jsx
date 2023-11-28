/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [tinyLoader, setTinyLoader] = useState(false);

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

      console.log("response", response);
      if (response.status === 201) {
        navigate("/admin");
      }
    } catch (error) {
      console.log("error =>", error);
    } finally {
      setTinyLoader(false);
    }
  }

  const [allProjects, setAllProjects] = useState([]);

  async function fetchProjects(token) {
    try {
      setTinyLoader(true);

      // Make a GET request to the endpoint
      const response = await axios.get(
        "https://slumart-production.up.railway.app/slum/create/blog/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);
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

      // Make a DELETE request to the endpoint with the projectId to delete
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

  return (
    <AdminContext.Provider
      value={{
        tinyLoader,
        subitProject,
        fetchProjects,
        allProjects,
        deleteProject,
        deleteId,
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
