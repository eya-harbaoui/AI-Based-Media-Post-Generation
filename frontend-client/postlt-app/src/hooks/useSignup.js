import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AUTH_URL } from "../utils/Endpoints";
import { useAuthContext } from "../context/AuthContext";
export const useSignup = () => {
  // State for tracking the loading status during the sign-up process
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  // Function to handle the sign-up process
  const signup = async (formData) => {
    // Validate the form data before proceeding with the signup
    const success = handleInputErrors(formData);
    if (!success) return;

    try {
      // Send POST request to the signup endpoint with formData
      const response = await axios.post(
        `${AUTH_URL}/register/`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.confirmedPassword,
        },
        {
          withCredentials: true,
        }
      );
      const userData = {
        tokens: {
          access: response.data.access,
          refresh: response.data.refresh,
        },
        user: response.data.user || {}, // Fallback in case user data isn't included
      };

      // Set up axios defaults for future authenticated requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access}`;

      localStorage.setItem("user", JSON.stringify(userData));
      setAuthUser(userData);
      toast.success("Successful Signup");

      return true;
    } catch (error) {
      // Handle the error based on the response from the backend
      if (error.response && error.response.data) {
        // Check if the error is related to email already existing
        if (error.response.data.error === "email already exists") {
          toast.error(
            "Already registred ! Please choose another email or login."
          );
        } else {
          toast.error(
            error.response.data.error || "An error occurred during signup."
          );
        }
      } else {
        toast.error(error.message || "An error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

// Function to handle input validation errors
const handleInputErrors = (formData) => {
  const { username, email, password, confirmedPassword } = formData;
  console.log("formData", formData);

  // Check if any required field is empty
  if (!username || !email || !password || !confirmedPassword) {
    toast.error("Please fill in all fields!");
    return false;
  }

  // Check if the password and confirmed password match
  if (password !== confirmedPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  // Check if the password length is at least 6 characters
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long!");
    return false;
  }

  return true;
};
