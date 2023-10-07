import { createSlice } from "@reduxjs/toolkit";
import { fetchFavourites, fetchSearchFilms } from "./thunks";
import { FilmsState } from "./types";

const initialFilmsState: FilmsState = {
  error: null,
  films: [],
  genresData: [],
  favourites: [],
  searchFilms: [],
};

const filmsSlice = createSlice({
  name: "films",
  initialState: initialFilmsState,
  reducers: {
    setGenresData: (state, action) => {
      state.genresData = action.payload;
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavourites.fulfilled, (state, action) => {
      state.favourites = action.payload;
    });
    builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
      state.searchFilms = action.payload;
    });
  },
});

export const { setGenresData, setFavourites } = filmsSlice.actions;
export default filmsSlice.reducer;
