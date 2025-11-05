'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  appointmentMode: boolean;
  openChat: (appointment?: boolean) => void;
  closeChat: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentMode, setAppointmentMode] = useState(false);

  const openChat = (appointment = false) => {
    setAppointmentMode(appointment);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    // Reset appointment mode after closing
    setTimeout(() => setAppointmentMode(false), 300);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, appointmentMode, openChat, closeChat }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
