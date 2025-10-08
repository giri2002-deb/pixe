import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">PixeLab</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              35, Sumangali Nagar, <br />
              Elampillai, <br />
              Salem - 637502.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-xl mb-4">Connect with Us</h3>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Youtube, link: "#" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-transform duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "Services", "Web Application", "Mobile Application"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="opacity-80 hover:opacity-100 hover:translate-x-1 inline-block transition-transform duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <p className="text-sm opacity-80">pixelabsolution@gmail.com</p>
            <p className="text-sm opacity-80 mt-2">+91 77081 01977</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} PixeLab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
