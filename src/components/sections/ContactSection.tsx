import { MapPin, Phone, Mail, Linkedin, Send } from 'lucide-react';
import MapComponent from '../MapComponent';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center text-kamray-green mb-12">
          Contact & Localisation
        </h2>
        {/* Informations de contact */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Prenez Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@kamray-coaching.com</p>
                  <p className="text-muted-foreground">abdelmonem.kaaniche@kamray.tn</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                  <p className="text-muted-foreground">+216 XX XXX XXX (Tunisie)</p>
                  <p className="text-muted-foreground">+241 XX XX XX XX (Gabon)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kamray-red rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Bureaux</h4>
                  <p className="text-muted-foreground">Tunis, Tunisie</p>
                  <p className="text-muted-foreground">Libreville, Gabon</p>
                  <p className="text-muted-foreground">Consultations en ligne disponibles</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Réseaux Sociaux</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://linkedin.com/in/abdelmonem-kaaniche" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-kamray-green rounded-full flex items-center justify-center hover:bg-kamray-green/90 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
              <button className="bg-kamray-green hover:bg-kamray-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                Réserver une consultation gratuite
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Nos Bureaux
            </h3>
            <MapComponent />
          </div>
        </div>

        
        {/* Carte et Formulaire sur la même ligne */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Formulaire de contact */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Contact Rapide
            </h3>
            <form className="bg-card p-6 rounded-lg border border-kamray-gold/20 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-kamray-green" 
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-kamray-green" 
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-kamray-green"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="coaching">Coaching individuel</option>
                  <option value="consulting">Consulting entreprise</option>
                  <option value="formation">Formation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-kamray-green" 
                  placeholder="Décrivez brièvement votre besoin..."
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-kamray-gold hover:bg-kamray-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
          
          {/* Zones d'intervention déplacées ici */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-kamray-gold mb-6">
              Zones d&apos;Intervention
            </h3>
            <div className="bg-card p-6 rounded-lg border border-kamray-green/20 h-fit">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-kamray-green">Afrique du Nord</h4>
                  <p className="text-muted-foreground">Tunisie • Algérie • Maroc • Libye • Égypte</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-kamray-gold">Afrique de l&apos;Ouest</h4>
                  <p className="text-muted-foreground">Sénégal • Côte d&apos;Ivoire • Ghana • Nigeria • Mali</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-kamray-red">Afrique Centrale</h4>
                  <p className="text-muted-foreground">Gabon • Cameroun • Congo • Guinée Équatoriale</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Interventions sur site :</strong> Disponibles dans toutes les zones d&apos;intervention<br/>
                  <strong>Coaching en ligne :</strong> Sessions disponibles 24h/7j selon les fuseaux horaires
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;