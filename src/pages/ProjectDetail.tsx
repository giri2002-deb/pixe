
import { useParams, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';

const portfolioData = {
  1: {
    id: 1,
    title: "Hospital Management System (HMS)",
    category: "Web Application",
    image: "../public/lovable-uploads/d.jpeg ",
    description: "An end-to-end software solution designed to streamline hospital operations. The system manages patient records, appointments, billing, and staff schedules, ensuring efficient workflow and improved patient care.",
    features: [
       "Patient registration and record management",
  "Appointment scheduling and reminders",
  "Billing and invoice generation",
  "Staff and resource management",
  "Dashboard with analytics for hospital administration"
    ],
    technologies: ["React.js", "Node.js", "Express.js",  "Firebase"],
  },
 
  3: {
    id: 3,
    title: "Gstore",
    category: "Web Application",
    image: "../public/lovable-uploads/d1s.jpeg ",
    description: "An electronics-focused online store offering a wide range of gadgets and devices. The platform features user-friendly browsing, secure payment integration, order management, and responsive design for a seamless shopping experience.",
    features: [
       "Electronics product catalog with categories and search",
  "Shopping cart and checkout system",
  "Payment gateway integration",
  "Order tracking and user account management",
  "Responsive design for desktop and mobile"
    ],
    technologies: ["React.js", "Node.js", "Express.js",  "MongoDB"],
  },
  4: {
    id: 4,
    title: "Fintech",
    category: "Mobile Application",
    image: "../public/lovable-uploads/d2.jpeg ",
    description: "A mobile/web app designed to manage and track chit collections from borrowers efficiently. It simplifies payment recording, reminders, and reporting for smooth financial operations.",
    features: [
     "Borrower management and payment tracking",
  "Automated reminders for due amounts",
  "Collection reports and analytics",
  "User-friendly interface for easy operation"
    ],
    technologies: ["React Native", "Firebase", "Redux","Node.js"],
  },
  5: {
    id: 5,
    title: "Loan Web App",
    category: "Web Application",
    image: "../public/lovable-uploads/c2.png  ",
    description: "A front-end web application developed as per client requirements to manage agriculture and animal husbandry loan processes. The app is built using JSON files for data storage, without a database, providing a lightweight and functional interface.",
    features: [
    "Loan application forms and tracking",
  "Display of loan schemes and details",
  "Lightweight front-end with JSON-based data handling",
  "Responsive design for desktop and mobile"
    ],
    technologies: ["MERN Stack", "Tailwind CSS"],
  },
  6: {
    id: 6,
    title: "Parking App",
    category: "Mobile Application",
    image: "../public/lovable-uploads/c.jpg",
    description: "A mobile/web app designed to simplify parking management for users and administrators. The app helps find, book, and manage parking spaces efficiently.",
    features: [
       "Search and reserve parking spots",
  "Real-time availability updates",
  "Booking history and payment tracking",
  "User-friendly interface with responsive design"
    ],
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = portfolioData[Number(id) as keyof typeof portfolioData];

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
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
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
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
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

          {/* CTA */}
         
        </div>
      </div>
   <Footer />
    </div>
  );
};

export default PortfolioDetail;
