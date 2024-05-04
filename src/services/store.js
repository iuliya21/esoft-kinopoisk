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
    addComment: (idFilm, comment) => {
      set((state) => {
        const filmIndex = state.films.findIndex((film) => film.id === idFilm);
        const updatedFilms = [...state.films];
        updatedFilms[filmIndex] = {
          ...updatedFilms[filmIndex],
          "comments": [comment, ...updatedFilms[filmIndex].comments],
        };
        return { films: updatedFilms };
      });
    },
    favoritesFilms: [],
    addFavoriteFilm: (film) => {
      set((state) => {
        if (!state.favoritesFilms.find((favFilm) => favFilm.id === film.id)) {
          return { favoritesFilms: [...state.favoritesFilms, film] };
        }
        return state;
      });
    },
    removeFavoriteFilm: (id) => {
      set((state) => {
        return {
          favoritesFilms: [
            ...state.favoritesFilms.filter((favFilm) => favFilm.id !== id),
          ],
        };
      });
    },
    laterFilms: [],
    addLaterFilm: (film) => {
      set((state) => {
        if (!state.laterFilms.find((latFilm) => latFilm.id === film.id)) {
          return { laterFilms: [...state.laterFilms, film] };
        }
        return state;
      });
    },
    removeLaterFilm: (id) => {
      set((state) => {
        return {
          laterFilms: [
            ...state.laterFilms.filter((latFilm) => latFilm.id !== id),
          ],
        };
      });
    },
  }))
);
