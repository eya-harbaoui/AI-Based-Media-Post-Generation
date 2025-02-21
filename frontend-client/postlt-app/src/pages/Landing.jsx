import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Features from "../components/Landing/Features";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import companyLogo from "../assets/images/logo.png";

export const Landing = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle anchor links on page load
  useEffect(() => {
    // If URL contains a hash on load, scroll to that section
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const menuItems = [
    { label: "Hero", path: "#hero" },
    { label: "Features", path: "#features" },
    { label: "About", path: "#about" },
  ];

  const cta = {
    label: "Get Started",
    onClick: () => {
      navigate("/login"); // Navigate to /login on click
    },
  };

  return (
    <>
      <Navbar logo={companyLogo} menuItems={menuItems} cta={cta} />
      <Hero />
      <Features />
      <About />
    </>
  );
};

export default Landing;
