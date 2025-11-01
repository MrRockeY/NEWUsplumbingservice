'use client';

import { OptimizedImage } from "@/components/ui/optimized-image";

export function NavLogo({ className = "" }: { className?: string }) {
    return (
        <OptimizedImage
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a174148-bb4f-467b-b662-0dbf5a961f30-usaplumbingservice-com/assets/images/logo-white-transparent.png"
            alt="USA Plumbing Service"
            width={180}
            height={50}
            className={className || "h-[45px] w-auto brightness-0 invert"}
            priority
            lowQualityPlaceholder
        />
    );
}
