import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import SmoothScroll from "@/components/sections/SmoothScroll";
import { Montserrat, Open_Sans } from "next/font/google";


const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
});

export const metadata: Metadata = {
    title: "USA Plumbing Service",
    description: "Expert plumbing solutions near you",
    metadataBase: new URL('https://usaplumbingservice.com'),
    other: {
        'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" crossOrigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#c9a05f" />
            </head>
            <body className="antialiased bg-white">
                {/* Render AFTER layout mounts (avoid blocking initial render) */}
                <SmoothScroll />

                <main>{children}</main>

                {/* Non-blocking scripts */}
                <ErrorReporter />

                <Script
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
                    strategy="lazyOnload"
                    data-target-origin="*"
                />

                <VisualEditsMessenger />
            </body>
        </html>
    );
}
