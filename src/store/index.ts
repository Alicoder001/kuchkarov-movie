import { IMovie } from "src/interfaces/app.interface";
import { create } from "zustand";

interface InfoState {
  modal: boolean;
  movie: IMovie;
  setMovie: (movie: IMovie) => void;
  setModal: (bool: boolean) => void;
}
export const useInfoState = create<InfoState>()((set) => ({
  modal: false,
  movie: {} as IMovie,
  setModal: (bool: boolean) => set((state) => ({ ...state, modal: bool })),
  setMovie: (movie: IMovie) => set((state) => ({ ...state, movie: movie })),
}));
