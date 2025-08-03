const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-kamray-green mb-12">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-green/20">
            <h3 className="font-serif text-2xl font-bold text-kamray-green mb-4">
              Coaching Individuel
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Développement personnel</li>
              <li>• Leadership</li>
              <li>• Conscience de soi</li>
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-gold/20">
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-4">
              Consulting Entreprises
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Transformation organisationnelle</li>
              <li>• Stratégie</li>
              <li>• Développement humain</li>
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-red/20">
            <h3 className="font-serif text-2xl font-bold text-kamray-red mb-4">
              Formations
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Webinaires</li>
              <li>• Interventions terrain</li>
              <li>• Programmes sur mesure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;