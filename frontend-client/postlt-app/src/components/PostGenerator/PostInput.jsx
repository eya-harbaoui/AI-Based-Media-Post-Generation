import React from "react";
import { LoaderCircle, Sparkles } from "lucide-react";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export const PostInput = ({
  content,
  setContent,
  platform,
  setPlatform,
  loading,
  handleGenerate,
  error,
  setGeneratedContent,
}) => {
  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    setGeneratedContent(null);
  };

  return (
    <div className="rounded-lg bg-white shadow-lg">
      <div className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-[#28AA4A]">
          Generate Social Media Post
        </h2>

        <div className="space-y-6">
          {/* Post Content Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Post Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your post content here..."
              rows={4}
            />
          </div>

          {/* Platform Select */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Platform
            </label>
            <div className="relative">
              <select
                value={platform}
                onChange={handlePlatformChange}
                className="w-full appearance-none rounded-md border border-gray-300 p-3 pr-8 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="linkedin">LinkedIn</option>
                <option value="facebook">Facebook</option>
                <option value="twitter(X)">Twitter(X)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="h-4 w-4 text-[#28AA4A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-md bg-red-50 p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !content}
            className="w-full rounded-md bg-[#28AA4A] py-3 text-white transition-all duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-transparent"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-4">
                <div className="animate-bounce">
                  <Linkedin size={30} className="text-[#28AA4A]" />
                </div>
                <div className="animate-bounce delay-100">
                  <Facebook size={30} className="text-[#28AA4A]" />
                </div>
                <div className="animate-bounce delay-200">
                  <Twitter size={30} className="text-[#28AA4A]" />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Generate Post</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
