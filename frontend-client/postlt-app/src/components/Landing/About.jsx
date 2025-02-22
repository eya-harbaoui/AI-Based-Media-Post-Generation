import { Linkedin, Facebook, Twitter } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="py-20  bg-[#28aa4b13]">
      <div className="max-w-6xl px-5 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-darkBlue">
          What is PostIt?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          PostIt is an AI-powered platform designed to{" "}
          <span className="font-semibold">
            {" "}
            simplify and automate social media post creation{" "}
          </span>
          Using cutting-edge Generative AI, it helps users craft engaging and
          optimized posts for various platforms with just a few clicks.
        </p>

        {/* Features Section */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-white shadow-md flex flex-col items-center">
            <Linkedin size={40} className="text-[#28AA4A]" />
            <h3 className="text-xl font-semibold text-darkBlue mt-3">
              LinkedIn Optimization
            </h3>
            <p className="mt-3 text-center">
              Create professional and engaging LinkedIn posts tailored for your
              audience, enhancing visibility and engagement.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md flex flex-col items-center">
            <Facebook size={40} className="text-[#28AA4A]" />
            <h3 className="text-xl font-semibold text-darkBlue mt-3">
              Facebook Engagement
            </h3>
            <p className="mt-3 text-center">
              Generate compelling Facebook posts with AI-driven captions and
              insights to maximize reach and interaction.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md flex flex-col items-center">
            <Twitter size={40} className="text-[#28AA4A]" />
            <h3 className="text-xl font-semibold text-darkBlue mt-3">
              Twitter (X) Efficiency
            </h3>
            <p className="mt-3 text-center">
              Craft concise and impactful tweets that resonate with your
              audience, all optimized for engagement and trending topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
