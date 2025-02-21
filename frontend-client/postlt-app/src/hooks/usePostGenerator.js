import { useState } from "react";
import axios from "axios";
import { POST_URL } from "../utils/Endpoints";

const usePostGenerator = () => {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("linkedin");
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [error, setError] = useState("");

  const checkAuth = () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      throw new Error("User not authenticated");
    }
    const { tokens } = JSON.parse(userData);
    return tokens.access;
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      setGeneratedContent(""); // Clear previous generated content

      const token = checkAuth();

      const response = await axios.post(
        `${POST_URL}/create/`,
        {
          original_content: content,
          platform: platform,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.data) {
        setGeneratedContent(response.data.data.generated_content);
      }
    } catch (err) {
      if (err.message === "User not authenticated") {
        setError("Please log in to generate posts");
      } else {
        setError(
          err.response?.data?.error ||
            "An error occurred while generating the post"
        );
      }
      console.error("Error generating post:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${platform}-post.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return {
    content,
    setContent,
    platform,
    setPlatform,
    loading,
    generatedContent,
    setGeneratedContent,
    error,
    handleGenerate,
    handleCopy,
    handleDownload,
  };
};

export default usePostGenerator;
