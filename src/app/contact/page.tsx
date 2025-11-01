import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
              Get in <span className="text-[#c9a05f]">Touch</span>
            </h1>
            <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contact us today for reliable plumbing services. We're available 24/7 for emergency services.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#f5f1e8] to-white rounded-xl p-6 border border-[#e8e4dc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 !text-center">
                <div className="w-14 h-14 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-4 !text-left">
                  <Phone className="w-7 h-7 text-[#c9a05f]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-lg mb-2">Phone</h3>
                <a href="tel:909-623-0033" className="font-['Open_Sans'] text-[#4a5568] hover:text-[#c9a05f] transition-colors">
                  909-623-0033
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#f5f1e8] to-white rounded-xl p-6 border border-[#e8e4dc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[#c9a05f]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-lg mb-2">Email</h3>
                <a href="mailto:contact@usaplumbingservice.com" className="font-['Open_Sans'] text-[#4a5568] hover:text-[#c9a05f] transition-colors text-sm break-all">
                  contact@usaplumbingservice.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#f5f1e8] to-white rounded-xl p-6 border border-[#e8e4dc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-[#c9a05f]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-lg mb-2">Location</h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">
                  Rancho Cucamonga, CA
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#f5f1e8] to-white rounded-xl p-6 border border-[#e8e4dc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#c9a05f]/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-[#c9a05f]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-lg mb-2">Hours</h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-6">
                  Send Us a Message
                </h2>
                <p className="font-['Open_Sans'] text-[#4a5568] text-lg leading-relaxed mb-8">
                  Have a question or need to schedule service? Fill out the form and we'll get back to you as soon as possible. For immediate assistance, please call us at 909-623-0033.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a05f] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-[#1a2332] mb-2">Fill Out the Form</h3>
                      <p className="font-['Open_Sans'] text-[#4a5568] text-sm">Provide your contact information and details about your plumbing needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a05f] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-[#1a2332] mb-2">We'll Respond Quickly</h3>
                      <p className="font-['Open_Sans'] text-[#4a5568] text-sm">Our team will review your message and contact you promptly to discuss your needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a05f] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-[#1a2332] mb-2">Schedule Your Service</h3>
                      <p className="font-['Open_Sans'] text-[#4a5568] text-sm">We'll arrange a convenient time to provide you with expert plumbing service.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-6">
              Service Areas
            </h2>
            <p className="font-['Open_Sans'] text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
              We proudly serve Rancho Cucamonga and surrounding areas in Southern California.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Rancho Cucamonga', 'Ontario', 'Upland', 'Fontana', 'Claremont', 'Chino', 'Pomona', 'San Bernardino'].map((city) =>
              <span key={city} className="bg-[#f5f1e8] text-[#1a2332] px-6 py-3 rounded-full font-['Open_Sans'] font-semibold hover:bg-[#c9a05f] hover:text-white transition-colors cursor-default">
                  {city}
                </span>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>);

}