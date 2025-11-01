import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to clear clogs and restore proper flow. We use advanced equipment to safely and effectively clean your drains.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-drain-4.png",
      href: "/services/drain-cleaning",
      features: ["Video camera inspection", "Hydro jetting", "Root removal", "Emergency service"]
    },
    {
      title: "Slab Leak Detection",
      description: "Advanced leak detection technology to locate and repair slab leaks before they cause major damage to your foundation.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-pipe-5.png",
      href: "/services/slab-leak-detection",
      features: ["Electronic leak detection", "Non-invasive methods", "Foundation protection", "Quick repairs"]
    },
    {
      title: "Water Heater Service",
      description: "Complete water heater installation, repair, and maintenance services for all types of water heaters.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png",
      href: "/services/water-heater-service-repairs",
      features: ["Tank & tankless", "Repairs & installation", "Maintenance plans", "Energy efficient options"]
    },
    {
      title: "Garbage Disposal",
      description: "Expert garbage disposal installation, repair, and replacement services for all major brands.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-garbage-6.png",
      href: "/services/garbage-disposal-service-installations",
      features: ["Professional installation", "Repair service", "Brand upgrades", "Disposal maintenance"]
    },
    {
      title: "Leaky Toilets",
      description: "Fast and reliable toilet repair services to fix leaks, running toilets, and other common issues.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png",
      href: "/services/leaky-toilets",
      features: ["Stop leaks", "Fix running toilets", "Replace parts", "Full installations"]
    },
    {
      title: "Sinks & Faucets",
      description: "Professional sink and faucet installation and repair services for kitchens and bathrooms.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-drain-4.png",
      href: "/services/sinks-faucets",
      features: ["Faucet installation", "Leak repairs", "Sink replacement", "Fixture upgrades"]
    },
    {
      title: "Bathtubs & Showers",
      description: "Complete bathtub and shower installation, repair, and remodeling services.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png",
      href: "/services/bathtubs-showers",
      features: ["Shower installation", "Bathtub repair", "Valve replacement", "Drain cleaning"]
    },
    {
      title: "Pipe Repair",
      description: "Expert pipe repair and replacement services for all types of plumbing pipes and materials.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-pipe-5.png",
      href: "/services/pipe-repair",
      features: ["Leak repairs", "Pipe replacement", "Repiping", "Emergency service"]
    },
    {
      title: "Backflow Prevention",
      description: "Professional backflow prevention device testing, installation, and certification services.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png",
      href: "/services/backflow-prevention",
      features: ["Device installation", "Annual testing", "Certification", "Compliance assurance"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <HeaderNavigation />
      
      <main className="flex-1 pt-[80px] lg:pt-[90px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#1a2332] to-[#2c3e50] py-20 md:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a05f 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-['Montserrat'] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Our <span className="text-[#c9a05f]">Plumbing Services</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive plumbing solutions for residential and commercial properties. Licensed, bonded, and insured professionals ready to serve you 24/7.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-[#f5f1e8] rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c9a05f] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-[#4a5568] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#2d3748]">
                        <CheckCircle className="w-4 h-4 text-[#c9a05f] flex-shrink-0" />
                        <span className="font-['Open_Sans']">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#c9a05f] hover:text-[#b8860b] font-['Montserrat'] font-semibold transition-all group-hover:gap-4"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Why Choose USA Plumbing Service?
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                Professional plumbing services you can trust, backed by over 25 years of experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-['Montserrat'] font-bold text-3xl">24/7</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-2">Emergency Service</h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">Available around the clock for your plumbing emergencies</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-['Montserrat'] font-bold text-3xl">25+</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-2">Years Experience</h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">Over two decades of expert plumbing service</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-['Montserrat'] font-bold text-3xl">100%</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-2">Satisfaction Guaranteed</h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">We stand behind our work with a satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
              Contact us today for reliable, professional plumbing services. Available 24/7 for emergencies.
            </p>
            <a
              href="tel:909-623-0033"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-10 py-5 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Call: 909-623-0033
            </a>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}
