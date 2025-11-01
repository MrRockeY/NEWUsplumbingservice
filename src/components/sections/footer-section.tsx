"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Facebook, Twitter, BadgeCheck } from "lucide-react";

const serviceLinks = [
    { name: "Drain Cleaning", href: "/services/drain-cleaning" },
    { name: "Pipe Repair", href: "/services/pipe-repair" },
    { name: "Sinks & Faucets", href: "/services/sinks-faucets" },
    { name: "Garbage Disposal", href: "/services/garbage-disposal-service-installations" },
    { name: "Backflow Prevention", href: "/services/backflow-prevention" },
    { name: "Bathtubs & Showers", href: "/services/bathtubs-showers" },
    { name: "Leaky Toilets", href: "/services/leaky-toilets" },
    { name: "Slab Leak Detection", href: "/services/slab-leak-detection" },
    { name: "Water Heater Service", href: "/services/water-heater-service-repairs" }
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
];

const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/USAPlumbingService", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/USA_Plumbing", icon: Twitter },
    { name: "badge", href: "http://www.yelp.com/biz/usa-plumbing-service-rancho-cucamonga", icon: BadgeCheck }
];

const bottomLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Contact", href: "/contact" }
];

export default function FooterSection() {
    return (
        <footer className="bg-gradient-to-b from-[#1a2332] to-[#0f1419] text-[#faf8f5] font-sans">
            {/* ✅ Schema optimized for SEO */}
            <div itemScope itemType="http://schema.org/LocalBusiness" className="sr-only">
                <meta itemProp="name" content="USA Plumbing Service" />
                <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <meta itemProp="streetAddress" content="12729 Jessie Ct" />
                    <meta itemProp="addressLocality" content="Rancho Cucamonga" />
                    <meta itemProp="addressRegion" content="CA" />
                    <meta itemProp="postalCode" content="91739" />
                </div>
                <meta itemProp="telephone" content="909-623-0033" />
                <link itemProp="url" href="https://www.usaplumbingservice.com" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* ✅ Company */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/logo-2.png"
                                alt="USA Plumbing Service"
                                width={200}
                                height={85}
                                className="w-[140px] lg:w-[180px] h-auto brightness-0 invert"
                                priority
                            />
                        </Link>

                        <p className="text-[#d1d5db] text-sm mb-6">
                            Family-owned plumbing services for 25+ years. Licensed & Insured.
                        </p>

                        <div className="space-y-3">
                            <InfoItem icon={<Clock />} text="24/7 Emergency Service" />
                            <InfoItem icon={<span className="text-[#c9a05f] font-bold text-xs">✓</span>} text="CA License #961844" />
                        </div>
                    </div>

                    {/* ✅ Quick Links */}
                    <FooterColumn title="Quick Links" links={quickLinks} />

                    {/* ✅ Services */}
                    <FooterColumn title="Our Services" links={serviceLinks.slice(0, 6)}>
                        <Link href="/services" className="text-[#c9a05f] text-sm font-semibold block mt-4 hover:text-[#b8860b]">
                            View All Services →
                        </Link>
                    </FooterColumn>

                    {/* ✅ Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-[#c9a05f] mb-6">Get in Touch</h3>

                        <ContactItem href="tel:909-623-0033" icon={<Phone />} label="Call Us" value="909-623-0033" />
                        <ContactItem
                            href="mailto:contact@usaplumbingservice.com"
                            icon={<Mail />}
                            label="Email Us"
                            value="contact@usaplumbingservice.com"
                        />

                        <div className="flex items-start gap-3 mt-4">
                            <IconWrapper><MapPin /></IconWrapper>
                            <p className="text-sm text-[#d1d5db]">Rancho Cucamonga, CA</p>
                        </div>

                        <p className="text-xs text-[#9ca3af] mt-6 mb-3">Follow Us</p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-[#2c3e50] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#c9a05f]"
                                    >
                                        <Icon className="w-5 h-5 text-[#faf8f5]" />
                                    </a>
                                );
                            })}
                        </div>

                    </div>
                </div>

                <div className="border-t border-[#2c3e50] my-10"></div>

                {/* ✅ Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
                    <p className="text-[#9ca3af] text-center md:text-left">
                        © {new Date().getFullYear()} USA Plumbing Service
                        <span className="hidden md:inline"> | </span>
                        <br className="md:hidden" />
                        {bottomLinks.map((l, i) => (
                            <Link key={l.name} href={l.href} className="mx-2 hover:text-[#c9a05f]">
                                {l.name}
                                {i < bottomLinks.length - 1 && " •"}
                            </Link>
                        ))}
                    </p>
                    <p className="text-[#9ca3af]">
                        Website by{" "}
                        <a className="text-[#c9a05f] hover:text-[#b8860b]" href="https://mrrockey-com.web.app/" target="_blank">
                            Mr RockeY
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ✅ Small, reusable components */

function InfoItem({ icon, text }: any) {
    return (
        <div className="flex items-center gap-2 text-sm">
            <IconWrapper>{icon}</IconWrapper>
            <span className="text-[#e8e4dc]">{text}</span>
        </div>
    );
}

function FooterColumn({ title, links, children }: any) {
    return (
        <div>
            <h3 className="text-lg font-bold text-[#c9a05f] mb-6">{title}</h3>
            <ul className="space-y-3">
                {links.map((l: any) => (
                    <li key={l.href}>
                        <Link href={l.href} className="text-[#d1d5db] hover:text-[#c9a05f] text-sm transition-colors">
                            {l.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    );
}

function ContactItem({ href, icon, label, value }: any) {
    return (
        <a href={href} className="flex items-start gap-3 mb-4 group hover:translate-x-1 transition-transform">
            <IconWrapper>{icon}</IconWrapper>
            <div>
                <p className="text-xs text-[#9ca3af]">{label}</p>
                <p className="text-sm text-[#faf8f5] font-semibold group-hover:text-[#c9a05f]">{value}</p>
            </div>
        </a>
    );
}

function IconWrapper({ children }: any) {
    return (
        <div className="w-10 h-10 rounded-lg bg-[#c9a05f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a05f]/30 transition-colors">
            <div className="text-[#c9a05f] w-5 h-5">{children}</div>
        </div>
    );
}
