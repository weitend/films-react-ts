import { ActionIcon, AppShell, Title, Image, Box, Flex } from "@mantine/core";
import HeaderFilms from "../../components/header/Header";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useLoaderData, Link } from "react-router-dom";
import getReleaseYear from "../../utils/getReleaseYear";
import TableDetails from "../../components/table-details/TableDetails";
import ActorsList from "../../components/actors-list/ActorsList";
import getJobsPerson from "../../utils/getJobsPerson";
import { useSelector } from "react-redux";
import getPoster from "../../utils/getPoster";
import { FilmData } from "./FilmDetails.types";
import { userSelector } from "../../redux/selectors";

export default function FilmDetails() {
  const userState = useSelector(userSelector);
  const { descr, cred } = useLoaderData() as FilmData;

  const details = {
    title: descr.title,
    poster: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${descr.poster_path}`,
    country: descr.production_countries[0]?.name,
    year: getReleaseYear(descr.release_date),
    genres: descr.genres.map((genre) => genre.name).join(", "),
    budget: `$ ${descr.budget.toLocaleString()}`,
    revenue: `$ ${descr.revenue.toLocaleString()}`,
    runtime: `${descr.runtime} мин`,
    actors: getJobsPerson(cred, "actor"),
    directors: getJobsPerson(cred, "director"),
    writers: getJobsPerson(cred, "writer"),
  };

  if (!userState.isAuth) return;
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      header={<HeaderFilms title={descr.title} />}
    >
      <Flex justify={"space-evenly"}>
        <Box w={"400px"}>
          <Image
            key={cred.id}
            withPlaceholder
            src={getPoster(descr.poster_path)}
          />
        </Box>
        <Flex direction={"column"}>
          <Link to={"/"}>
            <ActionIcon size={"lg"}>
              <IconArrowNarrowLeft size={"lg"} />
            </ActionIcon>
          </Link>
          <Title>
            {descr.title} ({details.year})
          </Title>
          <ActorsList credentionals={cred} />
          <TableDetails data={details} />
        </Flex>
      </Flex>
    </AppShell>
  );
}
