import { useState, useEffect, useRef } from "react";
import { CartContext } from "./CartContext";
import { logger } from "../utils/logger";

const loadCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    logger.warn("Failed to load cart:", error);
    localStorage.removeItem("cart");
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState(loadCart());
  const [showPopup, setShowPopup] = useState(false);
  const popupTimerRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(carts));
      logger.log("Cart saved:", carts);
    } catch (error) {
      logger.warn("Failed to save cart:", error);
    }
  }, [carts]);

  useEffect(() => {
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, []);

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

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    setShowPopup(true);

    popupTimerRef.current = setTimeout(() => {
      setShowPopup(false);
      popupTimerRef.current = null;
    }, 2000);
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

  const setQuantity = (productId, quantity) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.product_id === Number(productId)
          ? { ...cart, quantity: Math.min(Math.max(quantity, 1), 99) }
          : cart,
      ),
    );
  };

  const removeItem = (productId) => {
    setCarts((prevCarts) =>
      prevCarts.filter((cart) => cart.product_id !== Number(productId)),
    );
  };

  const closePopup = () => {
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }
    setShowPopup(false);
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
        setQuantity,
        removeItem,
        clearCart,
        showPopup,
        closePopup,
        totalQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
