import { forwardRef, useEffect, useState } from "react";
import { Group, Avatar, Text, Autocomplete, Box } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import getPoster from "../../utils/getPoster";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setSearch } from "../../redux/filters/slice";
import { fetchSearchFilms } from "../../redux/films/thunks";
import { useAppDispatch } from "../../redux/store";
import { SearchItem } from "./InputSearch.types";
import classes from "./InputSearch.module.css";
import { filmsSelector, filtersSelector } from "../../redux/selectors";

const AutoCompleteItem = forwardRef(
  ({ title, poster_path, id, vote_average }: SearchItem, ref) => (
    <Box key={id} id={id} ref={ref} className={classes.autoCompleteItem}>
      <Link to={`film/${id}`}>
        <Group noWrap>
          <Avatar src={getPoster(poster_path)} />

          <div>
            <Text>{title}</Text>
            <Text size="xs" color="dimmed">
              {vote_average.toFixed(1)}
            </Text>
          </div>
        </Group>
      </Link>
    </Box>
  )
);

export default function InputSearch() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 500);

  const filtersState = useSelector(filtersSelector);
  const filmsState = useSelector(filmsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchFilms(debounced));
  }, [debounced, dispatch]);

  function handleChange(value: string) {
    setValue(value);
    dispatch(setSearch(value));
  }

  return (
    <Autocomplete
      label="Найти фильм:"
      placeholder="Название фильма"
      itemComponent={AutoCompleteItem}
      data={filmsState.searchFilms}
      value={filtersState.search}
      onChange={handleChange}
      filter={Boolean}
    />
  );
}
