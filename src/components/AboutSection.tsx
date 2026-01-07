import { Wheat, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Wheat,
      title: "Raízes no Campo",
      description: "Entendemos a cultura e os desafios do agronegócio brasileiro."
    },
    {
      icon: Target,
      title: "Estratégia Focada",
      description: "Planejamento personalizado para cada perfil de cliente agro."
    },
    {
      icon: TrendingUp,
      title: "Resultados Reais",
      description: "Métricas claras e crescimento sustentável para sua marca."
    }
  ];

  return (
    <section id="sobre" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Sobre Nós
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Conectamos o <span className="text-gradient-gold">agro</span> ao mundo digital
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Somos uma agência especializada em marketing para o agronegócio, 
            combinando expertise em comunicação rural com as mais avançadas 
            estratégias digitais para posicionar sua marca como referência no setor.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-premium group text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-md text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Clientes Atendidos" },
            { value: "200+", label: "Projetos Entregues" },
            { value: "5", label: "Anos de Experiência" },
            { value: "100%", label: "Foco no Agro" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
