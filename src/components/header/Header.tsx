import { Box, Header, Title } from "@mantine/core";
import ModalFilms from "../Modal/Modal";
import classes from "./Header.module.css";
import { HeaderTitle } from "./Header.types";

export default function HeaderFilms({ title }: HeaderTitle) {
  return (
    <Header height={{ base: 50, md: 70 }}>
      <Box className={classes.main}>
        <Title>Фильмы {title ? `- ${title}` : ""}</Title>
        <ModalFilms />
      </Box>
    </Header>
  );
}
