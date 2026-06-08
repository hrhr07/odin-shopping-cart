import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }

        return item;
      });

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
