import React, { useRef, useEffect, useState } from "react";

const TechnologySection = () => {
  const technologies = [
    { name: "Flutter", icon: "🚀", color: "from-blue-400 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-400 to-red-600" },
    { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-yellow-600" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-400 to-purple-600" },
    { name: "Material UI", icon: "🎨", color: "from-blue-400 to-indigo-600" },
    { name: "Java", icon: "☕", color: "from-orange-400 to-red-600" },
    { name: "Spring", icon: "🌱", color: "from-green-400 to-green-600" },
  ];
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth);
    }
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Technology</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          We create and deliver custom solutions of high technical and engineering
          quality using the following technologies and frameworks.
        </p>

        {/* Infinite Marquee - left to right and icon rotate */}
        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{
              animation: `marqueeLTR ${marqueeWidth / 50}s linear infinite`,
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className={`w-28 h-28 border-2 border-sky-400 rounded-xl flex flex-col items-center justify-center text-3xl bg-white shadow-md hover:shadow-lg transition flex-shrink-0 mx-2`}
              >
                <span
                  className="inline-block"
                  style={{
                    animation: "rotateIcon 2s linear infinite",
                  }}
                >
                  {tech.icon}
                </span>
                <span className="text-sm font-semibold text-gray-700 mt-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="text-sky-500 hover:underline inline-flex items-center gap-2 mt-8"
        >
          Know more about our technical expertise →
        </a>
      </div>

      {/* Custom CSS for marquee and rotate */}
      <style>{`
        @keyframes marqueeLTR {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes rotateIcon {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
