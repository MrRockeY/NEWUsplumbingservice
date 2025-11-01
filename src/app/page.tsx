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
                            <div className="lg:sticky lg:top-[120px]">
                                <h2 className="mb-6 text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#1a2332] md:text-[2.25rem] lg:text-[2.75rem] font-montserrat">
                                    Contact Us Today
                                </h2>
                                <p className="text-[#4a5568] text-[1.0625rem] leading-[1.7] tracking-[-0.01em] mb-8 font-open-sans">
                                    Have a plumbing emergency or need to schedule service? Fill out the form and we'll get back to you as soon as possible. Our team is available 24/7 for emergency services.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a05f] flex items-center justify-center text-white font-bold">1</div>
                                        <div>
                                            <h3 className="font-montserrat font-bold text-[#1a2332] mb-1">24/7 Emergency Service</h3>
                                            <p className="font-open-sans text-[#4a5568]">Available around the clock for urgent plumbing needs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a05f] flex items-center justify-center text-white font-bold">2</div>
                                        <div>
                                            <h3 className="font-montserrat font-bold text-[#1a2332] mb-1">Licensed & Insured</h3>
                                            <p className="font-open-sans text-[#4a5568]">CA #961844 - Fully bonded for your protection</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a05f] flex items-center justify-center text-white font-bold">3</div>
                                        <div>
                                            <h3 className="font-montserrat font-bold text-[#1a2332] mb-1">Family Owned Since 1998</h3>
                                            <p className="font-open-sans text-[#4a5568]">25+ years of trusted service experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:min-h-[600px]">
                                <ContactFormSection className="max-w-[640px]" />
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
