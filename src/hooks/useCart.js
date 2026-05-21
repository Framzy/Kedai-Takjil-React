import { useState, useEffect } from "react";

export const useCart = () => {
  const [carts, setCarts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCarts(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const addToCart = (productId) => {
    setCarts((prevCarts) => {
      const positionInCart = prevCarts.findIndex(
        (cart) => cart.product_id == productId,
      );
      let newCarts;

      if (positionInCart < 0) {
        newCarts = [...prevCarts, { product_id: productId, quantity: 1 }];
      } else {
        newCarts = [...prevCarts];
        newCarts[positionInCart].quantity += 1;
      }

      return newCarts;
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const changeQuantity = (productId, type) => {
    setCarts((prevCarts) => {
      const newCarts = [...prevCarts];
      const positionInCart = newCarts.findIndex(
        (cart) => cart.product_id == productId,
      );

      if (positionInCart >= 0) {
        if (type === "plus") {
          newCarts[positionInCart].quantity += 1;
        } else if (type === "minus") {
          newCarts[positionInCart].quantity -= 1;
          if (newCarts[positionInCart].quantity <= 0) {
            newCarts.splice(positionInCart, 1);
          }
        }
      }

      return newCarts;
    });
  };

  const clearCart = () => {
    setCarts([]);
  };

  const getTotalQuantity = () => {
    return carts.reduce((total, cart) => total + cart.quantity, 0);
  };

  return {
    carts,
    addToCart,
    changeQuantity,
    clearCart,
    getTotalQuantity,
    showPopup,
    setShowPopup,
  };
};
