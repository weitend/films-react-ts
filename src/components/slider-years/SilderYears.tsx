import { RangeSlider } from "@mantine/core";
import { setYear } from "../../redux/filters/slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { filtersSelector } from "../../redux/selectors";

export default function SliderYears() {
  const dispatch = useAppDispatch();
  const filtersState = useSelector(filtersSelector);
  const [value, setValue] = useState(filtersState.year);

  const handleChangeEnd = (value: number) => {
    dispatch(setYear(value));
  };

  const handleChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <RangeSlider
      onChangeEnd={handleChangeEnd}
      onChange={handleChange}
      min={1890}
      max={2030}
      mt="30px"
      size="xs"
      labelAlwaysOn
      value={value}
    />
  );
}
