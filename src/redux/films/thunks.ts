import { getFavourites } from "../../api/account";
import { getSearchFilms } from "../../api/search";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavourites = createAsyncThunk(
  "films/fetchFavourites",
  async (id: string) => {
    const response = await getFavourites(id);

    return response.results.map((film: { id: number }) => film.id);
  }
);

export const fetchSearchFilms = createAsyncThunk(
  "films/getchSearchFilms",
  async (query: string) => {
    const response = await getSearchFilms(query);
    return response.results;
  }
);
