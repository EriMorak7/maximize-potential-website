import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, History, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/istockphoto-1947499362-612x612.jpg"
            alt="About Us Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Redefining Strategic Excellence</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Maximize Potential Group LLC was founded on a simple principle: every business has potential, but not every business has a strategy to reach it.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm tracking-widest uppercase">
                 Our Story
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary">From Vision to Victory</h2>
              <p className="text-lg text-muted leading-relaxed">
                Founded in [Wait for PRD/User info], Maximize Potential Group LLC has grown from a specialized tax boutique to a comprehensive consulting firm. We've helped hundreds of clients across [Wait for PRD/User info] navigate financial complexities and achieve breakthrough results.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Our founders recognized that most consulting firms were either too rigid to adapt to individual needs or too small to provide the breadth of expertise required in today's economy. We bridge that gap.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Target className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To empower organizations and individuals through exceptional financial clarity and strategic excellence.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Users className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To be the gold standard in consulting, recognized globally for innovation and results.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <History className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Heritage</h3>
                <p className="text-muted leading-relaxed">
                  A legacy of excellence built on a foundation of trust, integrity, and relentless innovation.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Promise</h3>
                <p className="text-muted leading-relaxed">
                  Uncompromised quality and absolute precision in every advisory and financial reporting we provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">The Values That Drive Us</h2>
            <p className="text-xl text-gray-300">
              Our culture is built on a set of core principles that guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6">
              <div className="text-5xl font-serif font-bold text-accent">01</div>
              <h3 className="text-2xl font-bold uppercase tracking-widest">Integrity</h3>
              <p className="text-gray-300 leading-relaxed">
                We operate with complete transparency and honesty, ensuring our clients can rely on us as their trusted partner.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-5xl font-serif font-bold text-accent">02</div>
              <h3 className="text-2xl font-bold uppercase tracking-widest">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously evolve our methodologies to stay ahead of market trends and provide the most effective solutions.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-5xl font-serif font-bold text-accent">03</div>
              <h3 className="text-2xl font-bold uppercase tracking-widest">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We set high standards for ourselves and never settle for anything less than the best for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl font-serif font-bold">Experience the Difference in Depth</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to learn more about how our heritage and values can help you achieve your goals?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-primary text-white font-bold rounded shadow-lg hover:bg-primary/90 transition-all"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="px-10 py-4 bg-accent text-primary font-bold rounded shadow-lg hover:bg-accent/90 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
