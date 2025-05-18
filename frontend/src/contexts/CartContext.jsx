import { createContext, useContext, useState, useEffect } from "react";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} from "../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const { data } = await getCart();
      setCart(data);
    } catch (err) {
      setError(err.response?.data?.message || "Error loading cart");
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (productId, quantity = 1) => {
    try {
      const { data } = await addToCart(productId, quantity);
      setCart(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Error adding item to cart");
      throw err;
    }
  };

  const updateItem = async (itemId, quantity) => {
    try {
      const { data } = await updateCartItem(itemId, quantity);
      setCart(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Error updating cart item");
      throw err;
    }
  };

  const removeItem = async (itemId) => {
    try {
      const { data } = await removeFromCart(itemId);
      setCart(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Error removing item from cart");
      throw err;
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return Array.isArray(cart)
      ? cart.reduce((count, item) => count + item.quantity, 0)
      : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addItem,
        updateItem,
        removeItem,
        getCartTotal,
        getCartCount,
        refreshCart: loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
