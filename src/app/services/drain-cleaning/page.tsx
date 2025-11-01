import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Image from "next/image";
import { CheckCircle, Phone, Clock, Shield, Award } from "lucide-react";

export default function DrainCleaningPage() {
  const services = [
  "Kitchen drain cleaning",
  "Bathroom drain cleaning",
  "Main line cleaning",
  "Video camera inspection",
  "Hydro jetting service",
  "Root removal",
  "Grease trap cleaning",
  "Emergency drain service"];


  const reasons = [
  { title: "Advanced Equipment", description: "We use the latest technology including video cameras and hydro jetting equipment." },
  { title: "Experienced Technicians", description: "Our team has over 25 years of experience handling all types of drain issues." },
  { title: "Same-Day Service", description: "We offer same-day service for most drain cleaning requests." },
  { title: "Satisfaction Guaranteed", description: "We stand behind our work with a 100% satisfaction guarantee." }];


  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <HeaderNavigation />
      
      <main className="flex-1 pt-[80px] lg:pt-[90px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#1a2332] to-[#2c3e50] py-20 md:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a05f 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-['Montserrat'] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
                  Professional <span className="text-[#c9a05f]">Drain Cleaning</span> Services
                </h1>
                <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl leading-relaxed mb-8">
                  Fast, effective drain cleaning services to clear clogs and restore proper flow. Available 24/7 for emergency service.
                </p>
                <a
                  href="tel:909-623-0033"
                  className="inline-flex items-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-xl">

                  <Phone className="w-5 h-5" />
                  Call: 909-623-0033
                </a>
              </div>
              <div className="relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-drain-4.png"
                  alt="Drain Cleaning Service"
                  width={400}
                  height={400}
                  className="!w-[473px] !h-full !max-w-[473px]" />

              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Our Drain Cleaning Services
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                We handle all types of drain cleaning needs with professional equipment and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) =>
              <div key={index} className="flex items-center gap-4 bg-[#f5f1e8] p-6 rounded-xl hover:bg-[#e8e4dc] transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#c9a05f] flex-shrink-0" />
                  <span className="font-['Open_Sans'] text-[#1a2332] font-semibold">{service}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                Why Choose USA Plumbing Service?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) =>
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-4">
                    {index === 0 && <Shield className="w-7 h-7 text-[#c9a05f]" />}
                    {index === 1 && <Award className="w-7 h-7 text-[#c9a05f]" />}
                    {index === 2 && <Clock className="w-7 h-7 text-[#c9a05f]" />}
                    {index === 3 && <CheckCircle className="w-7 h-7 text-[#c9a05f]" />}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-[#4a5568] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <ContactFormSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
              Need Drain Cleaning Service?
            </h2>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
              Contact us today for fast, professional drain cleaning services. Available 24/7 for emergencies.
            </p>
            <a
              href="tel:909-623-0033"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-10 py-5 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-2xl">

              Call: 909-623-0033
            </a>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>);

}