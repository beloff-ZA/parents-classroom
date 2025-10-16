import { create } from "zustand";

type State = {
  isAuthenticated: boolean;
  user: { id?: string; name?: string; email?: string } | null;
  setUser: (u: State["user"]) => void;
  logout: () => void;
};

export const useStore = create<State>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
