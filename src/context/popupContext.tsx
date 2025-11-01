// src/context/PopupContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PopupContextProps {
  isShowing: boolean;
  hasShown: boolean
  setShowing: (shown: boolean) => void;
  setHasShown: (shown: boolean) => void;
}

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isShowing, setShowingPopup] = useState(false);
  const [hasShown, setHasShownPopup] = useState(false);

  const setShowing = (shown: boolean) => {
    setShowingPopup(shown);
  };

  const setHasShown = (shown: boolean) => {
    setHasShownPopup(shown);
  };



  return (
    <PopupContext.Provider value={{ isShowing, hasShown, setShowing, setHasShown }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopupContext must be used within a Provider');
  }
  return context;
};
