// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail } from "lucide-react";

// const ContactSection = () => {
//   return (
//     <section className="py-16 px-6 bg-primary">
//       <div className="container mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="text-white-foreground">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Bring Your Vision To<br />
//               Life. Let's Connect
//             </h2>
//             <p className="text-primary-foreground/90 mb-6">
//               Have the budget for big ideas but know the right to<br />
//               get started? whether it's application delivery or robust<br />
//               website, our expert ensure pleasing results at all.
//             </p>
//             <div className="flex items-center gap-3">
//               <Mail className="w-6 h-6" />
//               <span>pixelabsolution@gmail.com</span>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 shadow-xl">
//             <form className="space-y-4">
//               <Input 
//                 placeholder="Full Name" 
//                 className="border-border"
//               />
//               <Input 
//                 type="tel"
//                 placeholder="Mobile Number" 
//                 className="border-border"
//               />
//               <Input 
//                 type="email"
//                 placeholder="Email" 
//                 className="border-border"
//               />
//               <Textarea 
//                 placeholder="Tell us about your project" 
//                 className="border-border min-h-32 resize-none"
//               />
//               <Button className="w-full">
//                 Submit
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bring Your Vision To<br />
              Life. Let's Connect
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Have the budget for big ideas but know the right to<br />
              get started? whether it's application delivery or robust<br />
              website, our expert ensure pleasing results at all.
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>pixelabsolution@gmail.com</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-4">
              <Input 
                placeholder="Full Name" 
                className="border-border"
              />
              <Input 
                type="tel"
                placeholder="Mobile Number" 
                className="border-border"
              />
              <Input 
                type="email"
                placeholder="Email" 
                className="border-border"
              />
              <Textarea 
                placeholder="Tell us about your project" 
                className="border-border min-h-32 resize-none"
              />
              <Button className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

