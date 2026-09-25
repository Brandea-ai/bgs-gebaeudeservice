'use client'

import { Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useChatbot } from '../contexts/ChatbotContext';
import { MagneticHover } from './PremiumParallax';
import { chatEnabled } from '../../../shared/features';
import { company } from '../../../shared/company';

interface AppointmentButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  fullWidth?: boolean;
}

export default function AppointmentButton({
  size = 'lg',
  variant = 'outline',
  className = '',
  fullWidth = false
}: AppointmentButtonProps) {
  const { openChat } = useChatbot();

  // Solange der Chat aus ist (E14, E35), ist die zweite Handlungsaufforderung
  // das Telefon, die erste führt zum Formular (M31).
  if (!chatEnabled) {
    return (
      <MagneticHover>
        <Button asChild size={size} variant={variant} className={`${fullWidth ? 'w-full' : ''} ${className}`}>
          <a href={company.phone.href}>
            <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            {company.phone.display}
          </a>
        </Button>
      </MagneticHover>
    );
  }

  const handleClick = () => {
    openChat(true); // Chat im Terminmodus öffnen
  };

  return (
    <MagneticHover>
      <Button
        size={size}
        variant={variant}
        onClick={handleClick}
        className={`${fullWidth ? 'w-full' : ''} ${className}`}
      >
        <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        Termin vereinbaren
      </Button>
    </MagneticHover>
  );
}
