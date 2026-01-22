import React from "react";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Hook for fade-in on scroll
function useFadeInOnScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Count-up animation component
function CountUpNumber({ 
  value, 
  suffix = '', 
  duration = 2000,
  isVisible = false 
}: { 
  value: string; 
  suffix?: string;
  duration?: number;
  isVisible?: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  // Parse the value (e.g., "1.5B" -> 1.5 billion, "1M" -> 1 million, "150M" -> 150 million)
  const parseValue = (val: string): number => {
    const numStr = val.replace(/[^0-9.]/g, '');
    const num = parseFloat(numStr);
    
    if (val.includes('B') || val.includes('b')) {
      return num * 1000000000; // billions
    } else if (val.includes('M') || val.includes('m')) {
      return num * 1000000; // millions
    } else if (val.includes('K') || val.includes('k')) {
      return num * 1000; // thousands
    }
    return num;
  };

  // Format the number back to display format
  const formatNumber = (num: number, originalValue: string): string => {
    if (originalValue.includes('B') || originalValue.includes('b')) {
      const billions = num / 1000000000;
      return billions % 1 === 0 ? `${billions}B` : `${billions.toFixed(1)}B`;
    } else if (originalValue.includes('M') || originalValue.includes('m')) {
      const millions = num / 1000000;
      return millions % 1 === 0 ? `${millions}M` : `${millions.toFixed(1)}M`;
    } else if (originalValue.includes('K') || originalValue.includes('k')) {
      const thousands = num / 1000;
      return thousands % 1 === 0 ? `${thousands}K` : `${thousands.toFixed(1)}K`;
    }
    return Math.floor(num).toLocaleString();
  };

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const targetValue = parseValue(value);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (targetValue - startValue) * easeOut;
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const displayValue = isVisible ? formatNumber(count, value) : '0';
  
  return <>{displayValue}{suffix}</>;
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Logo Banner */}
      <LogoBanner />

      {/* Tagline Section */}
      <TaglineSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Work Portfolio Section */}
      <WorkSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Story Section */}
      <StorySection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}

function HeroSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  return (   
  <section ref={ref} className={`relative pt-[200px] overflow-hidden fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Gradient Overlays */}
      <div 
        className="absolute top-[787px] left-[42px] w-[482px] h-[474px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.91) 37.98%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div 
        className="absolute top-[787px] right-[42px] w-[482px] h-[474px] pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.91) 37.98%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-8">
        <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
          <div className="h-7 w-[142px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">         
            <span className="h-9 ml-1 font-display text-[24.77px] tracking-wider uppercase">WRONG STUDIOS</span>          
          </div>
         <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
        </div>

        {/* Main Heading */}
        <div className="relative text-center mb-12">
          <h1 className="font-display text-[140px] md:text-[194px] leading-[170px] bg-gradient-to-b from-white/50 to-white/100 text-transparent bg-clip-text">
            DOING IT WRONG
          </h1>
          <p className="font-display text-[64px] leading-[72px] uppercase">
            Never Looked This Right.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-20">
          <div className="text-center">
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">
              <CountUpNumber value="1.5B" suffix="+" isVisible={isVisible} />
            </div>
            <div className="text-[18px] leading-[20px] text-white/90 lowercase">
              views in<br />viral videos
            </div>
          </div>
          <div className="w-px h-[103px] bg-white/30" />
          <div className="text-center">
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">
              <CountUpNumber value="1M" suffix="+" isVisible={isVisible} />
            </div>
            <div className="text-[18px] leading-[20px] text-white/90 lowercase">
              followers<br />accumulated
            </div>
          </div>
          <div className="w-px h-[103px] bg-white/30" />
          <div className="text-center">
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">
              <CountUpNumber value="150M" isVisible={isVisible} />
            </div>
            <div className="text-[18px] leading-[20px] text-white/90 lowercase">
              overall<br />likes
            </div>
          </div>
        </div>

 

      </div>

             {/* Left and Right Images */}
        <div className="flex justify-center gap-32 -mt-32">
          <img 
            src="/vector_left.png" 
            alt="" 
            className="h-auto"
          />
          <img 
            src="/vector_right.png" 
            alt="" 
            className="h-auto"
          />
        </div>

      {/* Phone Mockups Slideshow Section */}
      <PhoneSlideshow />
    </section>
  );
}

// Video Popup Modal
const VideoModal = ({ videoSrc, isOpen, onClose }: { videoSrc: string; isOpen: boolean; onClose: () => void }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          loop
          playsInline
          className="w-full h-full rounded-2xl shadow-2xl"
          style={{ maxHeight: '90vh' }}
        />
      </div>
    </div>
  );
};

// Memoized Phone Thumbnail Component
const PhoneThumbnail = React.memo(({
  thumbnailSrc,
  videoSrc,
  motion,
  onClick,
  shouldPreload = false,
}: {
  thumbnailSrc: string;
  videoSrc: string;
  motion: any;
  onClick: () => void;
  shouldPreload?: boolean;
}) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Auto-play video for center position
  React.useEffect(() => {
    if (motion.center && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle autoplay failure silently
        });
      }
    } else if (!motion.center && videoRef.current) {
      videoRef.current.pause();
    }
  }, [motion.center]);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent any click events on center phone
    if (motion.center) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // Only allow clicking on non-center phones
    //onClick();
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: `${motion.width}px`,
        height: `${motion.height}px`,
        opacity: motion.opacity,
        zIndex: motion.zIndex,
        transform: `
          translate(-50%, -50%)
          translateX(${motion.x}px)
          rotate(${motion.rotate}deg)
          scale(${motion.scale})
        `,
        transformOrigin: 'center center',
        transition: `
          transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 500ms ease,
          width 700ms cubic-bezier(0.22, 1, 0.36, 1),
          height 700ms cubic-bezier(0.22, 1, 0.36, 1)
        `,
        willChange: 'transform, opacity',
      }}
      onClick={handleClick}
    >
      {/* Content Layer */}
      <div
        className={`
          w-full h-full
          flex items-center justify-center
          ${motion.center ? '' : 'cursor-pointer'}
          transition-all duration-300 ease-out
          ${motion.center ? '' : 'hover:-translate-y-3 hover:scale-[1.04]'}
          ${motion.center ? '' : 'hover:shadow-[0_30px_80px_rgba(3,233,244,0.35)]'}
        `}
      >
        {motion.center ? (
          // Center phone: Show autoplay video
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full border-4 border-white/60 rounded-[28px] shadow-[0_0_50px_rgba(3,233,244,0.5)]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          />
        ) : (
          // Other phones: Show thumbnail
          <img
            src={thumbnailSrc}
            className="h-full object-fill border-4 border-white/50 rounded-[24px] transition-all duration-300 hover:border-[#03E9F4]"
            draggable={false}
            alt="Video thumbnail"
          />
        )}
      </div>
    </div>
  );
});

PhoneThumbnail.displayName = 'PhoneThumbnail';

function PhoneSlideshow() {

  const [currentIndex, setCurrentIndex] = React.useState(3);
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const isTransitioningRef = React.useRef(false);

  const totalVideos = 8;

  const handlePrevious = React.useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalVideos - 1 : prev - 1));

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 700);
  }, []);

  const handleNext = React.useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setDirection(1);
    setCurrentIndex((prev) => (prev === totalVideos - 1 ? 0 : prev + 1));

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  }, []);

  // Swipe gesture handling
  const touchStartRef = React.useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = React.useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distanceX = touchStartRef.current.x - touchEndRef.current.x;
    const distanceY = touchStartRef.current.y - touchEndRef.current.y;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Only handle horizontal swipes, ignore vertical ones
    if (isVerticalSwipe) return;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset touch refs
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [handleNext, handlePrevious]);

  // Video sources and their thumbnails
  const mediaData = React.useMemo(() => [
    { video: "/vid_compressed/vid_1.webm", thumb: "/thumbnails/thumb_1.jpg" },
    { video: "/vid_compressed/vid_2.webm", thumb: "/thumbnails/thumb_2.jpg" },
    { video: "/vid_compressed/vid_3.webm", thumb: "/thumbnails/thumb_3.jpg" },
    { video: "/vid_compressed/vid_4.webm", thumb: "/thumbnails/thumb_4.jpg" },
    { video: "/vid_compressed/vid_5.webm", thumb: "/thumbnails/thumb_5.jpg" },
    { video: "/vid_compressed/vid_6.webm", thumb: "/thumbnails/thumb_6.jpg" },
    { video: "/vid_compressed/vid_7.webm", thumb: "/thumbnails/thumb_7.jpg" },
    { video: "/vid_compressed/vid_8.webm", thumb: "/thumbnails/thumb_8.jpg" }
  ], []);

  const getVideoIndex = React.useCallback((offset: number) => {
    return (currentIndex + offset + totalVideos) % totalVideos;
  }, [currentIndex]);

  const getPositionStyle = (delta: number) => {
    const abs = Math.abs(delta);

    if (abs > 3) {
      return {
        opacity: 0,
        pointerEvents: 'none',
      };
    }

    return {
      x: delta * 220,
      scale: 1 - abs * 0.08,
      rotate: delta * 6,
      opacity: abs >= 3 ? 0.1 : 1 - abs * 0.25,
      zIndex: 10 - abs,
      width: 360 - abs * 40,
      height: 540 - abs * 60,
      center: abs < 0.5, // Center position when delta is close to 0
    };
  };

  return (
    <>
      <div className="relative max-w-[1440px] mx-auto px-8 pb-20">
       
        {/* Position Tracker */}
        <div className="absolute left-8 md:left-12 top-8 z-20 flex items-center gap-2 -mt-5 md:mt-0">
          {Array.from({ length: totalVideos }).map((_, index) => (
            <div
              key={index}
              className={`h-4 rounded-full transition-all duration-300 ease-out ${
                index === currentIndex 
                  ? 'w-8 bg-[#03E9F4]' 
                  : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-8 md:right-12 top-8 z-20 flex items-center gap-3 -mt-10 md:mt-0">
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Phone Mockups Grid */}
        <div
          className="relative h-[640px] w-full flex items-center justify-center overflow-hidden md:-mt-20"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            perspective: '1000px',
          }}
        >
          {mediaData.map((media, index) => {
            const delta =
              ((index - currentIndex + totalVideos + totalVideos / 2) % totalVideos) -
              totalVideos / 2;

            const pos = getPositionStyle(delta);

            if (!pos) return null;

            // Only preload current video and adjacent ones (within 2 positions)
            const shouldPreload = Math.abs(delta) <= 2;

            return (
              <PhoneThumbnail
                key={index}
                thumbnailSrc={media.thumb}
                videoSrc={media.video}
                onClick={() => setSelectedVideo(media.video)}
                motion={pos}
                shouldPreload={shouldPreload}
              />
            );
          })}
        </div>

      </div>

      {/* Video Modal */}
      <VideoModal
        videoSrc={selectedVideo || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}

