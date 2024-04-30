import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useFilmsStore = create()(
  immer((set) => ({
    films: [],
    fetchFilms: async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/iuliya21/json-films/main/films.json"
        );
        const films = await response.json();
        set({ films: films });
      } catch (err) {
        console.error(err);
      }
    },
  }))
);
