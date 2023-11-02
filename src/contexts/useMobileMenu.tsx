import React, { createContext, useState, ReactNode, useContext } from 'react';

const MobileMenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleOpenMobileMenu: () => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
  handleOpenMobileMenu: () => {},
});

const MobileMenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMobileMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <MobileMenuContext.Provider
      value={{ isOpen, setIsOpen, handleOpenMobileMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (context === undefined)
    throw new Error('MobileMenuContext was used outside Provider');
  return context;
}

export { useMobileMenu, MobileMenuProvider };
