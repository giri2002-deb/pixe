import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Smartphone, Globe, Layers, TrendingUp, TestTube } from "lucide-react";

const SpecializationSection = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const expertiseData = [
    {
      title: "Web Applications",
      description:
        "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows. At Pixelab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      image: "./lovable-uploads/Frame3.png",
    },
    {
      title: "Mobile Applications",
      description:
        "With capabilities across all device platforms, our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop top-notch products based on business needs seamlessly.",
      image: "./lovable-uploads/Frame1.png",
    },
    {
      title: "Micro services",
      description:
        "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "./lovable-uploads/micro1.png",
    },
  ];

  const servicesData = [
    {
      title: "UI/UX Design and Development",
      description:
        "We aspire to create simple, user-friendly experiences by conducting comprehensive research on end-user behaviour before designing. Our best-in-class, result-driven strategies work on a wide range of platforms, delivering better functionality and user experience.",
      image: "./lovable-uploads/ui ux.png",
    },
    {
      title: "Digital Marketing",
      description:
        "We offer a suite of services promoting your business online across various digital channels. Our focus is on delivering exceptional digital experiences to your audience, ensuring maximum ROI for your marketing budget.",
      image: "./lovable-uploads/Group.png",
    },
    {
      title: "Testing Services",
      description:
        "A small glitch in performance can spell doomsday for the entire development process. Our holistic testing approach ensures quality through proven methodologies and reduced cost.",
      image: "./lovable-uploads/digital1.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">
          Our Specialization
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* === TAB BUTTONS === */}
          <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 bg-transparent h-auto">
            {[
              { id: "mobile", icon: <Smartphone />, label: "Mobile Apps" },
              { id: "web", icon: <Globe />, label: "Web Apps" },
              { id: "uiux", icon: <Layers />, label: "UI/UX Design" },
              { id: "marketing", icon: <TrendingUp />, label: "Digital Marketing" },
              { id: "testing", icon: <TestTube />, label: "Testing" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center justify-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 border border-sky-400 text-sm sm:text-base text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition-all duration-300"
              >
                <span className="w-4 h-4">{tab.icon}</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* === REUSABLE COMPONENT === */}
          {[
            {
              id: "mobile",
              data: expertiseData[1],
              icon: <Smartphone className="w-6 h-6 text-sky-500" />,
            },
            {
              id: "web",
              data: expertiseData[0],
              icon: <Globe className="w-6 h-6 text-sky-500" />,
            },
            {
              id: "uiux",
              data: servicesData[0],
              icon: <Layers className="w-6 h-6 text-sky-500" />,
            },
            {
              id: "marketing",
              data: servicesData[1],
              icon: <TrendingUp className="w-6 h-6 text-sky-500" />,
            },
            {
              id: "testing",
              data: servicesData[2],
              icon: <TestTube className="w-6 h-6 text-sky-500" />,
            },
          ].map(({ id, data, icon }, index) => (
            <TabsContent value={id} key={id}>
              <div
                className={`bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12 text-center md:text-left`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start gap-2">
                    {icon}
                    {data.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {data.description}
                  </p>
                </div>
                <div className="flex-1 w-full group">
                  <div className="overflow-hidden rounded-2xl shadow-md transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full max-w-md mx-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SpecializationSection;
