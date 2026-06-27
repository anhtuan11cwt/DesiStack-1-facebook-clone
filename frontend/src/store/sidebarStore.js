import { create } from "zustand";

const useSidebarStore = create((set) => ({
  closeSidebar: () => set({ isSidebarOpen: false }),
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useSidebarStore;
