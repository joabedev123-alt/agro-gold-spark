import { Building2, ExternalLink } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    {
      name: "AgroTech Solutions",
      instagram: "@agrotechsolutions",
      segment: "Tecnologia Agrícola"
    },
    {
      name: "Fazenda Boa Vista",
      instagram: "@fazendaboavista",
      segment: "Pecuária de Corte"
    },
    {
      name: "Sementes Premium",
      instagram: "@sementespremium",
      segment: "Insumos Agrícolas"
    },
    {
      name: "Cooperativa Rural Sul",
      instagram: "@coopruralsul",
      segment: "Cooperativa"
    },
    {
      name: "Máquinas Agrícolas BR",
      instagram: "@maquinasagrobr",
      segment: "Maquinário"
    },
    {
      name: "Nutrição Animal Pro",
      instagram: "@nutrianimalpro",
      segment: "Nutrição Animal"
    }
  ];

  return (
    <section id="clientes" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Clientes
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Marcas que <span className="text-gradient-gold">confiam</span> na Agiliza
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Empresas líderes do agronegócio que escolheram a Agiliza para impulsionar sua comunicação
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Building2 className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate group-hover:text-gold transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">{client.segment}</p>
                  <a
                    href={`https://instagram.com/${client.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    {client.instagram}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 bg-gold/5">
            <span className="text-gold font-semibold">+50 marcas atendidas</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">100% satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
