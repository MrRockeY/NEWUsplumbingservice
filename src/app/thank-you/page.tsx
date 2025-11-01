import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Link from "next/link";
import { CheckCircle, Phone, Home, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <HeaderNavigation />
      
      <main className="flex-1 pt-[80px] lg:pt-[90px]">
        {/* Thank You Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-14 h-14 text-white" />
            </div>
            
            <h1 className="font-['Montserrat'] font-bold text-[#1a2332] text-4xl md:text-5xl lg:text-6xl mb-6">
              Thank You!
            </h1>
            
            <p className="font-['Open_Sans'] text-[#4a5568] text-lg md:text-xl leading-relaxed mb-8">
              We've received your message and will get back to you as soon as possible. A member of our team will contact you within 24 hours.
            </p>

            <div className="bg-gradient-to-br from-[#f5f1e8] to-white rounded-2xl p-8 mb-12 border border-[#e8e4dc]">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-2xl mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="font-['Open_Sans'] text-[#4a5568] mb-6">
                For emergency plumbing services, call us now. We're available 24/7.
              </p>
              <a
                href="tel:909-623-0033"
                className="inline-flex items-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call: 909-623-0033
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#1a2332] text-white font-['Montserrat'] font-semibold px-8 py-4 rounded-lg hover:bg-[#2c3e50] transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1a2332] text-[#1a2332] font-['Montserrat'] font-semibold px-8 py-4 rounded-lg hover:bg-[#1a2332] hover:text-white transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-16 md:py-24 bg-[#f5f1e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                What Happens Next?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-['Montserrat'] font-bold text-2xl">
                  1
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3">
                  We Review Your Request
                </h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">
                  Our team will carefully review your message and assess your plumbing needs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-['Montserrat'] font-bold text-2xl">
                  2
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3">
                  We Contact You
                </h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">
                  A team member will reach out to discuss your needs and schedule a convenient time.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#c9a05f] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-['Montserrat'] font-bold text-2xl">
                  3
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] text-xl mb-3">
                  We Solve Your Problem
                </h3>
                <p className="font-['Open_Sans'] text-[#4a5568]">
                  Our expert technicians will provide professional service to resolve your plumbing issue.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}
