'use client';

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

// Interface pour les bureaux
interface Office {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
}

// Données des bureaux
const offices: Office[] = [
  {
    id: 'tunis',
    name: 'Bureau Tunis',
    address: 'Centre-ville, Tunis, Tunisie',
    lat: 36.8065,
    lng: 10.1815,
    phone: '+216 XX XXX XXX',
    email: 'tunis@kamray.com'
  },
  {
    id: 'libreville',
    name: 'Bureau Libreville',
    address: 'Libreville, Gabon',
    lat: 0.4162,
    lng: 9.4673,
    phone: '+241 XX XX XX XX',
    email: 'libreville@kamray.com'
  }
];

const MapComponent = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office>(offices[0]);
  const [Map, setMap] = useState<React.ComponentType<{
    center: [number, number];
    zoom: number;
    style: React.CSSProperties;
    children: React.ReactNode;
  }> | null>(null);
  const [TileLayer, setTileLayer] = useState<React.ComponentType<{
    url: string;
    attribution: string;
  }> | null>(null);
  const [Marker, setMarker] = useState<React.ComponentType<{
    position: [number, number];
    children: React.ReactNode;
  }> | null>(null);
  const [Popup, setPopup] = useState<React.ComponentType<{
    children: React.ReactNode;
  }> | null>(null);

  useEffect(() => {
    // Import dynamique pour éviter les erreurs SSR
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined') {
        // Charger les styles CSS de Leaflet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        const L = await import('leaflet');
        const { MapContainer, TileLayer: TL, Marker: M, Popup: P } = await import('react-leaflet');
        
        // Configuration des icônes par défaut
        delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setMap(MapContainer);
        setTileLayer(TL);
        setMarker(M);
        setPopup(P);
      }
    };

    loadLeaflet();
  }, []);

  if (!Map || !TileLayer || !Marker || !Popup) {
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Sélecteur de bureau */}
      <div className="flex space-x-2">
        {offices.map((office) => (
          <button
            key={office.id}
            onClick={() => setSelectedOffice(office)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedOffice.id === office.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {office.name}
          </button>
        ))}
      </div>

      {/* Carte */}
      <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
        <Map
          center={[selectedOffice.lat, selectedOffice.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          key={selectedOffice.id} // Force re-render when office changes
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[selectedOffice.lat, selectedOffice.lng]}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-green-600">{selectedOffice.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedOffice.address}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gray-500">{selectedOffice.phone}</p>
                  <p className="text-xs text-gray-500">{selectedOffice.email}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>

      {/* Informations du bureau sélectionné */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">{selectedOffice.name}</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-green-600" />
            {selectedOffice.address}
          </p>
          <p>{selectedOffice.phone}</p>
          <p>{selectedOffice.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;