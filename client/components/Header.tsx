import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-[60px] py-[30px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Wrong Studios" className="w-[172px] h-[32px]" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-[50px]">
            <Link to="/" className="text-[18px] font-bold text-[#191919] bg-white px-4 py-1 rounded-full capitalize">
              Home
            </Link>
            <Link to="/about" className="text-[18px] text-white/90 hover:text-white transition-colors capitalize">
              About
            </Link>
            <Link to="/services" className="text-[18px] text-white/90 hover:text-white transition-colors capitalize">
              Services
            </Link>
            <Link to="/work" className="text-[18px] text-white/90 hover:text-white transition-colors capitalize">
              Our work
            </Link>
            <Link to="/contact" className="text-[18px] text-white/90 hover:text-white transition-colors capitalize">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-white text-[#191919] px-6 py-3 rounded-[40px] font-bold text-[18px] hover:bg-white/90 transition-colors capitalize">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}