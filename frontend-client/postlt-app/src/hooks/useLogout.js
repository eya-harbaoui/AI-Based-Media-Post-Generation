import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AUTH_URL } from "../utils/Endpoints";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData?.tokens?.refresh) {
        throw new Error("No refresh token found");
      }

      // Send the refresh token to the backend for blacklisting
      await axios.post(
        `${AUTH_URL}/logout/`,
        { refresh_token: userData.tokens.refresh },
        {
          headers: {
            Authorization: `Bearer ${userData.tokens.access}`,
          },
        }
      );

      // Clear authentication header
      delete axios.defaults.headers.common["Authorization"];

      // Clear local storage and context
      localStorage.removeItem("user");
      setAuthUser(null);

      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout");
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
