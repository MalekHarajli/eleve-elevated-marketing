// Performance optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    { href: '/fonts/inter-variable.woff2', as: 'font', type: 'font/woff2' },
  ];

  fontPreloads.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Resource hints for next navigation
export const prefetchRouteResources = (routes: string[]) => {
  routes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};

// Optimize images with WebP fallback
export const getOptimizedImageSrc = (src: string, format: 'webp' | 'avif' = 'webp') => {
  if (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png')) {
    return src.replace(/\.(jpg|jpeg|png)$/, `.${format}`);
  }
  return src;
};

// Debounce utility for performance-sensitive operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Critical CSS injection for above-the-fold content
export const injectCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};