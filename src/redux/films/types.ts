export type FilmsState = {
  error: Error | null;
  films: object[];
  genresData: object[];
  favourites: [id?: number | undefined];
  searchFilms: object[];
};
