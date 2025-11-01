import { useEffect, useState } from 'react';

export function useImageLoaded(src: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded;
}

export function useDebouncedCallback(callback: Function, delay: number) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => callback(...args), delay));
  };
}

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0 }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef, options]);

  return isVisible;
}

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

export function useAsyncCallback<T>(
  asyncFunction: AsyncFunction<T>,
  onSuccess?: (data: T) => void,
  onError?: (error: Error) => void
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction(...args);
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred');
      setError(error);
      onError?.(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, data };
}
