import { MultiSelect } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setGenres } from "../../redux/filters/slice";
import { useAppDispatch } from "../../redux/store";
import { filmsSelector, filtersSelector } from "../../redux/selectors";
import { useGetGenresQuery } from "../../redux/services/films";
import { setGenresData } from "../../redux/films/slice";

export default function SelectGenres() {
  const filtersState = useSelector(filtersSelector);
  const filmsState = useSelector(filmsSelector);

  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetGenresQuery(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setGenresData(data));
    }
  }, [dispatch, data, isLoading]);

  const handleOnChange = (value: number) => {
    dispatch(setGenres(value));
  };

  return (
    <MultiSelect
      data={filmsState.genresData}
      label="Жанры"
      placeholder="Выберите жанры"
      mt="16px"
      searchable
      clearButtonProps={{ "aria-label": "Clear selection" }}
      clearable
      disableSelectedItemFiltering
      transitionProps={{
        duration: 150,
        transition: "scale",
        timingFunction: "ease",
      }}
      onChange={handleOnChange}
      value={filtersState.genres}
    />
  );
}
