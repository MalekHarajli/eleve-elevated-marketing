import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  srcSet?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  onLoad,
  onError,
  sizes,
  srcSet
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Create intersection observer for lazy loading optimization
    if (loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              img.src = src;
              observer.unobserve(img);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      
      observer.observe(img);
      return () => observer.disconnect();
    }
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageProps = {
    ref: imgRef,
    alt,
    className: `${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    loading,
    onLoad: handleLoad,
    onError: handleError,
    ...(width && { width }),
    ...(height && { height }),
    ...(fetchPriority !== 'auto' && { fetchPriority }),
    ...(sizes && { sizes }),
    ...(srcSet && { srcSet }),
  };

  if (hasError) {
    return (
      <div className={`${className} bg-muted flex items-center justify-center text-muted-foreground`}>
        Failed to load image
      </div>
    );
  }

  return loading === 'eager' ? (
    <img src={src} {...imageProps} />
  ) : (
    <img {...imageProps} />
  );
};

export default OptimizedImage;