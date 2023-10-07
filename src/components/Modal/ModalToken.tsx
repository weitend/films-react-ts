import { Title, Box, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie";
import { changeAuth, changeToken } from "../../redux/user/slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { changeId } from "../../redux/user/thunks";

export default function ModalToken({ close }: { close: () => void }) {
  const dispatch = useAppDispatch();
  const userState = useSelector(userSelector);

  useEffect(() => {
    dispatch(changeId(20384865));
    Cookies.set("account_id", userState.id);
  }, [dispatch, userState.id]);

  const form = useForm({
    initialValues: {
      token: "",
    },
  });

  const handleSubmit = (values: { token: string }) => {
    dispatch(changeToken(values.token));
    dispatch(changeAuth());
    Cookies.set("token", values.token);
    close();
  };

  return (
    <>
      <Title>Введите токен</Title>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="токен"
            placeholder="ваш токен"
            {...form.getInputProps("token")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
