import { IMovie } from "src/interfaces/app.interface";
import { create } from "zustand";

interface InfoState {
  modal: boolean;
  currentMovie: IMovie;
  setCurrentMovie: (movie: IMovie) => void;
  setModal: (bool: boolean) => void;
}
export const useInfoState = create<InfoState>()((set) => ({
  modal: false,
  currentMovie: {} as IMovie,
  setModal: (bool: boolean) => set((state) => ({ ...state, modal: bool })),
  setCurrentMovie: (movie: IMovie) =>
    set((state) => ({ ...state, currentMovie: movie })),
}));
