"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

type NavLink = {
    href: string;
    label: string;
};

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about/", label: "About" },
    { href: "/testimonials/", label: "Testimonials" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
];

const allServicesLinks: NavLink[] = [
    { href: "/services/drain-cleaning/", label: "Drain Cleaning" },
    { href: "/services/slab-leak-detection/", label: "Slab Leak Detection" },
    { href: "/services/water-heater-service-repairs/", label: "Water Heater Service" },
    { href: "/services/garbage-disposal-service-installations/", label: "Garbage Disposal" },
    { href: "/services/leaky-toilets/", label: "Leaky Toilets" },
    { href: "/services/sinks-faucets/", label: "Sinks & Faucets" },
    { href: "/services/bathtubs-showers/", label: "Bathtubs & Showers" },
    { href: "/services/pipe-repair/", label: "Pipe Repair" },
    { href: "/services/backflow-prevention/", label: "Backflow Prevention" },
];

const HeaderNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    // ✅ GPU-friendly passive scroll listener
    useEffect(() => {
        const handleScroll = () =>
            setIsScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ No forced reflows — CSS toggle instead of JS styles
    useEffect(() => {
        document.documentElement.classList.toggle("overflow-hidden", isMenuOpen);
    }, [isMenuOpen]);

    // ✅ Memoized render reduces re-renders
    const renderNavLinks = useCallback(
        (isMobile = false) => (
            <>
                {navLinks.map((link) => (
                    <Link
                        prefetch
                        key={link.href}
                        href={link.href}
                        onClick={() => isMobile && setIsMenuOpen(false)}
                        className={`${isMobile
                                ? "block py-4 text-lg font-semibold"
                                : "text-[15px] font-semibold tracking-[-0.01em] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#c9a05f] after:transition-all after:duration-300 hover:after:w-full"
                            } transition-colors duration-200 hover:text-[#c9a05f] ${pathname === link.href
                                ? "text-[#c9a05f]"
                                : isMobile
                                    ? "text-[#1a2332]"
                                    : "text-[#faf8f5]"
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}

                {/* Desktop Services Dropdown */}
                {!isMobile && (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link
                            prefetch
                            href="/services/"
                            className={`flex items-center gap-1 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 hover:text-[#c9a05f] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#c9a05f] after:transition-all after:duration-300 hover:after:w-full ${pathname.startsWith("/services/")
                                    ? "text-[#c9a05f]"
                                    : "text-[#faf8f5]"
                                }`}
                        >
                            Services
                        </Link>

                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-200 ${isServicesOpen
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-1"
                                }`}
                        >
                            <div
                                className="bg-white rounded-xl shadow-2xl border border-[#e8e4dc] overflow-hidden"
                                style={{ width: "600px" }}
                            >
                                <div className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] px-6 py-4">
                                    <h3 className="text-[#c9a05f] font-bold text-lg">
                                        Our Services
                                    </h3>
                                    <p className="text-[#e8e4dc] text-sm mt-1">
                                        Professional plumbing solutions for every need
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-4 gap-y-2 p-6">
                                    {allServicesLinks.map((service) => (
                                        <Link
                                            prefetch
                                            key={service.href}
                                            href={service.href}
                                            className="group flex items-start gap-2 px-3 py-2.5 rounded-lg hover:bg-[#f5f1e8] transition-all duration-150"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#c9a05f] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="text-[#2d3748] text-[14px] font-medium group-hover:text-[#c9a05f] transition-colors !no-underline !text-left !not-italic">
                                                {service.label}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="bg-[#f5f1e8] px-6 py-4 border-t border-[#e8e4dc]">
                                    <Link
                                        prefetch
                                        href="/services/"
                                        className="text-[#c9a05f] font-semibold text-sm hover:text-[#b8860b] transition-colors inline-flex items-center gap-2"
                                    >
                                        View All Services →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Services Accordion */}
                {isMobile && (
                    <>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("mobile-services-menu")
                                    ?.classList.toggle("hidden")
                            }
                            className="flex items-center justify-between py-4 text-lg font-semibold cursor-pointer hover:text-[#c9a05f] text-[#1a2332] w-full text-left"
                        >
                            Services
                            <span className="text-[#c9a05f]">+</span>
                        </button>
                        <div id="mobile-services-menu" className="hidden pl-4 space-y-2">
                            {allServicesLinks.map((service) => (
                                <Link
                                    prefetch
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-base hover:text-[#c9a05f] text-[#4a5568]"
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </>
        ),
        [pathname, isMenuOpen, isServicesOpen]
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] bg-[#1a2332] transition-all duration-200 font-['Montserrat'] ${isScrolled ? "shadow-2xl" : "shadow-lg"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[80px] lg:h-[90px]">
                    <div className="flex-shrink-0">
                        <Link prefetch href="/" aria-label="USA Plumbing Service - Homepage">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/logo-2.png"
                                alt="USA Plumbing Service"
                                width={200}
                                height={85}
                                className="w-[140px] lg:w-[180px] h-auto brightness-0 invert"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 font-['Montserrat']">
                        {renderNavLinks()}
                    </nav>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <a
                            href="tel:909-623-0033"
                            className="flex items-center gap-2 whitespace-nowrap bg-[#c9a05f] text-[#1a2332] font-bold text-sm lg:text-base py-2.5 px-4 sm:px-6 lg:px-7 rounded-lg transition-all duration-200 hover:bg-[#b8860b] hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <Phone size={18} />
                            <span className="hidden sm:inline">Call: </span>
                            <span className="font-bold">909-623-0033</span>
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2 rounded-md text-[#faf8f5] hover:bg-[#2c3e50] transition-colors"
                            aria-label="Open navigation menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[1001] bg-[#faf8f5] lg:hidden transition-transform duration-200 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 bg-[#1a2332] shadow-lg">
                    <Link prefetch href="/" onClick={() => setIsMenuOpen(false)}>
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/logo-2.png"
                            alt="USA Plumbing Service"
                            width={160}
                            height={68}
                            className="brightness-0 invert"
                        />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-md text-[#faf8f5] hover:bg-[#2c3e50] transition-colors"
                        aria-label="Close navigation menu"
                    >
                        <X size={28} />
                    </button>
                </div>
                <nav className="h-[calc(100vh-100px)] px-6 py-6 overflow-y-auto font-['Montserrat']">
                    {renderNavLinks(true)}
                    <div className="mt-8 pt-6 border-t border-[#d4cfc3]">
                        <a
                            href="tel:909-623-0033"
                            className="flex items-center justify-center gap-2 bg-[#c9a05f] text-[#1a2332] font-bold text-base py-4 px-6 rounded-lg shadow-lg"
                        >
                            <Phone size={20} />
                            Call: 909-623-0033
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderNavigation;
