import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { LuUserRoundPlus } from "react-icons/lu";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();

  // Function for updating formData state when fill in the fields
  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      return { ...prev, [field]: value };
    });
  };

  // Signup fields list

  const signUpFields = [
    {
      type: "text",
      placeholder: "Enter your username ...",
      label: "Username",
      onChange: (e) => handleInputChange("username", e.target.value),
    },
    {
      type: "text",
      placeholder: "Enter your email ...",
      label: "Email",
      onChange: (e) => handleInputChange("email", e.target.value),
    },
    {
      type: "password",
      placeholder: "Enter password ...",
      label: "Password",
      onChange: (e) => handleInputChange("password", e.target.value),
    },
    {
      type: "password",
      placeholder: "Confirm password ...",
      label: "Confirm Password",
      onChange: (e) => handleInputChange("confirmedPassword", e.target.value),
    },
  ];

  // formData state

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  //A custom hook that provides a signup function to handle the sign-up process + a loading state to track if the sign-up is in progress
  const { loading, signup } = useSignup();

  // A function that is called when the form is submitted
  const handleSubmit = async () => {
    const isSuccess = await signup(formData);
    if (isSuccess) {
      navigate("/login");
    }
  };
  const handleLinkButton = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-5 h-screen">
      <AuthForm
        title="Sign Up"
        buttonText="Sign Up"
        fields={signUpFields}
        linkText="Already have an account ?"
        icon={<LuUserRoundPlus className="size-14 text-[#28AA4A]" />}
        handleSubmit={handleSubmit}
        handleLinkButton={handleLinkButton}
      />
    </div>
  );
};
