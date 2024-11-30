import { create } from "zustand";

const useCityCategoryStore = create((set) => ({
  cityCategory: [
    { id: 0, name: "All Cities", isActive: false },
    { id: 1, name: "Yangon", isActive: false },
    { id: 2, name: "Mandalay", isActive: true },
    { id: 3, name: "Taunggyi", isActive: false },
    { id: 4, name: "Bagan", isActive: false },
  ],
  activeCity: (cityId) =>
    set((state) => ({
      cityCategory: state.cityCategory.map((city) =>
        city.id === cityId
          ? { ...city, isActive: true }
          : { ...city, isActive: false }
      ),
    })),
}));

export default useCityCategoryStore;
