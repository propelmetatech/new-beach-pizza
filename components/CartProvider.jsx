"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const storageKey = "pizzahouse-cart";

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const parsed = raw ? JSON.parse(raw) : [];

      if (Array.isArray(parsed)) {
        setItems(
          parsed.map((item) => ({
            ...item,
            cartId: item.cartId ?? `${item.id}${item.selectedOptionId ? `::${item.selectedOptionId}` : ""}`,
            unitPrice:
              typeof item.unitPrice === "number"
                ? item.unitPrice
                : typeof item.price === "number"
                  ? item.price
                  : 0
          }))
        );
      }
    } catch (error) {
      console.error("Unable to read cart from localStorage", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [hydrated, items]);

  function addItem(product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartId === product.cartId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartId === product.cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  }

  function increment(cartId) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrement(cartId) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartId === cartId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(cartId) {
    setItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId));
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        hydrated,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
