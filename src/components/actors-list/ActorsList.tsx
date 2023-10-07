import { Spoiler, Title, Text } from "@mantine/core";
import { useRef } from "react";
import { Credentionals } from "./ActorsList.types";

export default function ActorsList({ credentionals }: Credentionals) {
  const spoilerControlRef = useRef(null);

  return (
    <>
      <Title>Актеры:</Title>
      <Spoiler
        showLabel="Показать больше"
        hideLabel="Скрыть"
        controlRef={spoilerControlRef}
      >
        {credentionals.cast?.map((actor) => (
          <Text key={actor.cast_id} fz="sm">
            {actor.name}
          </Text>
        ))}
      </Spoiler>
    </>
  );
}
