import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <br></br>

      <section className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-primary p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Info */}
              <div className="text-white space-y-6">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    Bring Your Vision To Life
                  </h1>
                  <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    Let's Connect
                  </h2>
                </div>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Have a project in mind or need assistance? Drop us a message
                  using the form, or contact us directly. Our team will get back
                  to you as soon as possible.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg sm:text-xl font-medium text-white">
                    pixelabsolution@gmail.com
                  </span>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-semibold text-gray-700">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-sm font-semibold text-gray-700">
                      Tell us about your project
                    </Label>
                    <Textarea
                      id="project"
                      placeholder="Share a few details about your project..."
                      className="min-h-32 rounded-xl border-gray-200 resize-none focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="h-12 rounded-xl bg-primary px-8 text-base font-semibold hover:bg-primary/90 transition-colors duration-300"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
