import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/background_CTA.webp"
          alt="Background CTA"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Prêt à transformer votre avenir ?
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Rejoignez les leaders qui font confiance à KAMRAY pour leur développement
        </p>
        <div className="bg-kamray-red/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 mb-8 max-w-md mx-auto">
          <p className="text-lg font-semibold mb-2">⚡ Offre Limitée</p>
          <p className="text-sm">Seulement <strong>15 places disponibles</strong> ce mois-ci pour nos programmes de coaching premium</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-kamray-red hover:bg-kamray-red/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
            Consultation gratuite
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-kamray-green px-8 py-3 rounded-lg font-semibold transition-colors">
            Nos programmes
          </button>
        </div>
        <p className="text-sm mt-4 opacity-90">
          💼 Plus de 500 dirigeants accompagnés • 🌍 Présent dans 12 pays africains
        </p>
      </div>
    </section>
  );
}