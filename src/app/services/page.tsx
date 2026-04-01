import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, ShieldCheck, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "accounting",
    title: "Accounting Services",
    icon: <Calculator className="w-10 h-10" />,
    description: "Our accounting services provide the structural integrity your business needs to grow with confidence. We go beyond simple bookkeeping to offer insightful financial analysis.",
    features: [
      "Financial Statement Preparation",
      "Internal Audits & Compliance",
      "Cash Flow Management",
      "Payroll & Benefits Administration",
      "QuickBooks & Cloud Accounting Setup"
    ],
    image: "/img/business-consultants-is-checking-and-analysis-sales-figures-to-plan-business-strategies-photo.jpg"
  },
  {
    id: "tax",
    title: "Tax Advisory",
    icon: <ShieldCheck className="w-10 h-10" />,
    description: "Navigate the complexities of tax regulations with ease. Our tax strategies are designed to protect your assets and optimize your financial position year-round.",
    features: [
      "Strategic Tax Planning",
      "Corporate & Individual Compliance",
      "International Tax Consulting",
      "IRS & State Representation",
      "R&D Tax Credit Optimization"
    ],
    image: "/img/consulting-expert-advice-support-service-business-concept-97202115.webp"
  },
  {
    id: "consulting",
    title: "Business Consulting",
    icon: <BarChart3 className="w-10 h-10" />,
    description: "Unlock your organization's maximum potential. We provide the strategic guidance and operational expertise necessary to thrive in competitive markets.",
    features: [
      "Strategic Business Planning",
      "Operational Efficiency Analysis",
      "Risk Management Frameworks",
      "M&A Advisory & Due Diligence",
      "CFO Advisory Services"
    ],
    image: "/img/two-handsome-young-business-colleagues-600nw-2523200393.webp"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-12">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif font-bold mb-6">Comprehensive Solutions for Strategic Growth</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From foundational accounting to high-level strategic consulting, we provide the expertise you need to scale with precision and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif font-bold text-primary">{service.title}</h2>
                  <p className="text-lg text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all shadow-sm"
                  >
                    Inquire About {service.title}
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold italic">"Excellence is not an act, but a habit. We've made excellence our standard across every service we offer."</h2>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 text-center text-white space-y-8 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Calculator className="w-64 h-64 absolute -bottom-10 -left-10" />
                <BarChart3 className="w-64 h-64 absolute -top-10 -right-10" />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-4">Not Sure Where to Start?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Schedule a free 15-minute discovery call to discuss your financial goals and see which of our services is the best fit for your needs.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-bold rounded shadow-lg hover:bg-accent/90 transition-all"
                >
                  Schedule Your Free Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
