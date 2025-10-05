
 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function About() {
  return (
    <div>
      {/* Hero Section */}
      <Navbar />
      <section className="bg-[#1E90FF] px-8 pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1E90FF] rounded-[40px] px-16 py-16 text-white text-center relative">
            <h1 className="text-5xl font-bold mb-5 tracking-tight">We Are PixeLab</h1>
            <h2 className="text-3xl font-semibold mb-3">Design and development innovation inspiration</h2>
            <p className="text-sm mb-1">Mobile & Web applications development company</p>
            <p className="text-xs mb-1">We care for your success</p>
            <p className="text-xs">We make your hard work behind simple Web & Mobile App Solution</p>

            <div className="relative mt-16 h-64">
  <div className="absolute left-8 top-0 bg-white rounded-2xl p-3 shadow-xl transform -rotate-3">
    <div className="w-44 h-28 rounded-lg overflow-hidden">
      <img
        src="/lovable-uploads/a1 (2).svg"
        alt="A1"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-white rounded-2xl p-3 shadow-xl">
    <div className="w-52 h-36 rounded-lg overflow-hidden">
      <img
        src="/lovable-uploads/b1.jpg"
        alt="B1"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="absolute right-8 top-0 bg-white rounded-2xl p-3 shadow-xl transform rotate-3">
    <div className="w-44 h-28 rounded-lg overflow-hidden">
      <img
        src="/lovable-uploads/a1 (3).avif"
        alt="A3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="absolute left-32 bottom-8 bg-white rounded-2xl p-3 shadow-xl transform rotate-6">
    <div className="w-40 h-32 rounded-lg overflow-hidden">
      <img
        src="/lovable-uploads/b2.jpg"
        alt="B2"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="absolute right-32 bottom-8 bg-white rounded-2xl p-3 shadow-xl transform -rotate-6">
    <div className="w-40 h-32 rounded-lg overflow-hidden">
      <img
        src="/lovable-uploads/b3.jpg"
        alt="B3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* WHO WE ARE */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="pr-8">
              <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">WHO WE ARE?</h2>
              <p className="text-gray-800 text-sm leading-relaxed">
                We "PixeLab" are Agility Dev- Ops software development Company providing WEB & MOBILE solutions of any complexity for B2B & B2C use cases. As a company, we have more than 3 years of experience in technology services. Our experts design, develop and deliver scalable system with the industry best practices for the best user experience and performance.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-gray-400">
                   <img src="../public/lovable-uploads/a1 (1).avif"></img>
              </div>
            </div>
          </div>

          {/* WHAT'S OUR SECRET */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
              <div className="w-full h-72 bg-gray-400">
                <img src="../public/lovable-uploads/a1 (1).svg"></img>
              </div>
            </div>
            <div className="pl-8 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">WHAT'S OUR SECRET?</h2>
              <p className="text-gray-800 text-sm leading-relaxed">
                Have the peace of mind that you are working with one of the best bespoke web and mobile application Development Company. There are really two things that make "PixeLablab" special, the Process and Our Team.
              </p>
            </div>
          </div>

          {/* OUR PROCESS */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="pr-8">
              <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">OUR PROCESS</h2>
              <p className="text-gray-800 text-sm leading-relaxed">
                It is our playbook for client success. It's the infrastructure that allows our team to create the great things that drive results for our clients.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="w-full h-72 bg-gray-400">
                <img src="../public/lovable-uploads/a1 (1).webp"></img>
              </div>
            </div>
          </div>

          {/* OUR PEOPLE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
              <div className="w-full h-72 bg-gray-400">
                <img src="../public/lovable-uploads/a1 (2).avif"></img>
              </div>
            </div>
            <div className="pl-8 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">OUR PEOPLE</h2>
              <p className="text-gray-800 text-sm leading-relaxed">
                They came from unicorn startups, not agencies. Instead of obsessing over awards, they've focused on satisfying customers and users. We work with argumentative of all sizes, from startups to global brands.
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
