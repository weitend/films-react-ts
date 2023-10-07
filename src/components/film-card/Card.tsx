import { Flex, Image, Text, ActionIcon, Box, Card } from "@mantine/core";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetFilters } from "../../redux/filters/slice";
import { useAppDispatch } from "../../redux/store";
import { CardFilmData } from "./Card.types";
import classes from "./Card.module.css";
import { useChangeFavouriteMutation } from "../../redux/services/user";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";

export default function CardFilm({
  title,
  vote,
  img,
  id,
  isFavourite,
}: CardFilmData) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userState = useSelector(userSelector);
  const [isInFavourite, setIsInFavourite] = useState<boolean>();
  const [changeFavouriteFilm] = useChangeFavouriteMutation();

  useEffect(() => {
    setIsInFavourite(isFavourite);
  }, [isFavourite]);

  const handleFavourite = async () => {
    setIsInFavourite(!isInFavourite);

    await changeFavouriteFilm([
      userState.id,
      { media_type: "movie", media_id: id, favorite: !isInFavourite },
    ]);
  };

  const handleClick = () => {
    dispatch(resetFilters());
    navigate(`film/${id}`);
  };

  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image
          className={classes.image}
          src={img}
          onClick={handleClick}
          alt={title}
          withPlaceholder
        />
      </Card.Section>
      <Flex className={classes.flex}>
        <Box className={classes.box}>
          <Text className={classes.text} lineClamp={1}>
            {title}
          </Text>
          <Text>Рейтинг: {vote}</Text>
        </Box>
        <ActionIcon onClick={() => handleFavourite()}>
          {isInFavourite ? <IconStarFilled /> : <IconStar />}
        </ActionIcon>
      </Flex>
    </Card>
  );
}
