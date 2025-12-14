import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Our work" },
    { to: "/contact", label: "Contact" },
  ];

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`text-[18px] px-4 py-1 rounded-full capitalize transition-colors ${
        isActive(to)
          ? "text-[#191919] bg-white font-bold"
          : "text-white/90 hover:text-cyan"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-4 md:py-[30px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Wrong Studios"
              className="w-[140px] md:w-[172px] h-[26px] md:h-[32px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[50px]">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white text-[#191919] px-6 py-3 rounded-[40px] font-bold text-[18px] hover:bg-white/80 transition-colors capitalize">
              Contact us
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden text-white hover:text-cyan transition-colors p-2"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-black border-white/20 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <img
                      src="/logo.svg"
                      alt="Wrong Studios"
                      className="w-[140px] h-[26px]"
                    />
                    <SheetTrigger asChild>
                      <button
                        className="text-white hover:text-cyan transition-colors p-2"
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </SheetTrigger>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4 p-6 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`text-[18px] px-4 py-3 rounded-full capitalize transition-colors ${
                          isActive(link.to)
                            ? "text-[#191919] bg-white font-bold"
                            : "text-white/90 hover:text-cyan hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA Button */}
                  <div className="p-6 border-t border-white/20">
                    <button className="w-full bg-white text-[#191919] px-6 py-3 rounded-[40px] font-bold text-[18px] hover:bg-white/80 transition-colors capitalize">
                      Contact us
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}