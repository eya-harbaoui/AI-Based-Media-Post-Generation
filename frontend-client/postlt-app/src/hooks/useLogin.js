import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AUTH_URL } from "../utils/Endpoints";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (formData) => {
    const success = handleInputErrors(formData);
    if (!success) return;

    setLoading(true);

    try {
      // Login endpoint returns JWT tokens
      const response = await axios.post(`${AUTH_URL}/login/`, {
        username: formData.username,
        password: formData.password,
      });

      const userData = {
        tokens: {
          access: response.data.access,
          refresh: response.data.refresh,
        },
        user: response.data.user || {},
      };

      // Set up axios defaults for future authenticated requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access}`;

      localStorage.setItem("user", JSON.stringify(userData));
      setAuthUser(userData);
      toast.success("Successful Login");

      return true;
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Invalid username or password");
      } else {
        toast.error("An error occurred during login");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const handleInputErrors = (formData) => {
  const { username, password } = formData;

  if (!username || !password) {
    toast.error("Please fill in all fields!");
    return false;
  }

  return true;
};
