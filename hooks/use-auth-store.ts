import { create } from "zustand";
import axios from "axios";
import { Profile } from "@/types/account.type";
import toast from "react-hot-toast";
import { useCartStore } from "./use-cart-store";
import { hostname } from "@/constants/hostname";

interface useAuthStoreProps {
  profile: Profile | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<useAuthStoreProps>((set, get) => ({
  profile: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  signIn: async (email, password) => {
    try {
      const res = await axios.post(`${hostname}/auth/login`, { email, password });

      const { token, refreshToken, id } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accountId", id);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      set({ token: token, refreshToken, isAuthenticated: true });
      toast.success("Đăng nhập thành công", { id: "login_success" });

      const cartResponse = await axios.get(`${hostname}/cart-item/${id}`, {
        headers: { Authorization: `Bearer ${token}`, 'ngrok-skip-browser-warning': 'true' },

      });
      const cartItems = cartResponse.data.data;

      useCartStore.getState().setCart(cartItems);
    } catch (error) {
      console.log(error);
      toast.error("Đăng nhập thất bại", { id: "login_error" });
    }
  },
  refreshAccessToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return;
    try {
      const res = await axios.post(`${hostname}/auth/refresh-token`, {
        'ngrok-skip-browser-warning': 'true'
      });

      const { token } = res.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      set({ token, isAuthenticated: true });
    } catch (error) {
      console.error("Refresh token failed:", error);
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accountId");
    delete axios.defaults.headers.common["Authorization"];
    set({ token: null, refreshToken: null, isAuthenticated: false });

    useCartStore.getState().setCart([]);
  },
  fetchProfile: async () => {
    try {
      const token = localStorage.getItem("token");
      const accountId = localStorage.getItem("accountId");
      if (!token || !accountId) return;

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${hostname}/profiles/${accountId}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      set({ profile: res.data.data, isAuthenticated: true });

      const cartResponse = await axios.get(`${hostname}/cart-item/${accountId}`, {
        headers: { Authorization: `Bearer ${token}`, 'ngrok-skip-browser-warning': 'true' },
      });
      const cartItems = cartResponse.data.data;

      useCartStore.getState().setCart(cartItems);
    } catch (error) {
      console.error("Fetching user failed:", error);
    }
  },
  register: async (email, password) => {
    try {
      const res = await axios.post(`${hostname}/auth/register`, { email, password }, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      toast.success("Đăng ký thành công", { id: "register_success" });
      set({ isAuthenticated: true });
    } catch (error) {
      console.log(error);
      toast.error("Đăng kí thất bại", { id: "register_error" });
    }
  },
}));