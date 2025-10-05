
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';

export function Contact() {
  return (
<div className="min-h-screen relative">
<Navbar />
<br></br>
<br></br>


    <section className="bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-primary p-12">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="text-white">
              <h1 className="mb-2 text-5xl font-bold leading-tight">Bring Your Vision To Life</h1>
              <h2 className="mb-8 text-5xl font-bold leading-tight">Let's Connect</h2>

              <p className="mb-8 text-white/90 leading-relaxed">
                Feel free to reach out by filling out the form on the right or using one of the methods below. We'll
                respond as soon as possible. For support requests, please contact us at
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg text-white">pixelabsolution@gmail.com</span>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rounded-2xl bg-white p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="h-12 rounded-lg border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Mobile number"
                    className="h-12 rounded-lg border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Email" className="h-12 rounded-lg border-gray-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-sm font-medium text-foreground">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project"
                    className="min-h-32 rounded-lg border-gray-200 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="h-12 rounded-lg bg-primary px-8 text-base font-medium hover:bg-primary/90"
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
  )
}
