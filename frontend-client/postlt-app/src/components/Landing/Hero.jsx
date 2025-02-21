import illustrationIntro from "../../assets/images/illustration-intro.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            AI-Powered Social Media Post Generation
          </h1>
          <p className="max-w-sm text-center text-gray-900 md:text-left">
            PostIt leverages cutting-edge AI to create engaging social media
            posts for platforms like LinkedIn, Facebook, and Twitter (X).
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={illustrationIntro}
            alt="AI-powered post generation illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
