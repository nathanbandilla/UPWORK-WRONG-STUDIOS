import React from "react";
import Layout from "@/components/Layout";

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
  return (
    <section className="relative pt-[200px] pb-20 overflow-hidden"> 

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
        <div className="text-center mb-12">
          <h1 className="font-display text-[194px] leading-[170px] bg-gradient-to-b from-white/50 to-white/100 text-transparent bg-clip-text">
            DOING IT WRONG
          </h1>
          <p className="font-display text-[64px] leading-[72px] uppercase">
            Never Looked This Right.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-20">
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

      {/* Phone Mockups Slideshow Section */}
      <PhoneSlideshow />
    </section>
  );
}

function PhoneSlideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(3); // Start with center image (index 3)
  const totalImages = 7;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const images = [
    "/phone-1.png",
    "/phone-2.png", 
    "/phone-3.png",
    "/phone-4.png",
    "/phone-5.png",
    "/phone-6.png",
    "/phone-7.png"
  ];

  return (
    <div className="relative max-w-[1440px] mx-auto px-8 pb-20">
      {/* Decorative background curves - cyan color */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-40">
        <svg viewBox="0 0 400 600" fill="none" className="w-full h-full">
          <path 
            d="M 100 0 Q 250 300 100 600" 
            stroke="#03E9F4" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-40">
        <svg viewBox="0 0 400 600" fill="none" className="w-full h-full">
          <path 
            d="M 300 0 Q 150 300 300 600" 
            stroke="#03E9F4" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>

      {/* Position Tracker - Upper Left */}
      <div className="absolute left-12 top-8 z-20 flex items-center gap-2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-[#03E9F4]' 
                : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons - Upper Right */}
      <div className="absolute right-12 top-8 z-20 flex items-center gap-3">
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

      {/* Phone Mockups Grid with Slideshow */}
      <div className="relative h-[640px] flex items-center justify-center">
        {/* Left side phones - smaller and rotated */}
        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            left: '8%', 
            top: '60%', 
            transform: 'translateY(-50%) rotate(-25deg) scale(0.7)',
            opacity: 0.6,
            zIndex: 1
          }}
        >
          <img 
            src={images[(currentIndex - 3 + totalImages) % totalImages]}
            alt="" 
            className="w-[240px] h-[360px] rounded-[24px] border-4 border-white/50 object-cover shadow-xl"
          />
        </div>
        
        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            left: '20%', 
            top: '50%', 
            transform: 'translateY(-50%) rotate(-15deg) scale(0.85)',
            opacity: 0.75,
            zIndex: 2
          }}
        >
          <img 
            src={images[(currentIndex - 2 + totalImages) % totalImages]}
            alt="" 
            className="w-[280px] h-[420px] rounded-[24px] border-4 border-white/50 object-cover shadow-xl"
          />
        </div>

        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            left: '33%', 
            top: '50%', 
            transform: 'translateY(-50%) rotate(-8deg) scale(0.92)',
            opacity: 0.85,
            zIndex: 3
          }}
        >
          <img 
            src={images[(currentIndex - 1 + totalImages) % totalImages]}
            alt="" 
            className="w-[320px] h-[480px] rounded-[24px] border-4 border-white/50 object-cover shadow-2xl"
          />
        </div>
        
        {/* Center phone - largest with cyan glow */}
        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        >
          <img 
            src={images[currentIndex]}
            alt="" 
            className="w-[360px] h-[540px] rounded-[28px] border-4 border-white/60 object-cover shadow-[0_0_80px_rgba(3,233,244,0.4),0_0_40px_rgba(3,233,244,0.3)]"
          />
        </div>

        {/* Right side phones - smaller and rotated */}
        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            right: '33%', 
            top: '50%', 
            transform: 'translateY(-50%) rotate(8deg) scale(0.92)',
            opacity: 0.85,
            zIndex: 3
          }}
        >
          <img 
            src={images[(currentIndex + 1) % totalImages]}
            alt="" 
            className="w-[320px] h-[480px] rounded-[24px] border-4 border-white/50 object-cover shadow-2xl"
          />
        </div>

        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            right: '20%', 
            top: '50%', 
            transform: 'translateY(-50%) rotate(15deg) scale(0.85)',
            opacity: 0.75,
            zIndex: 2
          }}
        >
          <img 
            src={images[(currentIndex + 2) % totalImages]}
            alt="" 
            className="w-[280px] h-[420px] rounded-[24px] border-4 border-white/50 object-cover shadow-xl"
          />
        </div>

        <div 
          className="absolute transition-all duration-500 ease-out"
          style={{ 
            right: '8%', 
            top: '60%', 
            transform: 'translateY(-50%) rotate(25deg) scale(0.7)',
            opacity: 0.6,
            zIndex: 1
          }}
        >
          <img 
            src={images[(currentIndex + 3) % totalImages]}
            alt="" 
            className="w-[240px] h-[360px] rounded-[24px] border-4 border-white/50 object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
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
    <div className="relative bg-[#03E9F4] py-1 overflow-hidden">
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
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="font-display text-[100px] leading-[104px] text-center uppercase">
          we specialize in scroll-stopping short-form content
        </h2>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20">
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

            <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
              Learn More About Us
            </button>
          </div>

          <div className="space-y-6 pt-16">
            <p className="text-[18px] leading-[34px] text-white/90 capitalize">
              Wrong Studios was founded by content creators who understand the pulse of online culture. With acquiring over 1 billion views each year and years of creative social media experience, we craft scroll-stopping short-form content that connects emotionally and transforms your brand into something impossible to ignore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
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
    <section className="py-20">
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
                  className={`p-8 ${i > 0 ? 'border-l border-dashed border-white' : ''}`}
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

            <div className="text-center pt-8">
              <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
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
  return (
    <section className="py-20">
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

        {/* Work Grid Image */}
        <div className="mb-16">
          <img src="/work-grid.svg" alt="Portfolio showcase" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    "1M+ FOLLOWERS ACCUMULATED",
    "OVER 1 BILLION VIEWS EACH YEAR",
    "OVER 150 MILLION LIKES"
  ];

  return (
    <div className="relative py-16 overflow-hidden -rotate-[3deg] my-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/stats-banner-bg.svg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 flex gap-16 animate-scroll">
        {[...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-display text-[40px] leading-[67px] tracking-wide whitespace-nowrap">
              {stat}
            </span>
            <img src="/signature.png" alt="" className="w-[73px] h-[49px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="py-20">
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
              Read Our Story
            </button>
          </div>

          <div className="relative h-[520px]">
            <img src="/story-images.svg" alt="Our story" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
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
             Let&apos;s build something
             <br />
              unforgettable.
          </h2>

          <button className="bg-[#03E9F4] text-[#191919] px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-[#03E9F4]/90 transition-colors capitalize leading-[19.6px]">
            join the wrong side
          </button>
        </div>
      </div>
    </section>
  );
}
