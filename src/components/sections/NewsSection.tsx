import { Calendar, Target } from 'lucide-react';

const NewsSection = () => {
  return (
    <section id="actualites" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-kamray-green mb-12">
          Actualités & Ressources
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Blog & Insights
            </h3>
            <div className="space-y-6">
              <article className="bg-card p-6 rounded-lg border border-kamray-green/20">
                <h4 className="font-semibold text-lg mb-2">Leadership en Afrique : Défis et Opportunités</h4>
                <p className="text-muted-foreground mb-3">Les spécificités du leadership dans le contexte africain et les stratégies d&apos;adaptation...</p>
                <span className="text-sm text-kamray-green font-medium">Lire la suite →</span>
              </article>
              <article className="bg-card p-6 rounded-lg border border-kamray-gold/20">
                <h4 className="font-semibold text-lg mb-2">Transformation Digitale en Tunisie</h4>
                <p className="text-muted-foreground mb-3">Comment accompagner les entreprises tunisiennes dans leur digitalisation...</p>
                <span className="text-sm text-kamray-gold font-medium">Lire la suite →</span>
              </article>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Webinaires & Formations
            </h3>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-kamray-red/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-kamray-red rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Webinaire : Leadership Authentique</h4>
                    <p className="text-sm text-muted-foreground">15 Janvier 2024 - 14h00 GMT</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">Développer un leadership authentique et inspirant dans un contexte multiculturel.</p>
                <button className="text-kamray-red font-medium hover:underline">S&apos;inscrire gratuitement</button>
              </div>
              <div className="bg-card p-6 rounded-lg border border-kamray-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-kamray-green rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Formation : Coaching Stratégique</h4>
                    <p className="text-sm text-muted-foreground">Programme sur 3 mois</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">Maîtriser les techniques de coaching pour transformer votre organisation.</p>
                <button className="text-kamray-green font-medium hover:underline">Découvrir le programme</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;