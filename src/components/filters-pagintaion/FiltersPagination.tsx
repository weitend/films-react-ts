import { Stack, Pagination } from "@mantine/core";
import { useSelector } from "react-redux";
import { setPage } from "../../redux/filters/slice";
import { useAppDispatch } from "../../redux/store";
import { filtersSelector } from "../../redux/selectors";
import classes from "./FiltersPagination.module.css";

export default function FiltersPagination() {
  const dispatch = useAppDispatch();
  const filtersState = useSelector(filtersSelector);

  const handleChangePage = (value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Stack className={classes.stack}>
      <Pagination
        total={500}
        classNames={{ control: classes.paginationControl, dots: classes.paginationDots }}
        onChange={handleChangePage}
        value={filtersState.page}
        withControls={false}
      />
    </Stack>
  );
}
