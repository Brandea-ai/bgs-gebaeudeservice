import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom Hook für Anchor-Scroll nach Navigation
 * Scrollt automatisch zu einem Element mit der ID aus dem URL-Hash
 *
 * Verwendung:
 * import { useScrollToAnchor } from '@/hooks/useScrollToAnchor';
 *
 * function MyPage() {
 *   useScrollToAnchor();
 *   return <div>...</div>
 * }
 */
export function useScrollToAnchor() {
  const [location] = useLocation();

  useEffect(() => {
    // Warte kurz, bis die Seite vollständig gerendert ist
    const timer = setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        // Entferne das # vom Hash
        const id = hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, 100); // 100ms Verzögerung für besseres Rendering

    return () => clearTimeout(timer);
  }, [location]); // Trigger bei jeder Location-Änderung
}
