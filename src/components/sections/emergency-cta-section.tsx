"use client";

import { Phone, Clock, Wrench } from "lucide-react";

export const EmergencyCtaSection = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-[#1a2332] via-[#2c3e50] to-[#1a2332] py-16 md:py-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#c9a05f] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-[#c9a05f] rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-[#c9a05f] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

                    {/* Left Section - Main CTA */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#c9a05f]/20 backdrop-blur-sm border border-[#c9a05f]/30 rounded-full px-4 py-2 mb-6">
                            <Clock className="w-4 h-4 text-[#c9a05f] animate-pulse" />
                            <span className="text-[#c9a05f] font-semibold text-sm tracking-wide">
                                24/7 EMERGENCY SERVICE
                            </span>
                        </div>

                        <h2 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                            Need Immediate<br className="hidden sm:block" />
                            <span className="text-[#c9a05f]">Plumbing Help?</span>
                        </h2>

                        <p className="font-['Open_Sans'] text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                            Our expert technicians are available around the clock to handle any plumbing emergency. Fast response guaranteed!
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#c9a05f]/20 flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-[#c9a05f]" />
                                </div>
                                <span className="text-[#e8e4dc] text-sm font-semibold">Expert Technicians</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#c9a05f]/20 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-[#c9a05f]" />
                                </div>
                                <span className="text-[#e8e4dc] text-sm font-semibold">Rapid Response</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Call Button */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
                        <div className="bg-white/10 backdrop-blur-md border-2 border-[#c9a05f]/30 rounded-2xl p-8 hover:border-[#c9a05f] transition-all duration-300 hover:scale-105 hover:shadow-2xl !w-96 !h-full !max-w-sm !text-[35px]">
                            <p className="text-center font-['Montserrat'] text-[#e8e4dc] text-sm font-semibold mb-4 tracking-wide">
                                CALL US NOW
                            </p>

                            <a
                                href="tel:909-623-0033"
                                className="group flex items-center justify-center gap-3 bg-[#c9a05f] text-[#1a2332] font-['Montserrat'] font-bold text-2xl py-6 px-8 rounded-xl transition-all duration-300 hover:bg-[#b8860b] hover:scale-105 hover:shadow-2xl mb-4 md:!text-xl">

                                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                                909-623-0033
                            </a>

                            <p className="text-center text-[#d1d5db] text-xs">
                                Available 24/7 • Licensed & Insured
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default EmergencyCtaSection;
