import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutPreviewSection from "@/components/sections/about-preview-section";
import ServicesGridSection from "@/components/sections/services-grid-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import EmergencyCtaSection from "@/components/sections/emergency-cta-section";
import FooterSection from "@/components/sections/footer-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <HeaderNavigation />
      
      <main className="flex-1">
        <HeroSection />
        
        <AboutPreviewSection />
        
        <ServicesGridSection />
        
        <section className="bg-gradient-to-b from-[#f5f1e8] to-[#faf8f5] py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="mb-6 text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#1a2332] md:text-[2.25rem] lg:text-[2.75rem] !font-(family-name:--font-montserrat)">
                  Contact Us Today
                </h2>
                <p className="text-[#4a5568] text-[1.0625rem] leading-[1.7] tracking-[-0.01em] mb-8">
                  Have a plumbing emergency or need to schedule service? Fill out the form and we'll get back to you as soon as possible. Our team is available 24/7 for emergency services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a05f] flex items-center justify-center text-[#1a2332] text-sm font-bold">✓</div>
                    <p className="text-[#2d3748] text-base">24/7 Emergency Service Available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a05f] flex items-center justify-center text-[#1a2332] text-sm font-bold">✓</div>
                    <p className="text-[#2d3748] text-base">Licensed, Bonded & Insured (CA #961844)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a05f] flex items-center justify-center text-[#1a2332] text-sm font-bold">✓</div>
                    <p className="text-[#2d3748] text-base">Family Owned & Operated Since 1998</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a05f] flex items-center justify-center text-[#1a2332] text-sm font-bold">✓</div>
                    <p className="text-[#2d3748] text-base">Fair Pricing with No Hidden Fees</p>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>
        
        <EmergencyCtaSection />
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>);

}