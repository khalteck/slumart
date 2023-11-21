/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  async function register(data) {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://slumart-production.up.railway.app/slum/register/",
        data
      );

      console.log(response);
    } catch (error) {
      console.log("error =>", error);
    } finally {
      setLoading(false);
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
