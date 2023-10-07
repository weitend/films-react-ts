import { token } from "../../api/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmsList, GenresList } from "./types/films-types";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmsList: builder.query({
      query: (data: FilmsList) =>
        `discover/movie?language=RU&page=${data.pageNum}&primary_release_date.gte=${data.yearStart}&primary_release_date.lte=${data.yearEnd}&sort_by=${data.sort}&with_genres=${data.genres}`,
    }),
    getGenres: builder.query({
      query: () => "genre/movie/list?language=ru",
      transformResponse: (response: GenresList) => {
        const results = response.genres.map(
          (item: { id: number; name: string }) => {
            return { value: item.id.toString(), label: item.name };
          }
        );

        return results;
      },
    }),
  }),
});

export const { useGetFilmsListQuery, useGetGenresQuery } = filmsApi;
