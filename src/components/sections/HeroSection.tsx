import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop&crop=center"
          alt="Paysage africain inspirant"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left text-white order-2 lg:order-1">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              KAMRAY Coaching & Consulting
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light leading-relaxed">
              Expertise en transformation personnelle et professionnelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-kamray-red hover:bg-kamray-red/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Découvrir nos services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-kamray-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Prendre rendez-vous
              </button>
            </div>
          </div>
          
          {/* Photo d'Abdelmonem */}
           <div className="flex justify-center lg:justify-end order-1 lg:order-2">
             <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
               <Image
                 src="/abdelmonem.webp"
                 alt="Portrait professionnel d'Abdelmonem - KAMRAY Coaching & Consulting"
                 fill
                 className="object-cover"
                 priority
               />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;