import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header/Navigation - Same as Homepage */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Service Section 1: Creative Strategy & Identity */}
      <ServiceSection1 />

      {/* Service Section 2: Short-Form Content Production */}
      <ServiceSection2 />

      {/* Service Section 3: Community & Trend Integration */}
      <ServiceSection3 />

      {/* Why It Matters Section */}
      <WhyItMattersSection />

      {/* Footer - Same as Homepage */}
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
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=344" 
                alt="WRONG STUDIOS" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">WRONG STUDIOS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-[18px] text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-[18px] text-white/90 hover:text-white transition-colors">About</Link>
            <div className="bg-white px-4 py-1 rounded-full">
              <Link to="/services" className="text-[18px] font-bold text-[#191919]">Services</Link>
            </div>
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
    <section className="relative min-h-[685px] pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/484cc3e456b7ea69579eb321ad220de8bf7a4a92?width=2840" 
          alt="" 
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20 mx-auto max-w-[1420px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center pt-32">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-2 bg-white" />
          <div className="h-6 w-[110px] bg-gradient-to-r from-cyan/60 to-transparent flex items-center">
            <span className="font-display text-[24px] tracking-wider ml-4 text-white">OUR SERVICES</span>
          </div>
          <div className="h-px w-2 bg-white" />
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-[60px] md:text-[94px] leading-[1.05] uppercase max-w-[1054px] mx-auto">
          <span className="text-white/60">We Don't Play It Safe.</span>
          <br />
          <span className="text-white">We Build Brands That Feel Human.</span>
        </h1>
      </div>
    </section>
  );
}

