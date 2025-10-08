import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  "Mobile Application",
  "Web Application",
  "UI/UX Design & Development",
  "Digital Marketing",
];

const portfolioItems = [
  {
    id: 1,
    title: "Hospital Management System (HMS)",
    category: "Web Application",
    image: "/lovable-uploads/c4.jpeg",
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "Digital Marketing",
    image: "/lovable-uploads/digitsl.jpeg",
  },
  {
    id: 3,
    title: "Gstore",
    category: "Web Application",
    image: "/lovable-uploads/c5.jpeg",
  },
  {
    id: 4,
    title: "Fintech",
    category: "Mobile Application",
    image: "/lovable-uploads/c6.jpeg",
  },
  {
    id: 5,
    title: "Loan Web App",
    category: "Web Application",
    image: "/lovable-uploads/c2.png",
  },
  {
    id: 6,
    title: "Parking App",
    category: "Mobile Application",
    image: "/lovable-uploads/c.jpg",
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "UI/UX Design & Development",
    image: "/lovable-uploads/Fashion.png",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.category === activeCategory)
    : portfolioItems;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-6 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Portfolio
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Spotlight on Latest Innovations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are a team of creative designers and developers building modern
          web and mobile experiences using HTML5, ReactJS, Angular, NodeJS, and
          beyond.
        </p>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-6 mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() =>
              setActiveCategory(activeCategory === category ? null : category)
            }
            className={`rounded-full text-sm sm:text-base transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-white"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/portfolio/${item.id}`}>
              <Card className="overflow-hidden group rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="aspect-video overflow-hidden rounded-t-2xl relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
