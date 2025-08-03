import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-kamray-green mb-12">
          Témoignages Clients
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-green/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-kamray-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Ahmed Mansouri</h4>
                <p className="text-muted-foreground">CEO, TechStart Tunis</p>
              </div>
            </div>
            <p className="text-muted-foreground italic mb-4">
              &ldquo;Le coaching avec Dr. Kaaniche a transformé ma vision du leadership. Son approche culturellement adaptée nous a permis de tripler notre croissance en 18 mois.&rdquo;
            </p>
            <div className="flex text-kamray-gold gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-kamray-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Sarah Fofana</h4>
                <p className="text-muted-foreground">Directrice RH, Groupe Industriel</p>
              </div>
            </div>
            <p className="text-muted-foreground italic mb-4">
              &ldquo;L&apos;expertise d&apos;Abdelmonem en transformation organisationnelle a été déterminante pour notre expansion en Afrique de l&apos;Ouest. Un accompagnement exceptionnel.&rdquo;
            </p>
            <div className="flex text-kamray-gold gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-kamray-red/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-kamray-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KD</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Karim Diallo</h4>
                <p className="text-muted-foreground">Entrepreneur, Dakar</p>
              </div>
            </div>
            <p className="text-muted-foreground italic mb-4">
              &ldquo;Grâce au programme de coaching individuel, j&apos;ai développé une confiance en moi qui m&apos;a permis de lever 2M€ pour mon projet. Merci Dr. Kaaniche !&rdquo;
            </p>
            <div className="flex text-kamray-gold gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;