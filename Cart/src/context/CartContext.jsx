import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [caRt, setcaRt] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addToCart(selectedItem) {
    // is item is in cart!
    const isItemInCart = caRt.find((item) => item.id === selectedItem.id);
    if (isItemInCart) {
      const updatedCart = caRt.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setcaRt(updatedCart);
    } else {
      setcaRt([...caRt, { ...selectedItem, quantity: 1 }]);
    }
  }

  function removeFromCart(selectedItem) {
    const existingItem = caRt.find((item) => item.id === selectedItem.id);

    if (existingItem?.quantity === 1) {
      setcaRt(caRt.filter((item) => item.id !== selectedItem.id));
    } else {
      const updatedCart = caRt.map((item) =>
        item.id === selectedItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setcaRt(updatedCart);
    }
  }

  return (
    <CartContext.Provider value={{ products, caRt, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}