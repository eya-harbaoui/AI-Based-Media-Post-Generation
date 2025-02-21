import React from "react";
import { Copy, Download, Facebook, Linkedin, Twitter } from "lucide-react";



export const PostOutput = ({
  generatedContent,
  platform,
  handleCopy,
  handleDownload,
}) => {
  if (!generatedContent) return null;

  return (
    <div className="card bg-base-100 shadow-xl animate-fade-in">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title">Generated Post</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleCopy}
              className="btn btn-square btn-ghost hover:bg-green-50"
            >
              <Copy className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownload}
              className="btn btn-square btn-ghost hover:bg-green-50"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-base-200 p-4 rounded-lg mt-4">
          <div className="flex items-center space-x-2 mb-2">
            {platform === "linkedin" && (
              <Linkedin className="w-5 h-5" style={{ color: "#28AA4A" }} />
            )}
            {platform === "facebook" && (
              <Facebook className="w-5 h-5" style={{ color: "#28AA4A" }} />
            )}
            {platform === "twitter" && (
              <Twitter className="w-5 h-5" style={{ color: "#28AA4A" }} />
            )}
            <span className="text-sm font-medium capitalize">{platform}</span>
          </div>
          <p className="whitespace-pre-wrap">{generatedContent}</p>
        </div>
      </div>
    </div>
  );
};
