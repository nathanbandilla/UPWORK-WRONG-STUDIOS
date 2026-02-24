import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto px-3 md:px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 text-white/70">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/signature.png" alt="Wrong Studios" className="w-[109px] h-[69px]" />
            <h3 className="font-display text-[30px] leading-[29px] uppercase">
              Doing It Wrong Has Never Looked This Right.
            </h3>
            <div className="md:space-y-6">
              <p className="text-[16px] capitalize">SOCIALS</p>
              <p className="text-[15px] md:text-[16px] capitalize space-x-2">
                <a
                  href="https://www.instagram.com/arwinclara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#03E9F4]/50 transition-colors"
                >
                  Instagram |
                </a>
               
                <a
                  href="https://www.tiktok.com/@arwinclara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#03E9F4]/50 transition-colors"
                >
                  TikTok |
                </a>
               
                <a
                  href="https://www.snapchat.com/@arwinandclara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#03E9F4]/50 transition-colors"
                >
                  Snapchat
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:space-y-6">
            <h4 className="md:font-display text-[16px] md:text-[30px] leading-[29px] uppercase ">Navigation</h4>
            <nav className="grid grid-cols-4 gap-2 md:block md:space-y-[35px]">
              <Link to="/" className="block text-[14px] sm:text-[16px] md:text-[18px] capitalize text-center md:text-left hover:text-[#03E9F4]/50 transition-colors">Home</Link>
              <Link to="/about" className="block text-[14px] sm:text-[16px] md:text-[18px] capitalize text-center md:text-left hover:text-[#03E9F4]/50 transition-colors">About</Link>
              <Link to="/services" className="block text-[14px] sm:text-[16px] md:text-[18px] capitalize text-center md:text-left hover:text-[#03E9F4]/50 transition-colors">Services</Link>
              <Link to="/work" className="block text-[14px] sm:text-[16px] md:text-[18px] capitalize text-center md:text-left hover:text-[#03E9F4]/50 transition-colors">Our Work</Link>          
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:space-y-6">
            <h4 className="md:font-display md:text-[30px] leading-[29px] uppercase">Contact Info</h4>
            <div className="space-y-[35px]">
              <div>
                <p className="text-[16px] text-white/70 capitalize mb-2">HQ</p>
                <p className="text-[16px] capitalize">Amsterdam, Netherlands</p>
              </div>
              <div>
                <p className="text-[16px] text-white/70 capitalize mb-2">CONTACT US</p>
                <a href="mailto:arwin@joinatnexus.com" className="text-[16px] lowercase hover:text-[#03E9F4]/50 transition-colors">
                  arwin@joinatnexus.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="w-full mx-auto md:space-y-6 pt-4 md:pt-0">
            <h4 className="md:font-display md:text-[30px] leading-[29px] uppercase">Newsletter Signup</h4>
            <p className="text-[16px] capitalize">Get Wrong Studios Updates Monthly</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Here" 
                className="w-[196px] mr-2 bg-transparent border border-white/10 rounded-xl px-3 py-4 text-[14px] placeholder:text-[#999999] focus:outline-none focus:border-[#03E9F4] transition-colors"
              />
              <button className="w-[104px] bg-[#03E9F4] text-[#191919] px-3 py-4 rounded-[10px] font-bold text-[16px] hover:bg-[#03E9F4]/50 transition-colors capitalize leading-[19.6px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1a1a1a] mb-8" />

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-[12px] capitalize">
            © 2025 WRONG STUDIOS — Doing It Wrong Has Never Looked This Right.
          </p>
        </div>
      </div>
    </footer>
  );
}