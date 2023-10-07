import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import FilmDetails from "./pages/film-details/FilmDetails.jsx";
import { getFilmCredentionals, getFilmDescription } from "./api/films.js";
import MainFilms from "./pages/main/Main.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainFilms />,
      },
      {
        path: "film/:filmId",
        element: <FilmDetails />,
        loader: async ({ params }) => {
          const descr = await getFilmDescription(params.filmId);
          const cred = await getFilmCredentionals(params.filmId);

          return { descr, cred };
        },
      },
    ],
  },
]);
