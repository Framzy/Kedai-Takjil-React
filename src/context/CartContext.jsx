// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // ← tambah flag

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCarts(JSON.parse(savedCart));
      }
    } catch (error) {
      console.warn("Failed to load cart:", error);
      localStorage.removeItem("cart");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts, isLoaded]);

  const addToCart = (productId) => {
    setCarts((prevCarts) => {
      const positionInCart = prevCarts.findIndex(
        (cart) => cart.product_id === Number(productId),
      );

      if (positionInCart < 0) {
        return [...prevCarts, { product_id: Number(productId), quantity: 1 }];
      }

      return prevCarts.map((cart, index) =>
        index === positionInCart
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart,
      );
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const changeQuantity = (productId, type) => {
    setCarts((prevCarts) =>
      prevCarts
        .map((cart) => {
          if (cart.product_id !== Number(productId)) return cart;
          const newQty =
            type === "plus" ? cart.quantity + 1 : cart.quantity - 1;
          return { ...cart, quantity: newQty };
        })
        .filter((cart) => cart.quantity > 0),
    );
  };

  const removeItem = (productId) => {
    setCarts((prevCarts) =>
      prevCarts.filter((cart) => cart.product_id !== Number(productId)),
    );
  };

  const clearCart = () => setCarts([]);

  const totalQuantity = carts.reduce((total, cart) => total + cart.quantity, 0);

  const isInCart = (productId) =>
    carts.some((cart) => cart.product_id === Number(productId));

  return (
    <CartContext.Provider
      value={{
        carts,
        addToCart,
        changeQuantity,
        removeItem,
        clearCart,
        showPopup,
        setShowPopup,
        totalQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook — tetap bisa pakai useCart() di komponen manapun
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus digunakan di dalam CartProvider");
  }
  return context;
};
