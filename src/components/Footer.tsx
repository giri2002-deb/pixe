import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">PixeLab</h3>
            <p className="text-sm text-muted-foreground">
              35,Sumangali Nagar,  <br />
              Elampillai,<br />
              Salem-637502.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect with Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Web Application</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Mobile Application</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              pixelabsolution@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">
              +91 77081 01977
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
