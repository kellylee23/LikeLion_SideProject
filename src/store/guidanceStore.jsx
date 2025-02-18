import { create } from "zustand";

const useGuidanceStore = create((set) => ({
  guidance: "카드를 클릭하세요.",
  toggleGuidance: (guide) => {
    set(() => ({
      guidance: guide,
    }));
  },
}));

export default useGuidanceStore;
