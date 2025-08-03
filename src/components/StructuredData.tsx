import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kamray.com/#organization",
        "name": "KAMRAY Coaching & Consulting",
        "url": "https://kamray.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kamray.com/kamray_logo.svg",
          "width": 300,
          "height": 300
        },
        "description": "Expert tuniso-africain en coaching et consulting. Transformation personnelle et professionnelle avec Dr. Abdelmonem Kaaniche.",
        "founder": {
          "@type": "Person",
          "@id": "https://kamray.com/#person",
          "name": "Dr. Abdelmonem Kaaniche",
          "jobTitle": "Expert en coaching et consulting",
          "description": "Expert tuniso-africain en leadership et coaching stratégique",
          "image": {
            "@type": "ImageObject",
            "url": "https://kamray.com/abdelmonem.webp"
          },
          "nationality": "Tunisian",
          "knowsAbout": [
            "Leadership",
            "Coaching stratégique",
            "Développement personnel",
            "Transformation professionnelle",
            "Consulting",
            "Afrique"
          ]
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Afrique"
          },
          {
            "@type": "Place",
            "name": "Tunisie"
          },
          {
            "@type": "Place",
            "name": "International"
          }
        ],
        "serviceType": [
          "Coaching personnel",
          "Coaching professionnel",
          "Consulting stratégique",
          "Formation en leadership",
          "Développement organisationnel"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["French", "Arabic", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kamray.com/#website",
        "url": "https://kamray.com",
        "name": "KAMRAY Coaching & Consulting",
        "description": "Site officiel de KAMRAY Coaching & Consulting dirigé par Dr. Abdelmonem Kaaniche",
        "publisher": {
          "@id": "https://kamray.com/#organization"
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kamray.com/#service",
        "name": "KAMRAY Coaching & Consulting",
        "description": "Services de coaching et consulting pour la transformation personnelle et professionnelle",
        "provider": {
          "@id": "https://kamray.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Afrique"
        },
        "serviceType": "Coaching and Consulting",
        "audience": {
          "@type": "Audience",
          "audienceType": "Professionnels, Dirigeants, Entrepreneurs"
        }
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;