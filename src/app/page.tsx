import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/business-consultants-is-checking-and-analysis-sales-figures-to-plan-business-strategies-photo.jpg"
            alt="Consulting Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] !text-accent drop-shadow-sm">
                Empowering Your Financial Future with Precision & Strategy.
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl leading-relaxed">
                Maximize Potential Group LLC provides high-performance consulting, accounting, and tax advisory services tailored for visionary businesses and individuals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-bold rounded shadow-lg hover:bg-accent/90 transition-all group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded hover:bg-white/20 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Expertise That Drives Success</h2>
            <p className="text-lg text-muted">
              We combine deep industry knowledge with strategic foresight to help our clients navigate complex financial landscapes and achieve sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Accounting */}
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Accounting Services</h3>
              <p className="text-muted leading-relaxed mb-6">
                Accurate financial reporting and management to provide a clear picture of your business's health and performance.
              </p>
              <Link href="/services#accounting" className="text-accent font-bold inline-flex items-center hover:underline">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Tax Advisory */}
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Tax Advisory</h3>
              <p className="text-muted leading-relaxed mb-6">
                Strategic tax planning and compliance solutions designed to minimize liabilities and maximize your outcome.
              </p>
              <Link href="/services#tax" className="text-accent font-bold inline-flex items-center hover:underline">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Consulting */}
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Business Consulting</h3>
              <p className="text-muted leading-relaxed mb-6">
                Expert guidance on strategy, operations, and growth to help you reach your maximum potential in any market.
              </p>
              <Link href="/services#consulting" className="text-accent font-bold inline-flex items-center hover:underline">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/2 -translate-y-1/2">
          <BarChart3 className="w-96 h-96" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <blockquote className="space-y-8">
            <p className="text-3xl md:text-5xl font-serif italic font-light leading-snug">
              "Our mission is to empower businesses and individuals through exceptional financial clarity and strategic excellence."
            </p>
            <footer className="text-xl font-sans font-semibold tracking-widest text-accent uppercase">
              Maximize Potential Group
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Why Choose Us / Value Props */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/two-handsome-young-business-colleagues-600nw-2523200393.webp"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Why Partner With Us?</h2>
                <p className="text-lg text-muted">
                  We don't just manage your finances; we partner in your growth. Our approach is built on four core pillars.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Uncompromising Precision</h4>
                    <p className="text-muted leading-relaxed">
                      Every detail matters. We ensure 100% accuracy in our reporting and advisory to provide total peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Strategic Foresight</h4>
                    <p className="text-muted leading-relaxed">
                      We look beyond the numbers to identify opportunities and mitigate risks before they impact your bottom line.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">Growth-Driven Mindset</h4>
                    <p className="text-muted leading-relaxed">
                      Our solutions are designed to scale with you, providing the financial foundation necessary for expansion.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group"
              >
                Learn more about our methodology
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section / Scheduling */}
      <section id="book" className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm tracking-widest uppercase">
            Strategic Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Ready to Maximize Your Potential?</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute discovery call to discuss your financial landscape and identify high-impact growth opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <a
              href="https://calendly.com/maximize-potential"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-xl hover:translate-y-[-2px] flex items-center justify-center gap-3"
            >
              <Calculator className="w-5 h-5 text-accent" />
              Schedule Discovery Call
            </a>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white border border-gray-200 text-primary font-bold rounded-lg hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-3"
            >
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-sm text-gray-500 italic">
            Currently booking for [Current Month] & [Next Month]
          </p>
        </div>
      </section>
    </div>
  );
}
