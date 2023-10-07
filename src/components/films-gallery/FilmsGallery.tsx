import { Flex } from "@mantine/core";
import { useEffect } from "react";
import getPoster from "../../utils/getPoster";
import CardFilm from "../film-card/Card";
import { useSelector } from "react-redux";
import { fetchFavourites } from "../../redux/films/thunks";
import { useAppDispatch } from "../../redux/store";
import { FilmSkeletonCards } from "../film-skeleton-cards/filmSkeletonCards";
import { CardFilmData } from "../film-card/Card.types";
import {
  filmsSelector,
  filtersSelector,
  userSelector,
} from "../../redux/selectors";
import classes from "./FilmsGallery.module.css";
import { useGetFilmsListQuery } from "../../redux/services/films";

export default function FilmsGallery() {
  const userState = useSelector(userSelector);
  const filtersState = useSelector(filtersSelector);
  const filmsState = useSelector(filmsSelector);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetFilmsListQuery({
    sort: filtersState.sort,
    pageNum: filtersState.page,
    yearStart: filtersState.year[0],
    yearEnd: filtersState.year[1],
    genres: filtersState.genres,
  });

  useEffect(() => {
    dispatch(fetchFavourites(userState.id));
  }, [dispatch, userState.id]);

  if (isLoading) return <FilmSkeletonCards />;
  return (
    <Flex className={classes.flex}>
      {data.results.map((film: CardFilmData) => (
        <CardFilm
          key={film.id}
          title={film.title}
          vote={film.vote_average}
          img={getPoster(film.poster_path)}
          id={film.id}
          isFavourite={filmsState.favourites.includes(film.id)}
        />
      ))}
    </Flex>
  );
}
