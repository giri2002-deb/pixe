import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 bg-white">
      <div className="container mx-auto text-center max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-sky-600 block">Mobile And Web Applications</span>
          <span className="block text-gray-800">Design & Development</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 mx-auto leading-relaxed max-w-xl sm:max-w-2xl">
          We design, develop, and deliver solutions that ensure top performance and user experience.
          Our bespoke apps work seamlessly across platforms using Flutter, React Native, Swift,
          Kotlin, React, Angular, and Java tech stacks.
        </p>

        <Button
          size="lg"
          className="rounded-full px-6 py-3 sm:px-8 bg-sky-500 hover:bg-sky-600 text-white shadow-md transition duration-300 text-sm sm:text-base"
          onClick={() => navigate("/contact")}
        >
          Connect Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
