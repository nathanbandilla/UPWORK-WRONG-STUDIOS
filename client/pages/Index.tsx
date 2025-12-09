import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header/Navigation */}
      <Header />

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

      {/* Story Section */}
      <StorySection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1320px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 49 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8875 7.66753L24.0342 25.5133L25.7114 6.34269C26.0895 6.28865 26.4706 6.24527 26.8544 6.21285L25.1571 25.6134L32.128 6.4609C32.5037 6.52832 32.8754 6.60604 33.2429 6.69375L26.2158 26.0005L38.3413 8.68345C38.6709 8.86779 38.9944 9.06108 39.3117 9.26297L27.141 26.6446L43.5499 12.8759C43.7994 13.157 44.0411 13.4449 44.2745 13.7395L27.8632 27.5103L47.0964 18.5416C47.2401 18.8892 47.3742 19.2414 47.4985 19.598L28.3437 28.53L48.5719 24.9632C48.5944 25.3404 48.6064 25.72 48.6075 26.1017L28.5358 29.6409L47.9358 31.3381C47.8372 31.7105 47.7282 32.0783 47.6094 32.4412L28.4346 30.7636L45.4661 36.9626C45.257 37.2899 45.0387 37.6105 44.8117 37.9241L28.0538 31.8247L41.6625 41.3536C41.3668 41.6089 41.0636 41.8556 40.7535 42.0933L27.4084 32.749L37.1132 44.3147C36.7596 44.4818 36.4006 44.6388 36.0365 44.7854L26.5438 33.4724L32.327 45.8745C31.9446 45.9473 31.5586 46.0092 31.1696 46.0598L25.5213 33.947L27.6829 46.2064C27.3958 46.1935 27.1076 46.1745 26.8185 46.1492C26.7199 46.1405 26.6214 46.1312 26.5232 46.1212L24.4109 34.1418L23.4124 45.5551C23.04 45.4565 22.6722 45.3476 22.3093 45.2287L23.2877 34.0454L19.6194 44.1241C19.2789 43.9541 18.9441 43.7749 18.6154 43.5866L22.2279 33.6614L16.341 42.0687C16.0422 41.8383 15.7503 41.5998 15.4656 41.3535L21.3062 33.0123L13.5817 39.4938C13.3322 39.2128 13.0905 38.9248 12.8571 38.6303L20.5791 32.1508L11.353 36.453C11.1598 36.1298 10.9756 35.8009 10.8005 35.4667L20.1068 31.1271L9.69986 32.9622C9.57156 32.6058 9.45313 32.2449 9.34489 31.88L19.9074 30.0176L8.72391 29.0392C8.66985 28.6611 8.62645 28.28 8.594 27.8962L20.0026 28.8943L8.57644 24.7355C8.58366 24.6363 8.59162 24.537 8.60032 24.4375C8.62555 24.1492 8.65676 23.8628 8.69382 23.5786L20.393 27.8367L9.44338 20.1697C9.56075 19.7953 9.68869 19.426 9.82682 19.062L21.0408 26.9141L11.5441 15.5964C11.7517 15.2633 11.9686 14.937 12.1946 14.6178L21.9033 26.1882L15.0156 11.4173C15.3035 11.1532 15.5991 10.8976 15.9019 10.6507L22.9242 25.71L19.827 8.14493C20.1752 7.97583 20.5289 7.81659 20.8875 7.66753Z" fill="white"/>
              </svg>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">FOCAL POINT</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-[18px] font-bold text-[#191919] bg-white px-4 py-1 rounded-full">Home</Link>
            <Link to="/about" className="text-[18px] text-white/90 hover:text-white transition-colors">About</Link>
            <Link to="/services" className="text-[18px] text-white/90 hover:text-white transition-colors">Services</Link>
            <Link to="/work" className="text-[18px] text-white/90 hover:text-white transition-colors">Our work</Link>
            <Link to="/contact" className="text-[18px] text-white/90 hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-white text-[#191919] px-6 py-3 rounded-2xl font-bold text-[18px] hover:bg-white/90 transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[100px] right-[1316px] w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 24L12 0" stroke="url(#gradient1)" />
          <path d="M24 12L0 12" stroke="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="white" stopOpacity="0"/>
              <stop offset="0.5" stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-6 h-6 bg-white/10 border border-white/20" />
          <span className="font-display text-sm tracking-wider">WRONG STUDIOS</span>
          <div className="w-6 h-6 bg-white/10 border border-white/20" />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-[120px] md:text-[194px] leading-[0.85] tracking-tight text-white/60 mb-6">
            DOING IT WRONG
          </h1>
          <p className="font-display text-[48px] md:text-[64px] leading-tight">
            NEVER LOOKED THIS RIGHT.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
          <div className="text-center">
            <div className="font-display text-[40px] md:text-[55px] font-bold leading-tight mb-2">1.5B+</div>
            <div className="text-[14px] md:text-[18px] text-white/80 lowercase">
              views in<br />viral videos
            </div>
          </div>
          <div className="w-px h-24 bg-white/20" />
          <div className="text-center">
            <div className="font-display text-[40px] md:text-[55px] font-bold leading-tight mb-2">1M+</div>
            <div className="text-[14px] md:text-[18px] text-white/80 lowercase">
              followers<br />accumulated
            </div>
          </div>
          <div className="w-px h-24 bg-white/20" />
          <div className="text-center">
            <div className="font-display text-[40px] md:text-[55px] font-bold leading-tight mb-2">150M</div>
            <div className="text-[14px] md:text-[18px] text-white/80 lowercase">
              overall<br />likes
            </div>
          </div>
        </div>

        {/* Reel Cards */}
        <div className="relative h-[600px] mb-20">
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/62266e964bf7b164ba595a4504abca585de2aa49?width=388"
            className="absolute left-0 top-[315px] w-[205px] h-[309px] -rotate-[36deg]"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/99f6c1d4111191456b13b086856d8dae42c0889c?width=487"
            className="absolute left-[135px] top-[168px] w-[257px] h-[387px] -rotate-[21deg]"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/483c0650182dd5b4b6d52cc102bc88c4c1e573d3?width=601"
            className="absolute left-[290px] top-[100px] w-[317px] h-[478px] -rotate-[6deg]"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/496c30d38c595ab62c945281a21a0a52a16b156d?width=746"
            className="absolute left-[483px] top-0 w-[394px] h-[594px] shadow-[0_-76px_211px_rgba(3,233,244,0.2),0_483px_193px_rgba(92,34,104,0.03)] z-10"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d35d14acf4ca3549f97f77116c274bfde897e841?width=601"
            className="absolute right-[290px] top-[100px] w-[317px] h-[478px] rotate-[6deg]"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/301d73e04f156870a2699811b7609de3d8315411?width=487"
            className="absolute right-[135px] top-[168px] w-[257px] h-[387px] rotate-[21deg]"
          />
          <ReelCard 
            src="https://api.builder.io/api/v1/image/assets/TEMP/4295316591d3b65eeda4c2dbc34b763df39de080?width=388"
            className="absolute right-0 top-[315px] w-[205px] h-[309px]"
          />
        </div>
      </div>
    </section>
  );
}

