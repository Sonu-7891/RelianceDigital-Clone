import api from "./api";

export const fetchProducts = async (params = {}) => {
  const response = await api.get("/products", { params });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await api.get("/products/search", { params: { q: query } });
  return response.data;
};
