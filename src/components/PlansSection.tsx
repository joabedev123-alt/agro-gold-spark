import { Check, Crown, Zap, Shield } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      icon: Shield,
      color: "basic",
      colorClass: "text-plan-basic border-plan-basic/50 bg-plan-basic/10",
      btnClass: "bg-plan-basic hover:bg-plan-basic/90",
      description: "Ideal para iniciar sua presença digital",
      features: [
        "Gestão de 2 redes sociais",
        "8 posts mensais",
        "Relatório mensal básico",
        "Suporte via e-mail",
        "1 reunião mensal"
      ],
      cta: "Solicitar proposta"
    },
    {
      name: "Padrão",
      icon: Zap,
      color: "standard",
      colorClass: "text-plan-standard border-plan-standard/50 bg-plan-standard/10",
      btnClass: "bg-plan-standard hover:bg-plan-standard/90",
      description: "Para marcas que buscam crescimento",
      features: [
        "Gestão de 4 redes sociais",
        "16 posts mensais",
        "Campanhas de mídia paga",
        "Relatórios semanais",
        "Suporte prioritário",
        "2 reuniões mensais"
      ],
      cta: "Solicitar proposta"
    },
    {
      name: "Premium",
      icon: Crown,
      color: "premium",
      colorClass: "text-plan-premium border-plan-premium bg-plan-premium/10",
      btnClass: "bg-gradient-gold",
      description: "Solução completa para líderes",
      popular: true,
      features: [
        "Gestão ilimitada de redes",
        "Conteúdo diário",
        "Produção audiovisual inclusa",
        "Mídia paga gerenciada",
        "Relatórios em tempo real",
        "Suporte 24/7",
        "Reuniões semanais",
        "Consultoria estratégica"
      ],
      cta: "Solicitar proposta"
    }
  ];

  return (
    <section id="planos" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Planos
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Escolha o plano ideal para sua{" "}
            <span className="text-gradient-gold">marca</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Pacotes personalizados para atender às necessidades específicas do seu negócio
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative card-premium ${plan.popular ? 'border-gold shadow-gold' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-bold rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 pt-2">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${plan.colorClass}`}>
                  <plan.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.color === 'premium' ? 'text-gold' : plan.color === 'standard' ? 'text-plan-standard' : 'text-plan-basic'}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${plan.btnClass}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
