import { Smartphone, Calendar, Megaphone } from "lucide-react";

const AreasSection = () => {
  const areas = [
    {
      icon: Smartphone,
      title: "Agro Digital",
      description: "Presença digital estratégica com redes sociais, conteúdo e campanhas que conectam sua marca ao público certo.",
      features: ["Redes Sociais", "Mídia Paga", "E-commerce"]
    },
    {
      icon: Calendar,
      title: "Agro Eventos",
      description: "Cobertura completa de feiras, dias de campo e eventos do setor com produção audiovisual profissional.",
      features: ["Cobertura ao Vivo", "Documentários", "Transmissões"]
    },
    {
      icon: Megaphone,
      title: "Agro Comunicação",
      description: "Assessoria de imprensa, relacionamento com mídia especializada e posicionamento institucional.",
      features: ["Assessoria de Imprensa", "PR", "Endomarketing"]
    }
  ];

  return (
    <section id="areas" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Atuação
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Áreas de <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Soluções completas para potencializar a comunicação da sua marca no agronegócio
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="card-premium group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="heading-md text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6">{area.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {area.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
