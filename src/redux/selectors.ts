import { RootState } from "./store";

export const userSelector = (state: RootState) => state.user;
export const filtersSelector = (state: RootState) => state.filters;
export const filmsSelector = (state: RootState) => state.films;
