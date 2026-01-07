import { 
  ClipboardList, 
  BarChart3, 
  Lightbulb, 
  Globe, 
  FileText, 
  Palette 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ClipboardList,
      title: "Planejamento",
      description: "Análise estratégica e roadmap personalizado para sua marca"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Métricas e insights para decisões baseadas em dados"
    },
    {
      icon: Lightbulb,
      title: "Estratégias",
      description: "Campanhas criativas alinhadas aos objetivos do negócio"
    },
    {
      icon: Globe,
      title: "Planejamento Digital",
      description: "Presença online otimizada e performance contínua"
    },
    {
      icon: FileText,
      title: "Conteúdo",
      description: "Produção de conteúdo relevante e engajador para seu público"
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Identidade visual forte que comunica os valores da marca"
    }
  ];

  return (
    <section id="servicos" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Oferecemos um portfólio completo de soluções para impulsionar sua comunicação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-gold/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
