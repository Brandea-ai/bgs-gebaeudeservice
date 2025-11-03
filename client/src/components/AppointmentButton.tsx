import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useChatbot } from '../contexts/ChatbotContext';
import MagneticHover from './MagneticHover';

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

  const handleClick = () => {
    openChat(true); // Open chat in appointment mode
  };

  return (
    <MagneticHover>
      <Button
        size={size}
        variant={variant}
        onClick={handleClick}
        className={`${fullWidth ? 'w-full' : ''} ${className}`}
      >
        <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
        Termin vereinbaren
      </Button>
    </MagneticHover>
  );
}
