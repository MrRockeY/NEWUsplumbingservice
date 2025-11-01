"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    icon:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-drain-4.png",
    alt: "Drain Cleaning",
    title: "Drain Cleaning",
    description:
      "Professional unclogging solutions keeping your drains flowing clean + fast.",
    ctaText: "Unclog My Drain",
    ctaLink: "/services/drain-cleaning",
  },
  {
    icon:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-pipe-5.png",
    alt: "Pipe Repair",
    title: "Pipe Repair",
    description: "Repairing leaks and breaks with durable, long-lasting materials.",
    ctaText: "Repair My Pipe",
    ctaLink: "/services/pipe-repair",
  },
  {
    icon:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-garbage-6.png",
    alt: "Garbage Disposal",
    title: "Garbage Disposal",
    description: "Quieter, cleaner & more efficient disposals installed by experts.",
    ctaText: "Learn More",
    ctaLink: "/services/garbage-disposal-service-installations",
  },
  {
    icon:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/dot-services-7.png",
    alt: "All Plumbing Services",
    title: "All Services",
    description:
      "We handle all water, sewer & gas line needs with premium quality.",
    ctaText: "Explore Everything",
    ctaLink: "/services",
  },
];

export default function ServicesGridSection() {
  return (
    <section
      aria-labelledby="services-title"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(180deg, var(--navy-900) 0%, rgba(17,41,53,0.95) 60%, #0b1b26 100%)",
      }}
    >
      {/* faint circular highlights (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full opacity-6"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(201,160,95,0.06), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-6">
        <motion.h2
          id="services-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center font-extrabold tracking-tight text-white md:text-[3.25rem] text-[2.6rem] stroked"
        >
          <span style={{ WebkitTextStroke: "1.6px rgba(0,0,0,0.18)" }} className="inline-block">
            Need Immediate
          </span>{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, var(--gold) 0%, rgba(255,224,150,0.92) 60%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="inline-block"
          >
            Plumbing Help?
          </span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ translateY: -6, scale: 1.02, rotateX: 1.5 }}
              className="relative z-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[rgba(201,160,95,0.2)] bg-[rgba(255,255,255,0.02)] p-7 text-center shadow-[0_10px_30px_rgba(2,6,23,0.5)] backdrop-blur-md transition-all"
              role="article"
              aria-label={s.title}
            >
              {/* subtle gold ring on top-left (decorative) */}
              <div
                aria-hidden
                className="absolute -top-5 -left-6 h-24 w-24 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(201,160,95,0.08), transparent 45%)",
                }}
              />

              <Image
                src={s.icon}
                alt={s.alt}
                width={84}
                height={84}
                className="mb-1"
              />

              <h3 className="text-lg font-semibold text-white">
                <Link href={s.ctaLink} className="hover:text-var(--gold)">
                  {s.title}
                </Link>
              </h3>

              <p className="mb-3 max-w-[22rem] text-[15px] leading-relaxed text-white/70">
                {s.description}
              </p>

              <Link
                href={s.ctaLink}
                className="mt-3 inline-block w-full rounded-lg border border-[rgba(201,160,95,0.18)] bg-[linear-gradient(180deg,var(--gold),var(--gold-dark))] px-4 py-3 text-sm font-semibold text-black transition-transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(201,160,95,0.18)]"
                style={{ boxShadow: "0 6px 18px rgba(201,160,95,0.14)" }}
                aria-label={`${s.ctaText} — ${s.title}`}
              >
                {s.ctaText}
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-12 max-w-[900px] text-center text-[15.5px] text-white/60"
        >
          Our certified technicians are available 24/7. Fast response, fair pricing,
          and workmanship you can trust.
        </motion.p>
      </div>
    </section>
  );
}
