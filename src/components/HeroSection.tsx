import { Button } from "@/components/ui/button";
import {Contact} from "../pages/Contact";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-sky-600">Mobile And Web Applications</span>
          <br />
          <span className="text-gray-800">Design & Development</span>
        </h1>
        
  <p className="text-gray-600 text-sm md:text-base mb-8 mx-auto leading-relaxed text-center max-w-5xl line-clamp-2">
  We design, develop, and deliver solutions that ensure top performance and user experience. 
  Our bespoke apps work seamlessly across platforms using Flutter, React Native, Swift, Kotlin, React, Angular, and Java tech stacks.
</p>


        
        <Button
          size="lg"
          className="rounded-full px-8 bg-sky-500 hover:bg-sky-600 text-white shadow-md transition duration-300"
           onClick={() => navigate("/contact")}
        >
          Connect Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
