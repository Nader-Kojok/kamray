import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#a-propos', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#actualites', label: 'Actualités' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/abdelmonem-kaaniche', label: 'LinkedIn', icon: Linkedin },
    { href: 'mailto:contact@kamray-coaching.com', label: 'Email', icon: Mail },
    { href: 'tel:+21612345678', label: 'Téléphone', icon: Phone },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity mb-4"
              aria-label="KAMRAY - Retour à l'accueil"
            >
              <Image
                src="/kamray_logo.svg"
                alt="KAMRAY Logo"
                width={140}
                height={45}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-white/80 mb-4 leading-relaxed">
              Expert tuniso-africain en coaching et consulting pour votre transformation personnelle et professionnelle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl font-bold text-red-500 mb-4">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-bold text-red-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>Coaching Individuel</li>
              <li>Consulting Entreprises</li>
              <li>Formations & Webinaires</li>
              <li>Transformation Organisationnelle</li>
              <li>Leadership Stratégique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold text-red-500 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p>contact@kamray-coaching.com</p>
                  <p>abdelmonem.kaaniche@kamray.tn</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p>+216 XX XXX XXX (Tunisie)</p>
                  <p>+241 XX XX XX XX (Gabon)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p>Tunis, Tunisie</p>
                  <p>Libreville, Gabon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              <p>© {currentYear} KAMRAY Coaching & Consulting. Tous droits réservés.</p>
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/mentions-legales" className="hover:text-red-500 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-red-500 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-red-500 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;