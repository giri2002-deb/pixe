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
      "An end-to-end software solution designed to streamline hospital operations. The system manages patient records, appointments, billing, and staff schedules, ensuring efficient workflow and improved patient care.",
    features: [
      "Patient registration and record management",
      "Appointment scheduling and reminders",
      "Billing and invoice generation",
      "Staff and resource management",
      "Dashboard with analytics for hospital administration",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
  },

  // ✅ NEW second portfolio item with autoplay video
  2: {
    id: 2,
    title: "KVP Digital Marketing Project",
    category: "Video Presentation",
    video: "/lovable-uploads/kvp rework.mp4", // ← your video file path
    description:
      "A digital marketing project showcasing KVP’s services, campaigns, and brand outreach in a dynamic video format. The presentation highlights creative strategies and engagement metrics.",
    features: [
      "Brand showcase with motion graphics",
      "Ad campaign analytics overview",
      "Cross-platform marketing highlights",
      "Optimized for social and web viewing",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Figma"],
  },

  3: {
    id: 3,
    title: "Gstore",
    category: "Web Application",
    image: "/lovable-uploads/d1s.jpeg",
    description:
      "An electronics-focused online store offering a wide range of gadgets and devices. The platform features user-friendly browsing, secure payment integration, order management, and responsive design for a seamless shopping experience.",
    features: [
      "Electronics product catalog with categories and search",
      "Shopping cart and checkout system",
      "Payment gateway integration",
      "Order tracking and user account management",
      "Responsive design for desktop and mobile",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },

  // ... other entries ...
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
    <div className="min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Link to="/portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* ✅ Hero Section — show video if exists, otherwise image */}
      <div className="mb-12 w-full h-[400px] md:h-[450px] rounded-lg shadow-lg overflow-hidden">
  {item.video ? (
    <video
  src={item.video}
  className="w-full h-full object-contain min-w-[300px] min-h-[300px] "
  autoPlay
  muted
  loop
  playsInline
/>

  ) : (
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover"
    />
  )}
</div>


        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {item.category}
            </span>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {item.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
