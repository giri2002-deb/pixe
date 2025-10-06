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
      link: "/portfolio/mobile-applications",
    },
    {
      title: "Mobile Applications",
      description:
        "With capabilities across all device platforms, our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop top-notch products based on business needs seamlessly.",
      image: "./lovable-uploads/Frame1.png",
      link: "Our mobile app expertise",
    },
    {
      title: "Micro services",
      description:
        "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "./lovable-uploads/micro1.png",
      link: "Our business integrations",
    },
  ];

  const servicesData = [
    {
      title: "UI/UX Design and Development",
      description:
        "We aspire to create simple, user-friendly experiences by conducting comprehensive research on end-user behaviour before designing. Our best-in-class, result-driven strategies work on a wide range of platforms, delivering better functionality and user experience.",
      image: "./lovable-uploads/ui ux.png",
      link: "Our UI/UX expertise",
    },
    {
      title: "Digital Marketing",
      description:
        "We offer a suite of services promoting your business online across various digital channels. Our focus is on delivering exceptional digital experiences to your audience, ensuring maximum ROI for your marketing budget.",
      image: "./lovable-uploads/digital1.png",
      link: "Our Digital Marketing expertise",
    },
    {
      title: "Testing Services",
      description:
        "A small glitch in performance can spell doomsday for the entire development process. Our holistic testing approach ensures quality through proven methodologies and reduced cost.",
      image: "./lovable-uploads/Group.png",
      link: "Our Testing Services",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Specialization
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
            <TabsTrigger
              value="mobile"
              className="rounded-full px-6 border border-sky-400 text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Application
            </TabsTrigger>

            <TabsTrigger
              value="web"
              className="rounded-full px-6 border border-sky-400 text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition"
            >
              <Globe className="w-4 h-4 mr-2" />
              Web Application
            </TabsTrigger>

            <TabsTrigger
              value="uiux"
              className="rounded-full px-6 border border-sky-400 text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition"
            >
              <Layers className="w-4 h-4 mr-2" />
              UI/UX Design & Development
            </TabsTrigger>

            <TabsTrigger
              value="marketing"
              className="rounded-full px-6 border border-sky-400 text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Digital Marketing
            </TabsTrigger>

            <TabsTrigger
              value="testing"
              className="rounded-full px-6 border border-sky-400 text-gray-700 hover:bg-sky-100 data-[state=active]:bg-sky-500 data-[state=active]:text-white transition"
            >
              <TestTube className="w-4 h-4 mr-2" />
              Testing Services
            </TabsTrigger>
          </TabsList>

          {/* === MOBILE APP TAB === */}
        <TabsContent value="mobile">
  <div className="bg-gray-50 rounded-3xl p-12 shadow-sm text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
      <Smartphone className="w-6 h-6 text-sky-500" />
      {expertiseData[1].title}
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
      {expertiseData[1].description}
    </p>

    <div className="w-full rounded-3xl overflow-hidden shadow-md">
      <img
        src={expertiseData[1].image}
        alt={expertiseData[1].title}
        className="w-full h-auto object-cover rounded-3xl"
      />
    </div>
  </div>
</TabsContent>


          {/* === WEB APP TAB === */}
          <TabsContent value="web">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-sky-500" />
                {expertiseData[0].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {expertiseData[0].description}
              </p>
              <img
                src={expertiseData[0].image}
                alt={expertiseData[0].title}
                className="rounded-2xl shadow-md mx-auto w-3/4"
              />
            </div>
          </TabsContent>

          {/* === UI/UX TAB === */}
          <TabsContent value="uiux">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-sky-500" />
                {servicesData[0].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {servicesData[0].description}
              </p>
              <img
                src={servicesData[0].image}
                alt={servicesData[0].title}
                className="rounded-2xl shadow-md mx-auto w-3/4"
              />
            </div>
          </TabsContent>

          {/* === DIGITAL MARKETING TAB === */}
          <TabsContent value="marketing">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-sky-500" />
                {servicesData[1].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {servicesData[1].description}
              </p>
              <img
                src={servicesData[1].image}
                alt={servicesData[1].title}
                className="rounded-2xl shadow-md mx-auto w-3/4"
              />
            </div>
          </TabsContent>

          {/* === TESTING TAB === */}
          <TabsContent value="testing">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TestTube className="w-6 h-6 text-sky-500" />
                {servicesData[2].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {servicesData[2].description}
              </p>
              <img
                src={servicesData[2].image}
                alt={servicesData[2].title}
                className="rounded-2xl shadow-md mx-auto w-3/4"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SpecializationSection;
