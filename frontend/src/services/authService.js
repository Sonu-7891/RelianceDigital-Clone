import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const updateUserDetails = async (userData) => {
  const response = await api.put("/auth/updatedetails", userData);
  return response.data;
};

export const updatePassword = async (passwordData) => {
  const response = await api.put("/auth/updatepassword", passwordData);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/auth/user/profile");
  return response.data.user;
};
