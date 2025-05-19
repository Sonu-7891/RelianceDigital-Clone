import axios from "axios";

// Create axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:5000", // Backend server URL
  withCredentials: true,
});

export const getWishlist = async () => {
  const res = await api.get("/api/wishlist");
  return res.data;
};

export const addToWishlist = async (productId) => {
  await api.post("/api/wishlist/add", { productId });
};

export const removeFromWishlist = async (productId) => {
  await api.post("/api/wishlist/remove", { productId });
};
