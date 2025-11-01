"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Clock,
    Shield,
    Award,
    DollarSign,
    Phone,
    ArrowRight
} from
    'lucide-react';

const HeroSection = () => {
    const trustBadges = [
        { icon: Clock, text: "24/7 Emergency Service" },
        { icon: Shield, text: "Licensed & Insured" },
        { icon: Award, text: "25+ Years Experience" },
        { icon: DollarSign, text: "Fair Pricing" }];


    return (
        <section className="page-fade reveal relative h-screen w-full overflow-hidden bg-[#0d131c] snap-start">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5a174148-bb4f-467b-b662-0dbf5a961f30/generated_images/professional-plumbing-service-business-h-fb9b6ae4-20251031091304.jpg"
                    alt="Premium Plumbing Services"
                    fill
                    className="object-cover object-center scale-105 animate-heroZoom fixed"
                    priority
                    quality={95}
                />

                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d131c]/95 via-[#0d131c]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#ffffff0d] border border-white/20
     rounded-full px-5 py-2 animate-fadeUp">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm tracking-wider">
                        CA LICENSE • BONDED & INSURED
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-white font-bold leading-[1.1] mt-5 text-5xl md:text-6xl
    lg:text-7xl tracking-tight animate-fadeUp delay-100">
                    Your Trusted{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r
      from-[#d3a865] to-[#b98b3c] drop-shadow-lg">
                        Premium
                    </span>
                    <br /> Plumbing Service
                </h1>

                {/* Subtitle */}
                <p className="text-[#d9d5ca] text-lg md:text-xl font-light mt-6
    max-w-2xl animate-fadeUp delay-200">
                    Family-owned & operated for 25+ years, providing unmatched professionalism
                    and care in every service.
                </p>

                {/* Badges */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 animate-fadeUp delay-300">
                    {trustBadges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-[#ffffff0d] rounded-xl px-4 py-3
          border border-white/15 backdrop-blur-sm hover:bg-[#ffffff1f]
          hover:scale-[1.03] transition-all cursor-default"
                        >
                            <badge.icon className="w-6 h-6 text-[#c9a05f]" />
                            <span className="text-white text-sm font-medium">{badge.text}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-10 animate-fadeUp delay-500">
                    <a
                        href="tel:909-623-0033"
                        className="group flex items-center gap-3 bg-[#c9a05f] text-[#0d131c]
        font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl
        hover:scale-105 transition-all"
                    >
                        <Phone className="w-5 h-5 group-hover:rotate-12 transition" />
                        Call Now: 909-623-0033
                    </a>

                    <Link
                        href="/services"
                        className="group flex items-center gap-3 border-2 border-white/30
        text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0d131c]
        hover:border-white hover:scale-105 transition-all"
                    >
                        View All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </Link>
                </div>

            </div>
        </section>);

};

export default HeroSection;
