"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Shield,
    CheckCircle,
    Award,
    Users,
    ArrowRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { spaceGrotesk, inter } from "@/lib/fonts";

interface TrustIndicator {
    icon: LucideIcon;
    text: string;
}

const trustIndicators: TrustIndicator[] = [
    { icon: Shield, text: "Licensed (CA #961844)" },
    { icon: CheckCircle, text: "Bonded & Insured" },
    { icon: Award, text: "25+ Years Experience" },
    { icon: Users, text: "Family Owned & Operated" }];


export default function AboutPreviewSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
                    <div className="lg:col-span-7">
                        <h2
                            className={`${spaceGrotesk.className} mb-6 font-bold leading-tight tracking-[-0.02em] text-[#1a2332] text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]`}>

                            Your Trusted Family Owned & Operated Plumber for Over 25 years
                        </h2>
                        <p
                            className={`!font-(family-name:--font-roboto-condensed) ${inter.className} max-w-[650px] text-[1.0625rem] leading-[1.7] tracking-[-0.01em] text-[#4a5568]`}>

                            With a high level of quality workmanship, courtesy, and customer
                            service at a great price, our complete plumbing & rooter service
                            leaves all other plumbers in the dust. Are you looking for a
                            plumber you can trust to diagnose your plumbing problems
                            accurately and fix them the first time? Look no further than USA
                            Plumbing Service. Our family owned and operated company will treat
                            you like part of the family, delivering superior service and an
                            excellent value on even the most complicated plumbing jobs. You
                            can call us any time, day or night, for a fast response to your
                            plumbing needs. We can handle everything from a dripping faucet to
                            a gushing water main or a backed up drain. We are honest and
                            reliable and always honor any price we quote you with no hidden
                            fees.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4 lg:mt-10">
                            {trustIndicators.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <Icon
                                            className="text-[#c9a05f]"
                                            size={24}
                                            aria-hidden="true" />

                                        <span
                                            className={`${inter.className} text-[0.9375rem] font-semibold text-[#1a2332]`}>

                                            {item.text}
                                        </span>
                                    </div>);

                            })}
                        </div>

                        <Link
                            href="/about"
                            className={`${spaceGrotesk.className} group mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-[#c9a05f] bg-transparent px-8 py-3 text-base font-semibold text-[#c9a05f] transition-all duration-200 ease-in-out hover:bg-[#c9a05f] hover:text-[#1a2332] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a05f] focus-visible:ring-offset-2 lg:mt-10`}>

                            Learn More About Us
                            <ArrowRight
                                className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                                size={18} />

                        </Link>
                    </div>
                    <div className="mt-10 w-full lg:col-span-5 lg:mt-0">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/usa-plumbing-truck-3.jpg"
                            alt="USA Plumbing Service - Professional Plumbing Truck"
                            width={1200}
                            height={867}
                            className="h-auto w-full rounded-2xl object-cover object-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] !shadow-[0_32px_48px_-8px_rgba(0,0,0,0.3),0_16px_24px_-8px_rgba(0,0,0,0.2)]" />

                    </div>
                </div>
            </div>
        </section>);
}
