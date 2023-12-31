import { create } from "zustand";
import { LIGHT, DARK } from "../constants/constants";
export const useChangeMode = create((set) => ({
  mode: DARK,
  toggleMode() {
    set((state) => ({ mode: state.mode === LIGHT ? DARK : LIGHT }));
  },
}));
