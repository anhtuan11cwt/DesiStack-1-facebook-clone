import { create } from "zustand";
import { persist } from "zustand/middleware";

// Lưu user vào localStorage qua persist → giữ phiên khi reload
const useUserStore = create(
  persist(
    (set) => ({
      clearUser: () => set({ user: null }),
      setUser: (user) => set({ user }),
      user: null,
    }),
    {
      name: "facebook-user",
    },
  ),
);

export default useUserStore;
