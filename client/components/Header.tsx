import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
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
            <Link 
              to="/" 
              className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
                isActive('/') 
                  ? 'text-[#191919] bg-white font-bold' 
                  : 'text-white/90 hover:text-cyan'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
                isActive('/about') 
                  ? 'text-[#191919] bg-white font-bold' 
                  : 'text-white/90 hover:text-cyan'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
                isActive('/services') 
                  ? 'text-[#191919] bg-white font-bold' 
                  : 'text-white/90 hover:text-cyan'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/work" 
              className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
                isActive('/work') 
                  ? 'text-[#191919] bg-white font-bold' 
                  : 'text-white/90 hover:text-cyan'
              }`}
            >
              Our work
            </Link>
            <Link 
              to="/contact" 
              className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
                isActive('/contact') 
                  ? 'text-[#191919] bg-white font-bold' 
                  : 'text-white/90 hover:text-cyan'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <button className="bg-white text-[#191919] px-6 py-3 rounded-[40px] font-bold text-[18px] hover:bg-white/80 transition-colors capitalize">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}