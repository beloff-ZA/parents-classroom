import { create } from "zustand";

export const usePlaceholderStore = create((set) => ({
  placeholder: null,
  setPlaceholder: (value: any) => set({ placeholder: value }),
}));
