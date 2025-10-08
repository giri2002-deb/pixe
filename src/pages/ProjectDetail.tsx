import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const portfolioData = {
  1: {
    id: 1,
    title: "Hospital Management System (HMS)",
    category: "Web Application",
    image: "/lovable-uploads/d.jpeg",
    description:
      "An end-to-end hospital management platform that handles patient records, appointments, billing, and staff workflows, improving efficiency and patient experience.",
    features: [
      "Patient registration and record management",
      "Appointment scheduling and reminders",
      "Billing and invoice generation",
      "Staff and resource management",
      "Dashboard with hospital analytics",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
  },
  2: {
    id: 2,
    title: "Digital Marketing Project",
    category: "Video Presentation",
    image: "/lovable-uploads/z.jpeg",
    video: "/lovable-uploads/kvp rework.mp4",
    description:
      "A creative digital marketing presentation for KVP showcasing brand awareness, ad campaigns, and engagement analytics using motion design and storytelling.",
    features: [
      "Brand showcase with dynamic visuals",
      "Campaign analytics and metrics",
      "Cross-platform marketing overview",
      "Optimized for web and social viewing",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "Figma",
      "Meta Business Suite",
    ],
  },
  3: {
    id: 3,
    title: "Gstore",
    category: "E-commerce Platform",
    image: "/lovable-uploads/d1s.jpeg",
    description:
      "A modern e-commerce web app for electronics, offering seamless shopping with secure payment integration and real-time order tracking.",
    features: [
      "Product browsing with filters",
      "Add to cart & checkout flow",
      "Payment gateway integration",
      "User account & order tracking",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const item = portfolioData[Number(id)];

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/portfolio">
          <Button>Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="ghost" className="mb-8 text-sm sm:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Media Section (Image → Video order) */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white mb-12">
          {/* Image first */}
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] sm:h-[400px] object-cover"
            />
          )}

          {/* Add space before video */}
          {item.video && (
            <div className="mt-3 sm:mt-5">
              <video
                src={item.video}
                className="w-full h-[220px] sm:h-[400px] object-contain bg-black rounded-b-2xl"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
            {item.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 leading-snug">
            {item.title}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
            {item.description}
          </p>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              ✨ Key Features
            </h2>
            <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 text-gray-600 text-sm sm:text-base">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              ⚙️ Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
