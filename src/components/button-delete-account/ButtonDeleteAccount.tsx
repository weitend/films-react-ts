import { Box, Flex, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { resetUser } from "../../redux/user/slice";
import { useAppDispatch } from "../../redux/store";

export default function ButtonDeleteAccount() {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(resetUser());
  };
  
  return (
    <Box onClick={handleDelete}>
      <Flex align={"center"} justify={"space-around"}>
        <IconTrash size={17} />
        <Text>Удалить аккаунт</Text>
      </Flex>
    </Box>
  );
}
