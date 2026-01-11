import { Instagram, Facebook, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Logo className="scale-125" />
        </div>

        {/* Headline */}
        <h1 className="heading-xl text-foreground mb-6 opacity-0 animate-fade-in uppercase" style={{ animationDelay: "0.4s" }}>
          Marketing estratégico para o{" "}
          <span className="text-gradient-gold">Agronegócio</span>
        </h1>

        {/* Subheadline */}
        <p className="text-body max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Produção audiovisual, comunicação dentro e fora da porteira e soluções
          digitais para marcas agro
        </p>

        {/* Primary CTA */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://wa.me/5595991330935"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gold inline-flex items-center gap-2 text-lg group"
          >
            Falar com um especialista
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Social CTAs */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="https://wa.me/5595991330935"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex items-center gap-2"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
