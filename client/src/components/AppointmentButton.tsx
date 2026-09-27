"use client";

import { Calendar, Phone } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./ui/button";
import { useChatbot } from "../contexts/ChatbotContext";
import { chatEnabled } from "../../../shared/features";
import { company } from "../../../shared/company";

interface AppointmentButtonProps {
  size?: VariantProps<typeof buttonVariants>["size"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
  fullWidth?: boolean;
}

export default function AppointmentButton({
  size = "lg",
  variant = "outline",
  className = "",
  fullWidth = false,
}: AppointmentButtonProps) {
  const { openChat } = useChatbot();

  // Solange der Chat aus ist (E14, E35), ist die zweite Handlungsaufforderung
  // das Telefon, die erste führt zum Formular (M31).
  if (!chatEnabled) {
    return (
      <Button
        asChild
        size={size}
        variant={variant}
        className={`${fullWidth ? "w-full" : ""} ${className}`}
      >
        <a href={company.phone.href}>
          <Phone className="w-4 h-4" aria-hidden="true" />
          {company.phone.display}
        </a>
      </Button>
    );
  }

  const handleClick = () => {
    openChat(true); // Chat im Terminmodus öffnen
  };

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleClick}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      <Calendar className="w-4 h-4" aria-hidden="true" />
      Termin vereinbaren
    </Button>
  );
}
