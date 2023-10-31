import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthProps {
  loggedIn: boolean;
  token: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthProps>()(
  persist(
    (set) => ({
      loggedIn: false,
      token: null,
      user: null,
      setAuth: (token: string) =>
        set((state) => {
          localStorage.setItem("token", token);
          return { loggedIn: true, token };
        }),
      logout: () =>
        set((state) => {
          localStorage.removeItem("token");
          return { loggedIn: false, token: "" };
        }),
    }),

    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
