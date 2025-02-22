import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Landing/Navbar";
import { PostInput } from "../components/PostGenerator/PostInput";
import { PostOutput } from "../components/PostGenerator/PostOutput";
import companyLogo from "../assets/images/logo.png";
import usePostGenerator from "../hooks/usePostGenerator";
import { useLogout } from "../hooks/useLogout";

export const PostGenerator = () => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const { logout, loading: logoutLoading } = useLogout();
  //verify if the user is authentified
  React.useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  const {
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
  } = usePostGenerator();

  const handlePlatformChange = (newPlatform) => {
    setPlatform(newPlatform);
    setGeneratedContent(""); // Clear generated content when platform changes
  };

  const handleLogout = async () => {
    await logout();
    // After successful logout redirect to login
  };

  if (!authUser) {
    return null;
  }
  // Logout functionnality

  const cta = {
    label: logoutLoading ? "Logging out..." : "Logout",
    path: "/",
    onClick: handleLogout,
  };

  return (
    <>
      <Navbar logo={companyLogo} menuItems={[]} cta={cta} />
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <PostInput
            content={content}
            setContent={setContent}
            platform={platform}
            setPlatform={handlePlatformChange}
            loading={loading}
            handleGenerate={handleGenerate}
            error={error}
          />
          {generatedContent && (
            <PostOutput
              generatedContent={generatedContent}
              platform={platform}
              handleCopy={handleCopy}
              handleDownload={handleDownload}
            />
          )}
        </div>
      </div>
    </>
  );
};
