import { GraduationCap, Globe, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-kamray-green mb-6">
            Dr. Abdelmonem Kaaniche
          </h2>
          <p className="text-xl text-kamray-gold mb-8">
            Expert tuniso-africain en leadership et coaching
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Docteur en ingénierie de l&apos;INSA de Lyon et de l&apos;École des Mines de Paris, 
            Dr. Abdelmonem Kaaniche est un expert reconnu pour son parcours exceptionnel 
            alliant recherche scientifique, leadership industriel et coaching stratégique.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-kamray-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Formation d&apos;Excellence</h3>
              <p className="text-muted-foreground">INSA Lyon & École des Mines Paris</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kamray-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expertise Africaine</h3>
              <p className="text-muted-foreground">Leadership et développement en Afrique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kamray-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Coaching Stratégique</h3>
              <p className="text-muted-foreground">Transformation personnelle & professionnelle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;