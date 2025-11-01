import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";

export default function BackflowPreventionPage() {
    const services = [
        "Backflow device installation",
        "Annual testing & certification",
        "Device repair",
        "Compliance assurance",
        "Commercial backflow testing",
        "Residential backflow testing",
        "Emergency service",
        "All device types serviced"
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#faf8f5]">
            <HeaderNavigation />

            <main className="flex-1 pt-[80px] lg:pt-[90px]">
                <section className="relative bg-gradient-to-r from-[#1a2332] to-[#2c3e50] py-20 md:py-28">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a05f 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="font-['Montserrat'] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
                                    Backflow <span className="text-[#c9a05f]">Prevention Services</span>
                                </h1>
                                <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl leading-relaxed mb-8">
                                    Professional backflow prevention device testing, installation, and certification services.
                                </p>
                                <a
                                    href="tel:909-623-0033"
                                    className="inline-flex items-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8860b] transition-all duration-300 hover:scale-105 shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call: 909-623-0033
                                </a>
                            </div>
                            <div className="relative">
                                <Image
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png"
                                    alt="Backflow Prevention Service"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-4">
                                Our Backflow Prevention Services
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-4 bg-[#f5f1e8] p-6 rounded-xl hover:bg-[#e8e4dc] transition-colors">
                                    <CheckCircle className="w-6 h-6 text-[#c9a05f] flex-shrink-0" />
                                    <span className="font-['Open_Sans'] text-[#1a2332] font-semibold">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ContactFormSection />

                <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
                            Need Backflow Testing or Installation?
                        </h2>
                        <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
                            Stay compliant with annual backflow testing and certification. Contact us today!
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
