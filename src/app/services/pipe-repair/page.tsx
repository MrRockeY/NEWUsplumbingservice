import HeaderNavigation from "@/components/sections/header-navigation";
import FooterSection from "@/components/sections/footer-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import Image from "next/image";
import { CheckCircle, Phone, Clock, Shield, Award } from "lucide-react";

export default function PipeRepairPage() {
    const services = [
        "Leak detection and repair",
        "Pipe replacement",
        "Emergency pipe repair",
        "Repiping services",
        "Copper pipe repair",
        "PVC pipe repair",
        "Frozen pipe repair",
        "Burst pipe repair"
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
                                    Expert <span className="text-[#c9a05f]">Pipe Repair</span> Services
                                </h1>
                                <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg md:text-xl leading-relaxed mb-8">
                                    Professional pipe repair and replacement services for all types of plumbing pipes. Fast, reliable repairs available 24/7.
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
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-pipe-5.png"
                                    alt="Pipe Repair Service"
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
                                Our Pipe Repair Services
                            </h2>
                            <p className="font-['Open_Sans'] text-[#4a5568] text-lg max-w-2xl mx-auto">
                                Comprehensive pipe repair solutions for residential and commercial properties.
                            </p>
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

                <section className="py-16 md:py-24 bg-[#f5f1e8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="lg:sticky lg:top-[120px]">
                                <h2 className="font-['Montserrat'] font-bold text-[#1a2332] text-3xl md:text-4xl mb-6">Request Pipe Repair Service</h2>
                                <p className="font-['Open_Sans'] text-[#4a5568] text-lg leading-relaxed mb-8">Professional pipe repair and replacement services for all types of plumbing pipes. Fast, reliable repairs available 24/7.</p>
                                <div className="space-y-6">
                                    {services.slice(0, 3).map((s, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-[#c9a05f] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">{i + 1}</div>
                                            <div>
                                                <h3 className="font-['Montserrat'] font-bold text-[#1a2332] mb-2">{s}</h3>
                                                <p className="font-['Open_Sans'] text-[#4a5568]">We handle {s.toLowerCase()} quickly and correctly.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:min-h-[600px]">
                                <ContactFormSection className="max-w-[640px]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a2332] to-[#2c3e50]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl mb-6">
                            Need Pipe Repair Service?
                        </h2>
                        <p className="font-['Open_Sans'] text-[#e8e4dc] text-lg mb-8 leading-relaxed">
                            Contact us today for professional pipe repair services. Available 24/7 for emergencies.
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
