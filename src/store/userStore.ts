import { create } from "zustand";
import { User } from "../types";

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  
  setUser: (user: User | null) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,

  setUser: (user) => set({ user, isLoggedIn: !!user }),
  logout: () => set({ user: null, isLoggedIn: false }),
  setLoading: (isLoading) => set({ isLoading })
}));
