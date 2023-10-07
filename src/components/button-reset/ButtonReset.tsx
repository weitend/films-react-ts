import { ActionIcon } from "@mantine/core";
import { IconAdjustmentsOff } from "@tabler/icons-react";
import { resetFilters } from "../../redux/filters/slice";
import { useAppDispatch } from "../../redux/store";

export default function ButtonReset() {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <ActionIcon onClick={handleResetFilters}>
      <IconAdjustmentsOff />
    </ActionIcon>
  );
}
