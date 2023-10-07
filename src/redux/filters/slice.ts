import { createSlice } from "@reduxjs/toolkit";
import { initialFiltersStateInterface } from "./types";

export const initialFiltersState: initialFiltersStateInterface = {
  sort: "popular",
  year: [1890, 2023],
  genres: [],
  page: 1,
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetFilters: (state) => {
      state.sort = "popular";
      state.year = [1890, 2023];
      state.genres = [];
      state.page = 1;
      state.search = "";
    },
  },
});

export const { setSort, setYear, setGenres, setPage, setSearch, resetFilters } =
  filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