function ServiceSection1() {
  const features = [
    { icon: CheckIcon, text: "Brand Voice & Personality Systems" },
    { icon: CheckIcon, text: "Visual Identity Direction" },
    { icon: CheckIcon, text: "Storytelling Frameworks" },
    { icon: CheckIcon, text: "Social Media Tone Of Voice Guides" }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[605/578]">
            <div className="absolute inset-0 rounded-[30px] overflow-hidden border-4 border-cyan/20">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/73d9be06553e2f340df07115d643a359327fa87c?width=1170" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="h-px w-2 bg-white" />
              <div className="h-6 bg-gradient-to-r from-cyan/60 to-transparent flex items-center pr-8">
                <span className="font-display text-[24px] tracking-wider ml-4 text-white">01. CREATIVE STRATEGY & IDENTITY</span>
              </div>
              <div className="h-px w-2 bg-white" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-[60px] md:text-[70px] leading-[1] uppercase">
              Define the voice<br />before you speak.
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[34px] text-white/90">
              we help you find your tone, attitude and digital personality; the human behind the logo. from storytelling frameworks to content pillars, we build strategies that feel as natural as the creators who inspire them.
            </p>

            {/* Features */}
            <div className="space-y-7">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-5">
                  <feature.icon />
                  <span className="text-[20px] font-bold text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSection2() {
  const features = [
    { icon: CheckIcon, text: "Concept Development & Scriptwriting" },
    { icon: CheckIcon, text: "On-Set Direction & Shooting" },
    { icon: CheckIcon, text: "High-Impact Short-Form Video Editing" },
    { icon: CheckIcon, text: "Platform-Specific Optimization (TikTok / Reels / Shorts)" }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with border */}
      <div className="max-w-[1420px] mx-auto px-8">
        <div className="border border-[#292929] rounded-3xl overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-30 mix-blend-plus-darker">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3991c2998fe144c3ed72c4164b2a3b3cbbfb9e21?width=2840" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Content First on Mobile, Second on Desktop */}
              <div className="space-y-8 order-2 md:order-1">
                {/* Section Label */}
                <div className="flex items-center gap-2">
                  <div className="h-px w-2 bg-white" />
                  <div className="h-6 bg-gradient-to-r from-cyan/60 to-transparent flex items-center pr-8">
                    <span className="font-display text-[24px] tracking-wider ml-4 text-white">02. SHORT-FORM CONTENT PRODUCTION</span>
                  </div>
                  <div className="h-px w-2 bg-white" />
                </div>

                {/* Heading */}
                <h2 className="font-display text-[60px] md:text-[70px] leading-[1] uppercase">
                  Scroll-Stopping. Story<br />Driven. Unforgettable.
                </h2>

                {/* Description */}
                <p className="text-[18px] leading-[34px] text-white/90">
                  Short-form content is the language of the internet — and we speak it fluently. We plan, shoot, and edit high-performing Reels, TikTok's, & social clips that don't just get views, they get remembered.
                </p>

                {/* Features */}
                <div className="space-y-7">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <feature.icon />
                      <span className="text-[20px] font-bold text-white/90">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Mockup - First on Desktop, Second on Mobile */}
              <div className="relative w-full order-1 md:order-2">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSection3() {
  const features = [
    { icon: CheckIcon, text: "Social Listening & Trend Mapping" },
    { icon: CheckIcon, text: "Creator & Influencer Collaborations" },
    { icon: CheckIcon, text: "Cultural Campaigns & Challenges" },
    { icon: CheckIcon, text: "Audience Interaction & Community Growth" }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[605/578]">
            <div className="absolute inset-0 rounded-[30px] overflow-hidden border-4 border-cyan/20">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a79cdbdf10eab4acc6016e4e449e6a422efc9685?width=1170" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="h-px w-2 bg-white" />
              <div className="h-6 bg-gradient-to-r from-cyan/60 to-transparent flex items-center pr-8">
                <span className="font-display text-[24px] tracking-wider ml-4 text-white">03. COMMUNITY & TREND INTEGRATION</span>
              </div>
              <div className="h-px w-2 bg-white" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-[60px] md:text-[70px] leading-[1] uppercase">
              We don't chase<br />trends we live them.
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[34px] text-white/90">
              We align your brand with culture, not noise, embedding your content into conversations that matter. From meme culture to creator collabs, we make sure your brand feels like it belongs in the feed.
            </p>

            {/* Features */}
            <div className="space-y-7">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-5">
                  <feature.icon />
                  <span className="text-[20px] font-bold text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  const stats = [
    { number: "95%", description: "of brands fail to make people stop scrolling — we make them pause." },
    { number: "80%", description: "of online engagement now happens through short-form content." },
    { number: "10x", description: "Higher engagement when brands act human — not corporate." },
    { number: "1B+\", description: \"Views generated by our team — proof that \"doing it wrong\" works." }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Why It Matters */}
          <div className="space-y-10">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="h-px w-2 bg-white" />
              <div className="h-6 bg-gradient-to-r from-cyan/60 to-transparent flex items-center pr-8">
                <span className="font-display text-[24px] tracking-wider ml-4 text-white">WHY IT MATTERS</span>
              </div>
              <div className="h-px w-2 bg-white" />
            </div>

            {/* Description */}
            <p className="font-display text-[40px] md:text-[40px] leading-[1.2] uppercase text-white">
              In today's digital chaos, attention is the new currency and it's shrinking by the second. Most brands post endlessly, but very few actually connect. We build short-form content that breaks through the noise and makes people feel something before they scroll away.
            </p>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-6">
                <div className="font-display text-[75px] font-bold leading-[1.2] tracking-tight text-white">
                  {stat.number}
                </div>
                <div className="h-px bg-white/20 w-full" />
                <p className="text-[18px] leading-[34px] text-white/90">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[605px] h-[578px] mx-auto">
      {/* Left Phone */}
      <div className="absolute left-0 top-0 w-[40%] h-full">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent rounded-[30px]" style={{ transform: 'skewY(-2deg)' }} />
          <div className="absolute inset-0 rounded-[30px] overflow-hidden border-2 border-cyan/20" style={{ transform: 'skewY(-2deg)' }}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/db97d44be45145259cf315d885410297/5b3c3abf823a4e35960cbb33399017ce?format=webp&width=800" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Phone */}
      <div className="absolute right-0 top-0 w-[40%] h-full">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-cyan/10 to-transparent rounded-[30px]" style={{ transform: 'skewY(2deg)' }} />
          <div className="absolute inset-0 rounded-[30px] overflow-hidden border-2 border-cyan/20" style={{ transform: 'skewY(2deg)' }}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/db97d44be45145259cf315d885410297/5b3c3abf823a4e35960cbb33399017ce?format=webp&width=800" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M16.4589 2.04454C16.4816 2.06233 16.5043 2.08012 16.5277 2.09845C17.1482 2.58924 17.7298 3.16304 18.1951 3.8037C18.2455 3.8729 18.2969 3.94115 18.3486 4.00939C19.9319 6.12946 20.5411 8.86286 20.1809 11.4658C19.9126 13.2383 19.1862 14.8864 18.0788 16.2914C18.061 16.3141 18.0432 16.3368 18.0249 16.3602C17.5341 16.9808 16.9603 17.5623 16.3196 18.0277C16.2504 18.078 16.1822 18.1295 16.1139 18.1811C13.9947 19.7638 11.2453 20.3832 8.64218 20.0107C7.09608 19.7657 5.60709 19.1963 4.33034 18.2851C4.28783 18.2549 4.24532 18.2246 4.20152 18.1934C3.45025 17.6434 2.7301 16.9964 2.17047 16.2499C2.15082 16.2242 2.13116 16.1985 2.11091 16.172C1.73813 15.683 1.42071 15.1726 1.13207 14.63C1.11517 14.5985 1.09826 14.567 1.08084 14.5345C-0.118208 12.2671 -0.302061 9.46825 0.442023 7.03162C0.828723 5.80485 1.39689 4.66329 2.21201 3.66445C2.24488 3.62311 2.27776 3.58178 2.31163 3.53919C2.7948 2.94175 3.34881 2.38019 3.97116 1.92819C4.04036 1.87784 4.10862 1.82637 4.17686 1.77472C7.33956 -0.58719 11.5622 -0.684434 16.4589 2.04454ZM4.69135 4.05985C4.57956 4.16288 4.57956 4.16288 4.46955 4.25033C4.32001 4.37081 4.20465 4.51496 4.08113 4.66131C4.03342 4.716 4.03342 4.716 3.98475 4.7718C3.71064 5.09103 3.47313 5.42595 3.25041 5.78278C3.23462 5.8078 3.21883 5.83282 3.20256 5.85859C2.1232 7.59213 1.82442 9.77783 2.26409 11.7572C2.63222 13.3074 3.41409 14.6311 4.53802 15.7514C4.56544 15.7803 4.59285 15.8091 4.6211 15.8389C5.94748 17.2197 7.95867 17.9846 9.84944 18.0477C12.0563 18.0904 14.1151 17.3219 15.7112 15.793C15.7805 15.7238 15.8498 15.6546 15.9189 15.5853C15.9477 15.5579 15.9766 15.5305 16.0063 15.5022C16.271 15.248 16.4953 14.9694 16.7081 14.6715C16.7262 14.6462 16.7443 14.621 16.7629 14.595C17.4632 13.6029 17.9177 12.4601 18.1203 11.2655C18.1252 11.2378 18.13 11.21 18.135 11.1814C18.4836 9.10738 17.8929 6.9817 16.7004 5.27948C16.5045 5.0106 16.2913 4.76553 16.0635 4.52388C15.9604 4.41209 15.9604 4.41209 15.873 4.30209C15.7525 4.15254 15.6083 4.03718 15.462 3.91366C15.4255 3.88186 15.3891 3.85005 15.3515 3.81729C15.0323 3.54317 14.6974 3.30567 14.3405 3.08294C14.3155 3.06715 14.2905 3.05136 14.2647 3.0351C11.277 1.17483 7.225 1.67098 4.69135 4.05985Z" fill="#03E9F4"/>
      <path d="M13.9865 6.14029C14.0241 6.13911 14.0618 6.13793 14.1006 6.13672C14.3814 6.18267 14.5759 6.41835 14.7679 6.61276C14.7938 6.63835 14.8197 6.66395 14.8464 6.69032C14.8713 6.71527 14.8961 6.74022 14.9217 6.76592C14.9441 6.78836 14.9664 6.81079 14.9894 6.83391C15.1106 6.97728 15.145 7.10171 15.1495 7.28772C15.1512 7.32477 15.1528 7.36182 15.1545 7.4C15.1012 7.69111 14.8845 7.91646 14.6796 8.11872C14.6559 8.14266 14.6321 8.16661 14.6076 8.19127C14.5288 8.27061 14.4495 8.3495 14.3702 8.42839C14.3133 8.4855 14.2564 8.54264 14.1995 8.5998C14.0455 8.75438 13.8911 8.90856 13.7366 9.06265C13.5748 9.22417 13.4132 9.38599 13.2517 9.54775C12.9804 9.81923 12.7089 10.0904 12.4372 10.3615C12.1233 10.6748 11.8097 10.9885 11.4965 11.3025C11.2272 11.5723 10.9577 11.8419 10.6881 12.1112C10.5271 12.272 10.3662 12.4329 10.2055 12.5939C10.0546 12.7453 9.90326 12.8963 9.75173 13.0471C9.6962 13.1025 9.64078 13.158 9.58547 13.2136C9.50992 13.2895 9.43399 13.365 9.35795 13.4404C9.33619 13.4624 9.31443 13.4844 9.29202 13.5071C9.09685 13.6992 8.91104 13.8163 8.63355 13.8167C8.59676 13.8175 8.55998 13.8183 8.52208 13.8191C8.22687 13.7682 8.02429 13.563 7.82145 13.3582C7.79406 13.331 7.76666 13.3038 7.73844 13.2758C7.64861 13.1865 7.55924 13.0968 7.46989 13.007C7.4073 12.9445 7.34469 12.882 7.28206 12.8196C7.15115 12.6888 7.02046 12.5579 6.88993 12.4268C6.7228 12.2589 6.55512 12.0917 6.38726 11.9245C6.25797 11.7957 6.12898 11.6666 6.00008 11.5373C5.93837 11.4756 5.87657 11.4139 5.81467 11.3522C5.72818 11.2661 5.6421 11.1795 5.55611 11.0928C5.53061 11.0676 5.5051 11.0423 5.47882 11.0163C5.27932 10.8138 5.14495 10.6248 5.14452 10.3302C5.14372 10.293 5.14292 10.2557 5.14209 10.2173C5.192 9.93749 5.42508 9.7435 5.61959 9.55143C5.64519 9.52552 5.67078 9.4996 5.69715 9.4729C5.7221 9.44806 5.74705 9.42322 5.77276 9.39762C5.79519 9.37528 5.81762 9.35294 5.84074 9.32992C5.98577 9.20728 6.10905 9.17508 6.29715 9.17242C6.33468 9.17124 6.37221 9.17006 6.41089 9.16885C6.76813 9.22468 7.00194 9.51565 7.24323 9.76106C7.28283 9.80089 7.32246 9.8407 7.36211 9.88048C7.4657 9.98454 7.56891 10.089 7.67204 10.1935C7.77763 10.3004 7.88358 10.4069 7.9895 10.5134C8.19674 10.722 8.40359 10.931 8.61018 11.1402C8.87544 10.9217 9.11597 10.6807 9.35769 10.437C9.40322 10.3912 9.44876 10.3455 9.49431 10.2998C9.59188 10.2018 9.6894 10.1037 9.78687 10.0056C9.94103 9.85049 10.0954 9.69557 10.2498 9.54069C10.6887 9.10041 11.1274 8.65996 11.5657 8.21908C11.8081 7.97521 12.0508 7.73156 12.2937 7.48817C12.4473 7.33428 12.6005 7.18012 12.7536 7.02576C12.8488 6.92989 12.9443 6.83429 13.0398 6.73876C13.084 6.69443 13.1282 6.64999 13.1722 6.60544C13.2323 6.54462 13.2928 6.4842 13.3533 6.42386C13.3871 6.38995 13.4208 6.35605 13.4556 6.32111C13.621 6.18156 13.7731 6.14331 13.9865 6.14029Z" fill="#03E9F4"/>
    </svg>
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
