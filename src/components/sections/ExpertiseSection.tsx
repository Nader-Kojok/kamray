import { Globe, Building2, Handshake } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-kamray-green mb-12">
            Expertise & Domaines d&apos;Intervention
          </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Expertise Géographique
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Afrique du Nord</h4>
                  <p className="text-muted-foreground">Expertise approfondie des marchés tunisien, algérien et marocain</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Afrique Subsaharienne</h4>
                  <p className="text-muted-foreground">Accompagnement des entreprises dans leur expansion africaine</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Coopération Internationale</h4>
                  <p className="text-muted-foreground">Facilitation des partenariats Europe-Afrique</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Secteurs d&apos;Intervention
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-kamray-green/20">
                <h4 className="font-semibold mb-2">Industrie</h4>
                <p className="text-sm text-muted-foreground">Manufacturing, Énergie, Mines</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-kamray-gold/20">
                <h4 className="font-semibold mb-2">Services</h4>
                <p className="text-sm text-muted-foreground">Consulting, IT, Finance</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-kamray-red/20">
                <h4 className="font-semibold mb-2">Secteur Public</h4>
                <p className="text-sm text-muted-foreground">Administrations, ONG</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-kamray-green/20">
                <h4 className="font-semibold mb-2">Start-ups</h4>
                <p className="text-sm text-muted-foreground">Innovation, Tech, Scale-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;