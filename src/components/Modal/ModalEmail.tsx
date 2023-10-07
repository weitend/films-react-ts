import { Title, Box, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { changeEmail } from "../../redux/user/slice";
import { useAppDispatch } from "../../redux/store";

export default function ModalEmail() {
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: { email: string }) => {
    dispatch(changeEmail(values.email));
    form.reset();
  };

  return (
    <>
      <Title>Запросить токен</Title>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="почта"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Отправить</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
