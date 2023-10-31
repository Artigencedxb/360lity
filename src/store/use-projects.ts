import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProjectProps {
  projectIndex: number;
  setProjectIndex: (projectIndex: number) => void;
}

export const useProjectStore = create<ProjectProps>()(
  persist(
    (set) => ({
      projectIndex: 0,
      setProjectIndex: (projectIndex: number) =>
        set((state) => {
          return { projectIndex };
        }),
    }),

    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
