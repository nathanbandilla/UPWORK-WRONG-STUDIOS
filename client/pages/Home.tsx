import React from "react";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from 'react';

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
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">1.5B+</div>
            <div className="text-[18px] leading-[20px] text-white/90 lowercase">
              views in<br />viral videos
            </div>
          </div>
          <div className="w-px h-[103px] bg-white/30" />
          <div className="text-center">
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">1M+</div>
            <div className="text-[18px] leading-[20px] text-white/90 lowercase">
              followers<br />accumulated
            </div>
          </div>
          <div className="w-px h-[103px] bg-white/30" />
          <div className="text-center">
            <div className="font-display text-[55px] leading-tight mb-2 tracking-[-1.1px]">150M</div>
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

// Memoized Video Component
const PhoneVideo = React.memo(({ 
  videoSrc, 
  position, 
  videoRef 
}: { 
  videoSrc: string; 
  position: any; 
  videoRef: (el: HTMLVideoElement | null) => void;
}) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    ...(position.left ? { left: position.left } : { right: position.right }),
    top: position.top,
    transform: position.center 
      ? 'translate(-50%, -50%)'
      : `translateY(-50%) rotate(${position.rotate}deg) scale(${position.scale})`,
    opacity: position.opacity,
    zIndex: position.zIndex, 
    willChange: 'transform, opacity',
  };

  return (
    <div style={style}>
      <video 
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: `${position.width}px`,
          height: `${position.height}px`,
          objectFit: position.center ? 'fill' : 'cover',
          borderRadius: position.center ? '28px' : '24px',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
        className={`border-4 ${position.center ? 'border-white/60' : 'border-white/50'} ${
          position.center ? 'shadow-[0_0_50px_rgba(3,233,244,0.5)]' : 'shadow-xl'
        }`}
      />
    </div>
  );
});

PhoneVideo.displayName = 'PhoneVideo';

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
  motion,
  onClick,
}: {
  thumbnailSrc: string;
  motion: any;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: motion.width,
        height: motion.height,
        opacity: motion.opacity,
        zIndex: motion.zIndex,
        transform: `
          translate(-50%, -50%)
          translateX(${motion.x}px)
          rotate(${motion.rotate}deg)
          scale(${motion.scale})
        `,
        transition: `
          transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
          opacity 500ms ease
        `,
        willChange: 'transform',
      }}
      onClick={onClick}
    >
      {/* Hover Layer */}
      <div
        className="
          w-full h-full
          cursor-pointer
          transition-all duration-300 ease-out
          hover:-translate-y-3
          hover:scale-[1.04]
          hover:shadow-[0_30px_80px_rgba(3,233,244,0.35)]
        "
      >
        <img
          src={thumbnailSrc}
          className="
            w-full h-full object-cover
            border-4 border-white/50
            rounded-[24px]
            transition-all duration-300
            hover:border-[#03E9F4]
          "
          draggable={false}
        />
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

  // Video sources and their thumbnails
  const mediaData = React.useMemo(() => [
    { video: "/videos/vid_1.mp4", thumb: "/thumbnails/thumb_1.jpg" },
    { video: "/videos/vid_2.mp4", thumb: "/thumbnails/thumb_2.jpg" },
    { video: "/videos/vid_3.mp4", thumb: "/thumbnails/thumb_3.jpg" },
    { video: "/videos/vid_4.mp4", thumb: "/thumbnails/thumb_4.jpg" },
    { video: "/videos/vid_5.mp4", thumb: "/thumbnails/thumb_5.jpg" },
    { video: "/videos/vid_6.mp4", thumb: "/thumbnails/thumb_6.jpg" },
    { video: "/videos/vid_7.mp4", thumb: "/thumbnails/thumb_7.jpg" },
    { video: "/videos/vid_8.mp4", thumb: "/thumbnails/thumb_8.jpg" }
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
    };
  };

  return (
    <>
      <div className="relative max-w-[1440px] mx-auto px-8 pb-20">
       
        {/* Position Tracker */}
        <div className="absolute left-12 top-8 z-20 flex items-center gap-2 -mt-5 md:mt-0">
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
        <div className="absolute right-12 top-8 z-20 flex items-center gap-3 -mt-10 md:mt-0">
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
        <div className="relative h-[640px] flex items-center justify-center overflow-hidden md:-mt-20">
          {mediaData.map((media, index) => {
            const delta =
              ((index - currentIndex + totalVideos + totalVideos / 2) % totalVideos) -
              totalVideos / 2;

            const pos = getPositionStyle(delta);

            if (!pos) return null;

            return (
              <PhoneThumbnail
                key={index}
                thumbnailSrc={media.thumb}
                onClick={() => setSelectedVideo(media.video)}
                motion={pos}
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
            <button className="block mx-auto bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
            <a href="/about">
              Learn More About Us
            </a>
            </button>
        </div>
            
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useFadeInOnScroll();
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
              <h2 className="font-display text-[70px] leading-[70px] uppercase">
                What We Do Best
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-0">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className={`p-0 md:p-8 pb-8 md:pb-0 ${i > 0 ? 'border-none md:border-white md:border-l md:border-dashed' : ''}`}
                >
                  <h3 className="font-display text-[31.51px] leading-[34.66px] uppercase mb-6">
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-[28px] text-white/90 capitalize">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-0 md:pt-8 ">
           
              <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
              <a href="/services">
                See Our Services
              </a>
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
          <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
            <a href="/work">
              View All Work
            </a>
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
           
            <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
            <a href="/work">
              Read Our Story
            </a>
            </button>
            
          </div>

          <div className="grid place-items-center h-[80px] md:h-[400px]">
          <img
              src="/logo.svg"
              alt="Wrong Studios"
              className="w-[180px] md:w-[220px] h-[40px] md:h-[60px]"
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

          <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
          <a href="/contact">
            join the wrong side
           </a>
          </button>
        </div>
      </div>
    </section>
  );
}
