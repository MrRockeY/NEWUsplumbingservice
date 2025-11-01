import Image, { ImageProps } from 'next/image';
import { useImageLoaded } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete' | 'onLoad'> {
    aspectRatio?: number;
    lowQualityPlaceholder?: boolean;
}

export function OptimizedImage({
    src,
    alt,
    className,
    aspectRatio,
    lowQualityPlaceholder = true,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const loaded = useImageLoaded(typeof src === 'string' ? src : '');

    return (
        <div
            className={cn(
                'relative overflow-hidden bg-gray-100',
                aspectRatio && `aspect-[${aspectRatio}]`,
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                className={cn(
                    'duration-700 ease-in-out',
                    isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-2xl',
                    lowQualityPlaceholder && !loaded ? 'grayscale' : 'grayscale-0'
                )}
                onLoadingComplete={() => setIsLoaded(true)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={70}
                {...props}
            />
        </div>
    );
}
