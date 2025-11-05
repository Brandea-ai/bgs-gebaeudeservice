'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

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
  }, [pathname]); // Trigger bei jeder Pathname-Änderung
}
