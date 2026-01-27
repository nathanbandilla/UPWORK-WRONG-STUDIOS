import { useEffect, useState } from "react";

type SlideStyle = {
  transform: string;
  opacity: number;
  transition: string;
};

export function useScrollSlide() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position once and reuse in any section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideToLeft = (index: number, baseDelay = 0): SlideStyle => {
    const triggerPoint = 700 + index * 100;
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 100));

    return {
      transform: `translateX(${500 - progress * 500}px)`,
      opacity: progress,
      transition: `all 1s ease-out ${baseDelay}ms`,
    };
  };

  const slideToRight = (index: number, baseDelay = 0): SlideStyle => {
    const triggerPoint = 700 + index * 100;
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 100));

    return {
      transform: `translateX(${-500 - progress * -500}px)`,
      opacity: progress,
      transition: `all 1s ease-out ${baseDelay}ms`,
    };
  };

  return { slideToLeft, slideToRight };
}

