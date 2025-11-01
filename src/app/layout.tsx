import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import SmoothScroll from "@/components/sections/SmoothScroll";


export const metadata: Metadata = {
    title: "USA Plumbing Service",
    description: "Expert plumbing solutions near you",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased bg-white">
                {/* Render AFTER layout mounts (avoid blocking initial render) */}
                <SmoothScroll />

                <main>{children}</main>

                {/* Non-blocking scripts */}
                <ErrorReporter />

                <Script
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
                    strategy="afterInteractive"
                    data-target-origin="*"
                />

                <VisualEditsMessenger />
            </body>
        </html>
    );
}
