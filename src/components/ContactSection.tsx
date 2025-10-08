import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-sky-500 to-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <div className="text-white opacity-0 animate-fadeIn animation-delay-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bring Your Vision To<br />
              Life. Let's Connect
            </h2>
            <p className="text-white/90 mb-6 text-base md:text-lg leading-relaxed">
              Have the budget for big ideas but not sure where to start? <br />
              Whether it’s an app or a robust website, our experts ensure <br />
              pleasing results every time.
            </p>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg w-fit hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-white font-medium">pixelabsolution@gmail.com</span>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl opacity-0 animate-fadeIn animation-delay-200">
            <form className="space-y-4">
              <Input
                placeholder="Full Name"
                className="border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
              />
              <Input
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
              />
              <Input
                type="email"
                placeholder="Email"
                className="border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
              />
              <Textarea
                placeholder="Tell us about your project"
                className="border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all min-h-32 resize-none"
              />
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white text-lg py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s forwards;
          }
          .animation-delay-100 {
            animation-delay: 0.1s;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
