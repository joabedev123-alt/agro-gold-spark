import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-gradient-gold shadow-gold-intense">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="heading-lg text-foreground mb-6">
            Sua marca agro no{" "}
            <span className="text-gradient-gold">próximo nível</span>{" "}
            começa aqui
          </h2>

          <p className="text-body mb-10 max-w-xl mx-auto">
            Transforme a comunicação do seu negócio com estratégias que
            conectam, engajam e convertem. Fale com nossos especialistas.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/5595991330935"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gold inline-flex items-center gap-3 text-lg group"
          >
            Entrar em contato agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Resposta em até 2h
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Proposta personalizada
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
