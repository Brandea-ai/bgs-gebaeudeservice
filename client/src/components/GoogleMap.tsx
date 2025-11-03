import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
  className?: string;
}

export default function GoogleMap({
  apiKey,
  center = { lat: 47.3769, lng: 8.5417 }, // Default: Zürich
  zoom = 12,
  markers = [],
  className = "w-full h-96"
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Define callback function
    (window as any).initMap = () => {
      if (!mapRef.current) return;

      // Premium dark map style
      const premiumMapStyle = [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ color: '#1a1a1a' }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#000000' }, { lightness: 13 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#1a1a1a' }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#DC2626' }, { lightness: 14 }, { weight: 1.4 }]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{ color: '#252525' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#2a2a2a' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#3a3a3a' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f1f1f' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#2f2f2f' }]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#2a2a2a' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2a2a2a' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#0a0a0a' }]
        }
      ];

      // Create map with premium style
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: premiumMapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      });

      mapInstanceRef.current = map;

      // Custom SVG marker icon
      const customMarkerSVG = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: '#DC2626',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
        scale: 2,
        anchor: new google.maps.Point(12, 22)
      };

      // Add premium markers
      markers.forEach((markerData, index) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map,
          title: markerData.title,
          icon: customMarkerSVG,
          animation: google.maps.Animation.DROP,
          optimized: false
        });

        // Delayed drop animation for visual effect
        setTimeout(() => {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 2100);
        }, index * 200);

        // Premium info window
        if (markerData.info) {
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="
                padding: 16px;
                max-width: 280px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.4);
              ">
                <div style="
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  margin-bottom: 12px;
                ">
                  <div style="
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
                  ">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 style="
                    font-weight: 700;
                    font-size: 16px;
                    margin: 0;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                  ">${markerData.title}</h3>
                </div>
                <p style="
                  color: #d1d5db;
                  font-size: 14px;
                  line-height: 1.6;
                  margin: 0;
                ">${markerData.info}</p>
                <div style="
                  margin-top: 12px;
                  padding-top: 12px;
                  border-top: 1px solid rgba(255,255,255,0.1);
                ">
                  <a href="tel:+41413205610" style="
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: #DC2626;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 13px;
                    transition: all 0.2s;
                  ">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Jetzt anrufen
                  </a>
                </div>
              </div>
            `
          });

          // Hover effect
          marker.addListener('mouseover', () => {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          });

          marker.addListener('mouseout', () => {
            marker.setAnimation(null);
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).initMap;
    };
  }, [apiKey, center, zoom, markers]);

  return (
    <div 
      ref={mapRef} 
      className={className}
      style={{ 
        borderRadius: '1rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        border: '1px solid rgba(220, 38, 38, 0.2)'
      }}
    />
  );
}
