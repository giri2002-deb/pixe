import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#1E90FF] px-4 sm:px-8 pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1E90FF] rounded-[30px] sm:rounded-[40px] px-6 sm:px-16 py-12 sm:py-16 text-white text-center relative">
            <h1 className="text-3xl sm:text-5xl font-bold mb-5 tracking-tight">We Are PixeLab</h1>
            <h2 className="text-xl sm:text-3xl font-semibold mb-3">
              Design and development innovation inspiration
            </h2>
            <p className="text-sm mb-1">Mobile & Web applications development company</p>
            <p className="text-xs mb-1">We care for your success</p>
            <p className="text-xs">We make your hard work behind simple Web & Mobile App Solution</p>

            {/* Hero Images */}
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 justify-items-center items-center">
                {/* Left Column */}
                <div className="flex flex-col gap-4 col-span-1 sm:col-span-2">
                  <div className="bg-white rounded-2xl p-2 shadow-xl w-full sm:w-44 h-28 sm:h-32 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/lovable-uploads/a1 (2).svg"
                      alt="A1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-2 shadow-xl w-full sm:w-44 h-28 sm:h-32 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/lovable-uploads/b1.jpg"
                      alt="B1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Center Image */}
                <div className="bg-white rounded-2xl p-2 shadow-xl w-full sm:w-52 h-36 sm:h-40 hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1 justify-self-center">
                  <img
                    src="/lovable-uploads/a1 (3).avif"
                    alt="A3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 col-span-2 sm:col-span-2">
                  <div className="bg-white rounded-2xl p-2 shadow-xl w-full sm:w-44 h-28 sm:h-32 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/lovable-uploads/b2.jpg"
                      alt="B2"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-2 shadow-xl w-full sm:w-44 h-28 sm:h-32 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/lovable-uploads/b3.jpg"
                      alt="B3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* WHO WE ARE */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 tracking-tight">
                WHO WE ARE?
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                We "PixeLab" are an Agility DevOps software development company providing WEB &
                MOBILE solutions of any complexity for B2B & B2C use cases. With 3+ years of
                experience, our experts design, develop, and deliver scalable systems with
                industry-best practices for top performance.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/a1 (1).avif"
                alt="Who We Are"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>

          {/* WHAT'S OUR SECRET */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/lovable-uploads/a1 (1).svg"
                alt="Our Secret"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 tracking-tight">
                WHAT'S OUR SECRET?
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Have peace of mind knowing you’re working with one of the best bespoke web and
                mobile app developers. “PixeLab” stands out because of our process and our team.
              </p>
            </div>
          </div>

          {/* OUR PROCESS */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 tracking-tight">
                OUR PROCESS
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Our process is our playbook for success — it’s the backbone that enables us to build
                creative, efficient, and high-performing digital experiences for our clients.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/a1 (1).webp"
                alt="Our Process"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>

          {/* OUR PEOPLE */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/lovable-uploads/a1 (2).avif"
                alt="Our People"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 tracking-tight">
                OUR PEOPLE
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Our team consists of creative innovators from global startups. They’re not chasing
                awards — they’re focused on solving real user problems and delivering results for
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
