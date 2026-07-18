import { useState, useCallback } from "react";

/**
 * Custom hook to manage Lightbox state and navigation.
 * 
 * @param {Array} items - The array of items (e.g., images) to navigate through.
 * @returns {Object} Lightbox state and handlers.
 */
export function useLightbox(items = []) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : items.length - 1;
    });
  }, [items.length]);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev < items.length - 1 ? prev + 1 : 0;
    });
  }, [items.length]);

  return {
    selectedIndex,
    isOpen: selectedIndex !== null,
    openLightbox,
    closeLightbox,
    showPrev,
    showNext
  };
}