function LogoBanner() {
  const logos = [
    { name: "Casetify", img_path: "/casetify.png" },
    { name: "Billy Brunch Barcelona", img_path: "/billy_brunch.png" },
    { name: "Darry Ring", img_path: "/darry_ring.png" },
    { name: "Crumbl", img_path: "/crumbl.png" },
    { name: "Humble Crumble", img_path: "/humble_crumble.png" },
    { name: "Halara", img_path: "/halara.png" },
    { name: "Bali Zoo", img_path: "/bali_zoo_black.png" },
    { name: "KIBAKO", img_path: "/kibako.png" },
  ];

  return (
    <div className="relative bg-[#03E9F4] py-1 overflow-hidden -mt-32">
      {/* Scrolling Content */}
      <div className="flex gap-24 animate-scroll">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">

           <img src={logo.img_path}  />

           {/* <span className="text-4xl">{logo.img_path}</span>
            <span className="font-display text-2xl font-bold text-black whitespace-nowrap">{logo.name}</span>*/}
          </div>
        ))}
      </div>
    </div>
  );
}

function TaglineSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <section ref={ref} className={`py-32 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="font-display text-[100px] leading-[104px] text-center uppercase">
          we specialize in scroll-stopping short-form content
        </h2>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const navigate = useNavigate();
  return (
    <section ref={ref} className={`py-20 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
              <div className="h-6 w-[200px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">    
                <span className="font-display text-[24px] tracking-wider uppercase">We Don't Play It Safe.</span>
              </div>
              <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
            </div>

            <h2 className="font-display text-[100px] leading-[104px] uppercase">
              Wrong Studios are Creators first
            </h2>
           
          </div>

          <div className="space-y-6 pt-16">
            <p className="text-[18px] leading-[34px] text-white/90 capitalize">
              Wrong Studios was founded by content creators who understand the pulse of online culture. With acquiring over 1 billion views each year and years of creative social media experience, we craft scroll-stopping short-form content that connects emotionally and transforms your brand into something impossible to ignore.
            </p>
          </div>
        </div>
         <div className="space-y-6 pt-8">
            <button 
              onClick={() => navigate('/about')}
              className="block mx-auto bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]"
            >
              Learn More About Us
            </button>
        </div>
            
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  // scroll y effect for slide to left and right
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const slideToLeft = (index: number, baseDelay: number) => {
    const triggerPoint = 700 + index * 100; // Adjust trigger points as needed
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 100));
  
    return {
      transform: `translateX(${500 - progress * 500}px)`,
      opacity: progress,
      transition: 'all 1s ease-out',
    };
  };
  
  const slideToRight = (index: number, baseDelay: number) => {
    const triggerPoint = 700 + index * 100; // Adjust trigger points as needed
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 100));
  
    return {
      transform: `translateX(${-500 - progress * -500}px)`,
      opacity: progress,
      transition: 'all 1s ease-out',
    };
  };

  const services = [
    {
      title: "Creative Strategy & Identity",
      description: "We define your brand's tone, voice, and visual direction. building an online personality that's bold, human, and impossible to ignore. essentially we turn your brand into an online influencer!"
    },
    {
      title: "Short-Form Content Production",
      description: "From Tiktoks to reels, we plan, shoot and edit viral short-form content that not only collects VIEWS but also builds connection and stays remembered."
    },
    {
      title: "Community & Trend Integration",
      description: "We embed your brand into the digital culture. We tap into merging trends and communities to keep you relevant, connected and constantly in the conversation. We are not here to just create aesthetic content, we are here to create a real movement."
    }
  ];

  return (
    <section ref={ref} className={`py-20 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1420px] mx-auto px-8">
        <div className="border border-[#292929] rounded-[20px] p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <img src="/services-bg.svg" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
                <div className="h-6 w-[178px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">    
                <span className="font-display text-[24px] tracking-wider uppercase">how we do it wrong</span>
                </div>
                <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
              </div>
              <h2 className="font-display text-[70px] leading-[70px] uppercase"
               style={slideToLeft(12,0)}>
                What We Do Best
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-0 bg-[#033C3D] rounded-[20px] pb-0 md:pb-8 pt-0 md:pt-6">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className={`p-4 md:p-8 pb-8 md:pb-0 ${i > 0 ? 'border-none md:border-white md:border-l md:border-dashed' : ''}`}
                >
                  <h3 className="font-display text-[31.51px] leading-[34.66px] uppercase mb-6" style={slideToLeft(12,200)}>
                    {service.title}
                  </h3>
                  <p className="text-[18px] leading-[28px] hover:leading-[30px] text-white/70 hover:text-white/100 capitalize" style={slideToRight(12,400)}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-0 md:pt-8 ">
           
              <button 
                onClick={() => navigate('/services')}
                className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]"
              >
                See Our Services
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const navigate = useNavigate();

  const projects = [
    { id: 1, img: "/project/work1.png", title: "work 1" },
    { id: 2, img: "/project/work2.png", title: "work 2" },
    { id: 3, img: "/project/work3.png", title: "work 3" },
    { id: 4, img: "/project/work4.png", title: "work 4" },
    { id: 5, img: "/project/work5.png", title: "work 5" },
    { id: 6, img: "/project/work1.png", title: "work 6" },
    { id: 7, img: "/project/work2.png", title: "work 7" },
    { id: 8, img: "/project/work3.png", title: "work 8" },
    { id: 9, img: "/project/work4.png", title: "work 9" },
    { id: 10, img: "/project/work5.png", title: "work 10" },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section ref={ref} className={`py-20 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center space-y-8 mb-16">
          <div className="flex items-center justify-center gap-2">
            <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-6 w-[85px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">
            <span className="font-display text-[24px] tracking-wider uppercase">Our Work</span>
            </div>
            <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
          </div>
          <h2 className="font-display text-[70px] leading-[67px] uppercase">
            When We Do It Wrong, It Works.
          </h2>
          <p className="text-[18px] text-white/90 capitalize">
            From global campaigns to creator collabs — our work sparks trends and builds communities.
          </p>
        </div>

        {/* Infinite Scrolling Work Grid - 2 Rows */}
        <div className="mb-16 overflow-hidden">
          <div className="grid grid-rows-2 gap-4">
            {/* Row 1 */}
            <div className="flex animate-infinite-scroll">
              {duplicatedProjects.slice(0, 15).map((project, index) => (
                <div
                  key={`row1-${project.id}-${index}`}
                  className="flex-shrink-0 w-[280px] mx-2"
                >
                  <div className="relative group overflow-hidden rounded-3xl border-2 border-white/20 hover:border-[#03E9F4] transition-all duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-mobile">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex animate-infinite-scroll" style={{ animationDirection: 'reverse', animationDelay: '5s' }}>
              {duplicatedProjects.slice(15, 30).map((project, index) => (
                <div
                  key={`row2-${project.id}-${index}`}
                  className="flex-shrink-0 w-[280px] mx-2"
                >
                  <div className="relative group overflow-hidden rounded-3xl border-2 border-white/20 hover:border-[#03E9F4] transition-all duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-mobile">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Work Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/work')}
            className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]"
          >
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    "1M+ FOLLOWERS ACCUMULATED",
    "OVER 1 BILLION VIEWS EACH YEAR",
    "OVER 150 MILLION LIKES",
    
  ];

  return (
    <div className="relative bg-[#03E9F4] py-10 overflow-hidden -rotate-[3deg] my-20">
      {/* Background */}
 

      {/* Scrolling Content */}
      <div className="relative z-10 flex gap-16 animate-scroll">
        {[...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-display text-[40px] text-[#191919] leading-[67px] tracking-wide whitespace-nowrap">
              {stat}
            </span>
            <img src="/signature_black.png" alt="" className="w-[73px] h-[49px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const navigate = useNavigate();
  return (
    <section ref={ref} className={`py-20 fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
              <div className="h-6 w-[90px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">    
              <span className="font-display text-[24px] tracking-wider uppercase">Our Story</span>
              </div>
              <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
            </div>

            <h2 className="font-display text-[70px] leading-[70px] uppercase">
              we dont create content. We create culture.
            </h2>

            <p className="text-[18px] leading-[34px] text-white/90 capitalize">
              most brands post to be seen. We create to be felt. Every brand has a heart beat, a story that deserves more than likes or views. At Wrong Studios, we don't just make videos that look good, we build personalities that stick in people's minds. Our work crafts intention and character behind content that turns short-form content into lasting cultural impact.
            </p>
           
            <button 
              onClick={() => navigate('/work')}
              className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]"
            >
              Read Our Story
            </button>
            
          </div>

          <div className="grid place-items-center h-[80px] md:h-[400px]">
          <img
              src="/logo.svg"
              alt="Wrong Studios"
              className="w-[220px] md:w-[280px] h-[60px] md:h-[90px]"
            />
            
          {/*className="w-full h-full object-contain rotate-[0deg]" />*/}
                    
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const navigate = useNavigate();
  return (
    <section ref={ref} className={`py-32 relative overflow-hidden fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img src="/cta-bg.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1040px] mx-auto px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-2">
            <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-6 w-[264px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">    
            <span className="font-display text-[24px] tracking-wider uppercase">Ready to Stop Being Ignored?</span>
            </div>
            <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
          </div>

          <h2 className="font-display text-[60px] md:text-[70px] leading-[1] uppercase">
             Let's build something
             <br />
              unforgettable.
          </h2>

          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]"
          >
            join the wrong side
          </button>
        </div>
      </div>
    </section>
  );
}
