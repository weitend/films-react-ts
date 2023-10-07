import { Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { setSort } from "../../redux/filters/slice";
import { SORT_DATA } from "./mockdata";
import { useAppDispatch } from "../../redux/store";
import { filtersSelector } from "../../redux/selectors";

export default function SelectSort() {
  const dispatch = useAppDispatch();
  const filtersState = useSelector(filtersSelector);

  const handleChangeSort = (value: string) => {
    dispatch(setSort(value));
  };

  return (
    <Select
      label="Сортировать по:"
      placeholder="Выберите сортировку"
      value={filtersState.sort}
      onChange={handleChangeSort}
      data={SORT_DATA}
    />
  );
}
