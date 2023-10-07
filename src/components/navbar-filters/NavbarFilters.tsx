import { Navbar, Title, Flex } from "@mantine/core";
import ButtonReset from "../button-reset/ButtonReset.jsx";
import InputSearch from "../input-search/inputSearch.jsx";
import SelectSort from "../select-sort/SelectSort.jsx";
import SliderYears from "../slider-years/SilderYears.jsx";
import SelectGenres from "../select-genres/SelectGenres.jsx";
import FiltersPagination from "../filters-pagintaion/FiltersPagination.jsx";
import classes from "./NavbarFilters.module.css";

export default function NavbarFilters() {
  return (
    <Navbar p="md" width={{ sm: 400, lg: 300 }} className={classes.navbar}>
      <Flex className={classes.flexOne}>
        <Flex className={classes.flexTwo}>
          <Title order={2}>Фильтры</Title>
          <ButtonReset />
        </Flex>
        <InputSearch />
        <SelectSort />
        <SliderYears />
        <SelectGenres />
      </Flex>
      <FiltersPagination />
    </Navbar>
  );
}
