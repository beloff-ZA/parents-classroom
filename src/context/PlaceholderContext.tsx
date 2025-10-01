import React, { createContext } from "react";

interface PlaceholderContextType {
  value?: any;
}

const PlaceholderContext = createContext<PlaceholderContextType | null>(null);

export const PlaceholderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PlaceholderContext.Provider value={{ value: {} }}>
      {children}
    </PlaceholderContext.Provider>
  );
};

export default PlaceholderContext;
