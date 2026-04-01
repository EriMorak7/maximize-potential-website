import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-12">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif font-bold mb-6">Let's Discuss Your Future</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question or ready to get started? Reach out to our team of experts today. We respond to all inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form */}
            <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Service of Interest</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Select a Service</option>
                    <option>Accounting Services</option>
                    <option>Tax Advisory</option>
                    <option>Business Consulting</option>
                    <option>Billing Services</option>
                    <option>Multi Media Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary">Contact Information</h2>
                <p className="text-lg text-muted leading-relaxed">
                  Connect with us through any of the channels below. We're here to help you navigate your journey.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-primary">Locations Served</h4>
                    <p className="text-muted leading-relaxed">
                      PA, NJ, DE, MD, TX, FL
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-primary">Direct Line</h4>
                    <p className="text-muted leading-relaxed">
                      [Insert Phone info]<br />
                      Mon - Fri, 9am - 6pm (EST)
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-primary">Email Outreach</h4>
                    <p className="text-muted leading-relaxed">
                      info@maximizepotential.com<br />
                      support@maximizepotential.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-primary">Business Hours</h4>
                    <p className="text-muted leading-relaxed">
                      Monday - Friday: 9am - 6pm<br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Placeholder */}
              <div className="pt-8 border-t border-gray-100 flex gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                   <span className="font-bold">IN</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                   <span className="font-bold">X</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                   <span className="font-bold">IG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
