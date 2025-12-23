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

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <StorySection />

      {/* Identity Section */}
      <IdentitySection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[630px] pt-[200px] pb-20 overflow-hidden">
      
      {/* Background Image ----commented for now
      <div className="absolute inset-0">
        <img 
          src="/about_header.png" 
          alt="" 
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20 mx-auto max-w-[1420px]"
        />
      </div> */}

       {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        {/* Section Label */}
         <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-7 w-[88px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">         
              <span className="h-9 ml-1 font-display text-[24.77px] tracking-wider uppercase">ABOUT US</span>          
            </div>
          <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
         </div>       

        <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[760px] mx-auto">
          <span className="text-white/60">We Break the Rules.</span>
          <br />
          <span className="text-white">You Break the Internet.</span>
        </h1>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    
    <section ref={ref} className={`py-10 md:py-32 fade-in-section ${isVisible ? 'visible' : ''}`}>
      
      <div className="">    
         {/* Left Decorative Image */} 
         <img 
          src="/about_header_image_left.png" 
          alt="" 
          className="absolute left-12 md:left-12 top-[-130px] md:top-[430px] w-[140px] md:w-[204px] h-[142px] md:h-[226px] -rotate-[5deg] rounded-3xl"
           />

           {/* Right Decorative Image */}
          <img 
            src="/about_header_image_right.png" 
            alt="" 
            className="absolute right-12 md:right-12 top-[-130px] md:top-[430px] w-[140px] md:w-[204px] h-[142px] md:h-[226px] rotate-[5deg] rounded-3xl"
          />
     </div>

      <div className="relative max-w-[1440px] mx-auto px-8">

        <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/bracket-left-alt.png" alt="" className="w-[7px] h-[23px]" />
            <div className="h-7 w-[98px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">         
              <span className="h-9 font-display text-[24.77px] tracking-wider uppercase">&nbsp;OUR STORY</span>          
            </div>
          <img src="/bracket-right-alt.png" alt="" className="w-[7px] h-[23px]" />
         </div>  

  

          <h2 className="font-display text-[60px] md:text-[100px] leading-[1.04] uppercase">
            Built by creators, With passion!
          </h2>

          <p className="text-[20px] md:text-[24px] leading-[1.67] text-white/90 max-w-[880px] mx-auto">
            Wrong Studios was born out of frustration. We were tired of seeing lifeless creations made by people who dont live online. We started as creators, not marketers. In 2022, it was just two people, a phone and a belief that content should feel something.
          </p>

   

        </div>
      </div>
    </section>
  );
}

function IdentitySection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = (index: number, baseDelay: number) => {
    const triggerPoint = 700 + index * 100; // Adjust trigger points as needed
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 100));

    return {
      transform: `translateY(${50 - progress * 50}px)`,
      opacity: progress,
      transition: 'all 0.5s ease-out',
    };
  };

  return (
    <section className="py-32 md:py-52 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl" />
          <img
            src="/about_image_middle.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-plus-lighter rounded-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1420px] mx-auto px-8">
        <div className="max-w-[795px] mx-auto text-center space-y-6">
          <h2
            className="font-display text-[60px] md:text-[100px] leading-[0.82] uppercase"
            style={getTransform(0, 0)}
          >
            WRONG STUDIOS IS
          </h2>

          <div
            className="font-display text-[60px] md:text-[100px] leading-[0.82] uppercase -rotate-0 py-4"
            style={getTransform(1, 200)}
          >
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent'
              }}
            >
              A CREATOR-LED
            </span>
          </div>

          <h3
            className="font-display text-[60px] md:text-[100px] leading-[0.82] uppercase text-white"
            style={getTransform(2, 400)}
          >
            PRODUCTION HOUSE
          </h3>

          <div
            className="font-display text-[60px] md:text-[100px] leading-[0.82] uppercase rotate-0 py-4"
            style={getTransform(3, 600)}
          >
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent'
              }}
            >
              BUILT BY ARWIN
            </span>
          </div>

          <h4
            className="font-display text-[60px] md:text-[100px] leading-[0.82] uppercase text-white"
            style={getTransform(4, 800)}
          >
            AND CLARA
          </h4>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 md:py-52 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="pl-8 md:pl-32 space-y-16">
          {/* Main CTA Text */}
          <div className="space-y-12">
            <h2 className="font-display text-[80px] md:text-[140px] leading-[0.62] uppercase text-white">
              READY TO
            </h2>
            
            <div className="pl-8 md:pl-32">
              <h3 
                className="font-display text-[80px] md:text-[140px] leading-[0.69] uppercase"
                style={{
                  WebkitTextStroke: '1px white',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                STOP BEING
              </h3>
            </div>

            <h4 className="font-display text-[80px] md:text-[140px] leading-[0.75] uppercase text-white">
              IGNORED?
            </h4>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-1 pt-8">
            <button className="group relative bg-black border-2 border-white rounded-xl px-8 py-4 md:px-8 md:py-4 hover:bg-white/5 transition-all">
              <span className="font-display text-[20px] md:text-[40px] leading-[1.1] uppercase text-white">
              <a href="/contact">
                JOIN THE WRONG SIDE
              </a>
              </span>
            </button>
            
            <div className="w-[80px] md:w-[80px] h-[60px] md:h-[80px] flex items-center justify-center bg-transparent border-2 border-white rounded-xl group-hover:bg-white/5 transition-all">
              <svg width="33" height="58" viewBox="0 0 33 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6712 29.0257L2.75488 56.4486C16.8775 42.585 16.232 14.3275 3.24825 1.10938L30.6712 29.0257Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
