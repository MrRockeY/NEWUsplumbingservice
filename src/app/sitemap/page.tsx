import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", href: "/services" },
        { name: "Drain Cleaning", href: "/services/drain-cleaning" },
        { name: "Slab Leak Detection", href: "/services/slab-leak-detection" },
        { name: "Water Heater Service & Repairs", href: "/services/water-heater-service-repairs" },
        { name: "Garbage Disposal Service & Installations", href: "/services/garbage-disposal-service-installations" },
        { name: "Leaky Toilets", href: "/services/leaky-toilets" },
        { name: "Sinks & Faucets", href: "/services/sinks-faucets" },
        { name: "Bathtubs & Showers", href: "/services/bathtubs-showers" },
        { name: "Pipe Repair", href: "/services/pipe-repair" },
        { name: "Backflow Prevention", href: "/services/backflow-prevention" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Sitemap", href: "/sitemap" }
      ]
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
              Site <span className="text-[#c9a05f]">Map</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Quick navigation to all pages on our website.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-[#f5f1e8] rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-6 pb-4 border-b-2 border-[#c9a05f]">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-[#4a5568] hover:text-[#c9a05f] transition-colors group font-['Open_Sans']"
                        >
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
              Need Help Finding Something?
            </h2>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
              Contact us and we'll be happy to assist you.
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
