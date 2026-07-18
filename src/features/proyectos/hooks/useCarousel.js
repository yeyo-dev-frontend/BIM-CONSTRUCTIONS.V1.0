import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing a simple auto-advancing carousel.
 * 
 * @param {number} totalItems - Total number of items in the carousel.
 * @param {number} intervalMs - Autoplay interval in milliseconds.
 * @returns {{ currentIndex: number, next: () => void, prev: () => void, goTo: (index: number) => void }}
 */
export function useCarousel(totalItems, intervalMs = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  }, [totalItems]);

  useEffect(() => {
    if (totalItems <= 1) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [next, intervalMs, totalItems]);

  return { currentIndex, next, prev, goTo };
}
