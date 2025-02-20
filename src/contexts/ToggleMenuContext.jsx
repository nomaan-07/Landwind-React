import { createContext, useState } from "react";

const ToggleMenuContext = createContext();

export function ToggleMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <ToggleMenuContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}

export default ToggleMenuContext;
