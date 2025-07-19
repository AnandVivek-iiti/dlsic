import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// [1] Create Auth Context
const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

// [2] AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          logout(); // 🔁 Auto logout on 401
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor); // Clean up
  }, []);

  // [4] Load profile from token on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        try {
          const res = await axios.get("/api/auth/profile"); // ⏳ Secure profile fetch
          setUser(res.data.user); // Or `res.data` based on your backend
        } catch (err) {
          console.error("Profile fetch failed:", err);
        }
      } else if (storedUser) {
        setUser(JSON.parse(storedUser)); // fallback
      }

      setLoading(false); // Done loading
    };

    fetchProfile();
  }, []);

  // [5] Login
  const login = async (email, password) => {
    const res = await axios.post("/api/login", { email, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    setUser(res.data.user);
  };

  // [6] Signup
  const signup = async (formData) => {
    const res = await axios.post("/api/signup", formData);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    setUser(res.data.user);
  };

  // [7] Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// [8] Hook to use Auth
export const useAuth = () => useContext(AuthContext);
