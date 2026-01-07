import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/agiliza.agromkt?igsh=MWIxdG95emd4dTY0Ng==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100075945081561&mibextid=rS40aB7S9Ucbxw6v", label: "Facebook" }
  ];

  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Clientes", href: "#clientes" }
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-sm text-muted-foreground mb-6">
              Marketing estratégico para o agronegócio.
              Conectando marcas do campo ao mundo digital.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  (95) 99133-0935
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  agiliza.agromarketing@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Av. Ataíde Teive 3478 - 1º piso/ Sala 01<br />
                  Bairro Buritis - Boa Vista, RR
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba insights sobre marketing agro
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 text-sm rounded-lg bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-shadow">
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Agiliza Agromarketing. Todos os direitos reservados.
            </p>
            <span className="hidden md:inline text-border">|</span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Produzida com 💚 por Camaly
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
