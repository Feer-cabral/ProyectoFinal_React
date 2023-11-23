import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cantidadItems, setCantidadItems] = useState(0);

  return (
    <CartContext.Provider value={{ cantidadItems, setCantidadItems }}>
      {children}
    </CartContext.Provider>
  );
};
