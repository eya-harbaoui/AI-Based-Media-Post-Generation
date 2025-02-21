import React from "react";

const Features = () => {
  return (
    <section id="features" className="container mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Why Choose PostIt?
          </h2>
          <p className="text-gray-900 mt-4 text-center md:text-left">
            PostIt leverages AI to help you create engaging and optimized social
            media posts effortlessly.
          </p>
        </div>
        <div className="md:w-1/2 space-y-8">
          <div className="flex space-x-4">
            <div className="px-4 py-2 text-white bg-[#28AA4A] rounded-full h-10 flex items-center justify-center">
              01
            </div>
            <div>
              <h3 className="text-lg font-bold">AI-Powered Post Generation</h3>
              <p className="text-gray-600 mt-2">
                Create compelling social media posts in seconds with AI-driven
                suggestions.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="px-4 py-2 text-white bg-[#28AA4A] rounded-full h-10 flex items-center justify-center">
              02
            </div>
            <div>
              <h3 className="text-lg font-bold">Optimized for Engagement</h3>
              <p className="text-gray-600 mt-2">
                Our AI ensures your posts are engaging, relevant, and tailored
                to your audience.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="px-4 py-2 text-white bg-[#28AA4A] rounded-full h-10 flex items-center justify-center">
              03
            </div>
            <div>
              <h3 className="text-lg font-bold">Multi-Platform Publishing</h3>
              <p className="text-gray-600 mt-2">
                Schedule and publish your AI-generated posts across multiple
                social media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
