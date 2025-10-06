import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';

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
    image:"/lovable-uploads/c4.jpeg",
  },
  {
    id: 2,
    title: " Digital Marketing ",
    category: "Digital Marketing",
    image:"/lovable-uploads/digitsl.jpeg",
  },
  
  {
    id: 3,
    title: "Gstore",
    category: "Web Application",
    image: "/lovable-uploads/c5.jpeg ",
  },
  {
    id: 4,
    title: "Fintech",
    category: "Mobile Application",
    image: " /lovable-uploads/c6.jpeg ",
  },
  {
    id: 5,
    title: "Loan Web App",
    category: "Web Application",

    image: "/lovable-uploads/c2.png ",
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.category === activeCategory)
    : portfolioItems;

  return (
    <div className="min-h-screen relative">
<Navbar />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Portfolio</h1>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Spotlight on Latest Innovations
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are a team of creative minded designers and developers who design and
            develope web applications in HTML5,JavaScript,ReactJS,Angular and NodeJS
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/portfolio/${item.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    <Footer />
</div>  );
};

export default Portfolio;
