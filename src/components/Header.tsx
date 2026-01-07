import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Clientes", href: "#clientes" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5595991330935"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold text-sm px-5 py-2.5"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5595991330935"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 btn-primary-gold text-center py-3"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
