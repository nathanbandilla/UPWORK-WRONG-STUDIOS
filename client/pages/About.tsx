import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header/Navigation - Same as Homepage */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <StorySection />

      {/* Identity Section */}
      <IdentitySection />

      {/* CTA Section */}
      <CTASection />

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
              <svg viewBox="0 0 49 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8875 7.66753L24.0342 25.5133L25.7114 6.34269C26.0895 6.28865 26.4706 6.24527 26.8544 6.21285L25.1571 25.6134L32.128 6.4609C32.5037 6.52832 32.8754 6.60604 33.2429 6.69375L26.2158 26.0005L38.3413 8.68345C38.6709 8.86779 38.9944 9.06108 39.3117 9.26297L27.141 26.6446L43.5499 12.8759C43.7994 13.157 44.0411 13.4449 44.2745 13.7395L27.8632 27.5103L47.0964 18.5416C47.2401 18.8892 47.3742 19.2414 47.4985 19.598L28.3437 28.53L48.5719 24.9632C48.5944 25.3404 48.6064 25.72 48.6075 26.1017L28.5358 29.6409L47.9358 31.3381C47.8372 31.7105 47.7282 32.0783 47.6094 32.4412L28.4346 30.7636L45.4661 36.9626C45.257 37.2899 45.0387 37.6105 44.8117 37.9241L28.0538 31.8247L41.6625 41.3536C41.3668 41.6089 41.0636 41.8556 40.7535 42.0933L27.4084 32.749L37.1132 44.3147C36.7596 44.4818 36.4006 44.6388 36.0365 44.7854L26.5438 33.4724L32.327 45.8745C31.9446 45.9473 31.5586 46.0092 31.1696 46.0598L25.5213 33.947L27.6829 46.2064C27.3958 46.1935 27.1076 46.1745 26.8185 46.1492C26.7199 46.1405 26.6214 46.1312 26.5232 46.1212L24.4109 34.1418L23.4124 45.5551C23.04 45.4565 22.6722 45.3476 22.3093 45.2287L23.2877 34.0454L19.6194 44.1241C19.2789 43.9541 18.9441 43.7749 18.6154 43.5866L22.2279 33.6614L16.341 42.0687C16.0422 41.8383 15.7503 41.5998 15.4656 41.3535L21.3062 33.0123L13.5817 39.4938C13.3322 39.2128 13.0905 38.9248 12.8571 38.6303L20.5791 32.1508L11.353 36.453C11.1598 36.1298 10.9756 35.8009 10.8005 35.4667L20.1068 31.1271L9.69986 32.9622C9.57156 32.6058 9.45313 32.2449 9.34489 31.88L19.9074 30.0176L8.72391 29.0392C8.66985 28.6611 8.62645 28.28 8.594 27.8962L20.0026 28.8943L8.57644 24.7355C8.58366 24.6363 8.59162 24.537 8.60032 24.4375C8.62555 24.1492 8.65676 23.8628 8.69382 23.5786L20.393 27.8367L9.44338 20.1697C9.56075 19.7953 9.68869 19.426 9.82682 19.062L21.0408 26.9141L11.5441 15.5964C11.7517 15.2633 11.9686 14.937 12.1946 14.6178L21.9033 26.1882L15.0156 11.4173C15.3035 11.1532 15.5991 10.8976 15.9019 10.6507L22.9242 25.71L19.827 8.14493C20.1752 7.97583 20.5289 7.81659 20.8875 7.66753Z" fill="white"/>
              </svg>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">WRONG STUDIOS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/" className="text-[18px] text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-[18px] font-bold text-[#191919] bg-white px-4 py-1 rounded-full">About</Link>
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
    <section className="relative min-h-[576px] pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/33fa508b1d3fc266e702260f64313319c472e24b?width=2840" 
          alt="" 
          className="w-full h-full object-cover rounded-3xl border-2 border-white/20"
        />
      </div>

      {/* Decorative Images */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/4d6113d07fb2ce6d71c0def8e601bc7722a602a2?width=429" 
        alt="" 
        className="absolute left-4 md:left-10 top-[200px] md:top-[240px] w-[150px] md:w-[214px] h-[172px] md:h-[246px] -rotate-[10deg] rounded-3xl object-cover"
      />
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/de59b0bb3c98f87642b3c7ac5ea7a93886bc1ff0?width=425" 
        alt="" 
        className="absolute right-4 md:right-32 top-[200px] md:top-[240px] w-[150px] md:w-[212px] h-[172px] md:h-[246px] rotate-[10deg] rounded-3xl object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-cyan" />
          <span className="font-display text-sm tracking-wider">ABOUT US</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-cyan" />
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
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[87px] bg-gradient-to-r from-transparent to-cyan" />
            <span className="font-display text-sm tracking-wider">OUR STORY</span>
            <div className="h-px flex-1 max-w-[87px] bg-gradient-to-l from-transparent to-cyan" />
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
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl" />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/2efc7961ebd6c465c3283516c6004e292dd9504f?width=2840" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-plus-lighter rounded-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1420px] mx-auto px-8">
        <div className="max-w-[795px] mx-auto text-center space-y-6">
          <h2 className="font-display text-[80px] md:text-[136px] leading-[0.82] uppercase">
            WRONG STUDIOS IS
          </h2>

          <div className="font-display text-[80px] md:text-[136px] leading-[0.82] uppercase -rotate-3 py-4">
            <span 
              className="inline-block"
              style={{
                WebkitTextStroke: '4px white',
                WebkitTextFillColor: 'transparent'
              }}
            >
              A CREATOR-LED
            </span>
          </div>

          <h3 className="font-display text-[80px] md:text-[136px] leading-[0.82] uppercase text-white">
            PRODUCTION HOUSE
          </h3>

          <div className="font-display text-[80px] md:text-[136px] leading-[0.82] uppercase rotate-3 py-4">
            <span 
              className="inline-block"
              style={{
                WebkitTextStroke: '4px white',
                WebkitTextFillColor: 'transparent'
              }}
            >
              BUILT BY ARWIN
            </span>
          </div>

          <h4 className="font-display text-[80px] md:text-[136px] leading-[0.82] uppercase text-white">
            AND CLARA
          </h4>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="space-y-16">
          {/* Main CTA Text */}
          <div className="space-y-4">
            <h2 className="font-display text-[120px] md:text-[294px] leading-[0.62] uppercase font-bold text-white">
              READY TO
            </h2>
            
            <div className="pl-8 md:pl-32">
              <h3 
                className="font-display text-[100px] md:text-[264px] leading-[0.69] uppercase font-bold"
                style={{
                  WebkitTextStroke: '9px white',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                STOP BEING
              </h3>
            </div>

            <h4 className="font-display text-[100px] md:text-[244px] leading-[0.75] uppercase font-bold text-white">
              IGNORED?
            </h4>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 pt-8">
            <button className="group relative bg-black border-2 border-white rounded-xl px-8 py-8 md:px-12 md:py-10 hover:bg-white/5 transition-all">
              <span className="font-display text-[40px] md:text-[60px] leading-[1.1] uppercase text-white">
                JOIN THE WRONG SIDE
              </span>
            </button>
            
            <div className="w-[100px] md:w-[116px] h-[100px] md:h-[128px] flex items-center justify-center bg-transparent border-2 border-white rounded-xl group-hover:bg-white/5 transition-all">
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
