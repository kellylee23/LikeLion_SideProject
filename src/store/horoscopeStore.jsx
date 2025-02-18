import { create } from "zustand";

const useHoroscopeStore = create((set) => ({
  horoscope: { quote: "", fortune: "" },
  setHoroscope: (horoscopeJSON) => {
    set(() => ({
      horoscope: {
        fortune: horoscopeJSON.fortune,
        quote: horoscopeJSON.quote,
      },
    }));
  },
}));

export default useHoroscopeStore;