function ReelCard({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`rounded-[20px] border border-white/40 overflow-hidden backdrop-blur ${className}`}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function LogoBanner() {
  const logos = [
    { name: "Focal Point" },
    { name: "Screentime" },
    { name: "Segment" },
    { name: "Shutterframe" },
    { name: "Lightspeed" },
    { name: "Mastermail" },
  ];

  return (
    <div className="relative py-16 border-y border-white/10 overflow-hidden">
      <div className="flex gap-16 animate-scroll">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-12">
              <svg viewBox="0 0 49 52" fill="none" className="w-full h-full">
                <path d="M20.8875 7.66753L24.0342 25.5133L25.7114 6.34269C26.0895 6.28865 26.4706 6.24527 26.8544 6.21285L25.1571 25.6134L32.128 6.4609C32.5037 6.52832 32.8754 6.60604 33.2429 6.69375L26.2158 26.0005L38.3413 8.68345C38.6709 8.86779 38.9944 9.06108 39.3117 9.26297L27.141 26.6446L43.5499 12.8759C43.7994 13.157 44.0411 13.4449 44.2745 13.7395L27.8632 27.5103L47.0964 18.5416C47.2401 18.8892 47.3742 19.2414 47.4985 19.598L28.3437 28.53L48.5719 24.9632C48.5944 25.3404 48.6064 25.72 48.6075 26.1017L28.5358 29.6409L47.9358 31.3381C47.8372 31.7105 47.7282 32.0783 47.6094 32.4412L28.4346 30.7636L45.4661 36.9626C45.257 37.2899 45.0387 37.6105 44.8117 37.9241L28.0538 31.8247L41.6625 41.3536C41.3668 41.6089 41.0636 41.8556 40.7535 42.0933L27.4084 32.749L37.1132 44.3147C36.7596 44.4818 36.4006 44.6388 36.0365 44.7854L26.5438 33.4724L32.327 45.8745C31.9446 45.9473 31.5586 46.0092 31.1696 46.0598L25.5213 33.947L27.6829 46.2064C27.3958 46.1935 27.1076 46.1745 26.8185 46.1492C26.7199 46.1405 26.6214 46.1312 26.5232 46.1212L24.4109 34.1418L23.4124 45.5551C23.04 45.4565 22.6722 45.3476 22.3093 45.2287L23.2877 34.0454L19.6194 44.1241C19.2789 43.9541 18.9441 43.7749 18.6154 43.5866L22.2279 33.6614L16.341 42.0687C16.0422 41.8383 15.7503 41.5998 15.4656 41.3535L21.3062 33.0123L13.5817 39.4938C13.3322 39.2128 13.0905 38.9248 12.8571 38.6303L20.5791 32.1508L11.353 36.453C11.1598 36.1298 10.9756 35.8009 10.8005 35.4667L20.1068 31.1271L9.69986 32.9622C9.57156 32.6058 9.45313 32.2449 9.34489 31.88L19.9074 30.0176L8.72391 29.0392C8.66985 28.6611 8.62645 28.28 8.594 27.8962L20.0026 28.8943L8.57644 24.7355C8.58366 24.6363 8.59162 24.537 8.60032 24.4375C8.62555 24.1492 8.65676 23.8628 8.69382 23.5786L20.393 27.8367L9.44338 20.1697C9.56075 19.7953 9.68869 19.426 9.82682 19.062L21.0408 26.9141L11.5441 15.5964C11.7517 15.2633 11.9686 14.937 12.1946 14.6178L21.9033 26.1882L15.0156 11.4173C15.3035 11.1532 15.5991 10.8976 15.9019 10.6507L22.9242 25.71L19.827 8.14493C20.1752 7.97583 20.5289 7.81659 20.8875 7.66753Z" fill="black"/>
              </svg>
            </div>
            <span className="font-display text-2xl font-bold">{logo.name}</span>
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
        <h2 className="font-display text-[70px] md:text-[100px] leading-[1] text-center uppercase max-w-[1085px] mx-auto">
          we specialize in scroll-stopping short-form content
        </h2>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan to-transparent" />
              <span className="font-display text-sm tracking-wider">WE DON'T PLAY IT SAFE.</span>
              <div className="h-px w-24 bg-gradient-to-r from-cyan to-transparent" />
            </div>

            <h2 className="font-display text-[70px] md:text-[100px] leading-[1] uppercase">
              Wrong Studios are Creators first
            </h2>

            <button className="bg-cyan text-black px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-cyan/90 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-[18px] leading-[34px] text-white/90">
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
    <section className="py-32">
      <div className="max-w-[1420px] mx-auto px-8">
        <div className="border border-[#292929] rounded-3xl p-16 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1bd8dd31540c2468351e1d2136d03b8c505296e7?width=2840" 
              alt="" 
              className="w-full h-full object-cover mix-blend-plus-lighter"
            />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 max-w-[164px] bg-gradient-to-r from-transparent to-cyan" />
                <span className="font-display text-sm tracking-wider">HOW WE DO IT WRONG</span>
                <div className="h-px flex-1 max-w-[164px] bg-gradient-to-l from-transparent to-cyan" />
              </div>
              <h2 className="font-display text-[70px] leading-[1] uppercase">
                What We Do Best
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {services.map((service, i) => (
                <div key={i} className="bg-black p-8 border-l border-dashed border-white first:border-l-0">
                  <h3 className="font-display text-[32px] leading-[1.1] uppercase mb-6 text-center">
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-[28px] text-white/90 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-cyan text-black px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-cyan/90 transition-colors">
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
  const videos = [
    "https://api.builder.io/api/v1/image/assets/TEMP/ff61c6b917a51dabd01294a29f4b330349720385?width=569",
    "https://api.builder.io/api/v1/image/assets/TEMP/b4858ff734ab988decdf57a6cf15486e25a5a4d4?width=569",
    "https://api.builder.io/api/v1/image/assets/TEMP/c84943d91c9858cb63d2b84d338e72040a0c3a09?width=569",
    "https://api.builder.io/api/v1/image/assets/TEMP/111d5ab71a2f2a3fd135d06495414ed053559c9a?width=569",
    "https://api.builder.io/api/v1/image/assets/TEMP/07471f4b23570fcf383163860432fc3b0bb76242?width=569",
  ];

  return (
    <section className="py-32">
      <div className="max-w-[1503px] mx-auto px-8">
        <div className="text-center space-y-12 mb-20">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[84px] bg-gradient-to-r from-transparent to-cyan" />
            <span className="font-display text-sm tracking-wider">OUR WORK</span>
            <div className="h-px flex-1 max-w-[84px] bg-gradient-to-l from-transparent to-cyan" />
          </div>
          <h2 className="font-display text-[70px] leading-[0.95] uppercase">
            When We Do It Wrong, It Works.
          </h2>
          <p className="text-[18px] leading-[34px] text-white/90">
            From global campaigns to creator collabs — our work sparks trends and builds communities.
          </p>
        </div>

        {/* Video Grid - Row 1 */}
        <div className="flex gap-5 mb-5 justify-center">
          {videos.slice(0, 5).map((src, i) => (
            <div 
              key={i} 
              className={`w-[285px] h-[437px] rounded-3xl overflow-hidden ${i === 3 ? 'opacity-50' : ''} ${i % 2 === 0 ? 'mt-5' : ''}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Video Grid - Row 2 */}
        <div className="flex gap-5 justify-center">
          {[
            "https://api.builder.io/api/v1/image/assets/TEMP/4a40c8567c5e7d27f9d69d044e5dcb5babcd8632?width=569",
            "https://api.builder.io/api/v1/image/assets/TEMP/111d5ab71a2f2a3fd135d06495414ed053559c9a?width=569",
            "https://api.builder.io/api/v1/image/assets/TEMP/2db1ef28b4ab1faabd633fcae1cad10fcd666c28?width=569",
            "https://api.builder.io/api/v1/image/assets/TEMP/ff61c6b917a51dabd01294a29f4b330349720385?width=569",
            "https://api.builder.io/api/v1/image/assets/TEMP/f5d94c59aa83b5f055d46d0091e529d6f287115d?width=569",
          ].map((src, i) => (
            <div 
              key={i} 
              className={`w-[285px] h-[437px] rounded-3xl overflow-hidden ${i === 1 ? 'opacity-50' : ''} ${i % 2 === 0 ? 'mt-5' : ''}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan to-transparent max-w-[87px]" />
              <span className="font-display text-sm tracking-wider">OUR STORY</span>
              <div className="h-px w-24 bg-gradient-to-r from-cyan to-transparent" />
            </div>

            <h2 className="font-display text-[70px] leading-[1] uppercase">
              we dont create content. We create culture.
            </h2>

            <p className="text-[18px] leading-[34px] text-white/90">
              most brands post to be seen. We create to be felt. Every brand has a heart beat, a story that deserves more than likes or views. At Wrong Studios, we don't just make videos that look good, we build personalities that stick in people's minds. Our work crafts intention and character behind content that turns short-form content into lasting cultural impact.
            </p>

            <button className="bg-cyan text-black px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-cyan/90 transition-colors">
              Read Our Story
            </button>
          </div>

          <div className="relative h-[520px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-cyan/5 to-transparent rounded-3xl overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/62266e964bf7b164ba595a4504abca585de2aa49?width=388" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-cyan/5 to-transparent rounded-3xl overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4295316591d3b65eeda4c2dbc34b763df39de080?width=388" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
    <div className="py-12 border-y border-white/10 overflow-hidden -rotate-3 my-20">
      <div className="flex gap-16 animate-scroll">
        {[...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-display text-[40px] leading-[67px] tracking-wide">
              {stat}
            </span>
            <div className="w-[73px] h-[49px]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=145" 
                alt="" 
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-32 border-y border-[#272727]">
      <div className="max-w-[1250px] mx-auto px-8 border-x border-[#272727] py-20">
        <div className="text-center space-y-8 max-w-[512px] mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan" />
            <span className="font-display text-sm tracking-wider">READY TO STOP BEING IGNORED?</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan" />
          </div>

          <h2 className="font-display text-[70px] leading-[0.95] uppercase">
            Lets build something unforgettable.
          </h2>

          <button className="bg-cyan text-black px-8 py-4 rounded-2xl font-bold text-[18px] hover:bg-cyan/90 transition-colors">
            join the wrong side
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/857eabe4a37d90dc5643740e1feb215104038723?width=218" 
              alt="WRONG STUDIOS" 
              className="w-[109px] h-[69px]"
            />
            <h3 className="font-display text-[30px] leading-[1] uppercase">
              Doing It Wrong Has Never Looked This Right.
            </h3>
            <div className="space-y-4">
              <p className="text-[16px] text-white/70">Social:</p>
              <p className="text-[18px] leading-[34px]">
                Instagram | TikTok | Snapchat
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="font-display text-[30px] leading-[1] uppercase">Navigation</h4>
            <nav className="space-y-4">
              <Link to="/" className="block text-[18px] leading-[34px] hover:text-cyan transition-colors">Home</Link>
              <Link to="/about" className="block text-[18px] leading-[34px] hover:text-cyan transition-colors">About</Link>
              <Link to="/work" className="block text-[18px] leading-[34px] hover:text-cyan transition-colors">our work</Link>
              <Link to="/services" className="block text-[18px] leading-[34px] hover:text-cyan transition-colors">Services</Link>
              <Link to="/philosophy" className="block text-[18px] leading-[34px] hover:text-cyan transition-colors">Philosophy</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-display text-[30px] leading-[1] uppercase">Contact Info</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[16px] text-white/70 mb-2">HQ</p>
                <p className="text-[18px] leading-[34px]">Amsterdam, Netherlands</p>
              </div>
              <div>
                <p className="text-[16px] text-white/70 mb-2">Contact Us</p>
                <a href="mailto:arwin@joinatnexus.com" className="text-[18px] leading-[34px] hover:text-cyan transition-colors">
                  arwin@joinatnexus.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display text-[30px] leading-[1] uppercase">Newsletter Signup</h4>
            <p className="text-[18px] leading-[34px]">Get fresh design insights monthly.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Here" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[14px] placeholder:text-white/40 focus:outline-none focus:border-cyan transition-colors"
              />
              <button className="bg-cyan text-black px-6 py-4 rounded-xl font-bold text-[18px] hover:bg-cyan/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-[18px] leading-[34px] text-white/80">
            © 2025 WRONG STUDIOS — Doing It Wrong Has Never Looked This Right.
          </p>
        </div>
      </div>
    </footer>
  );
}
