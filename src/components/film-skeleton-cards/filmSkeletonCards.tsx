import { Grid, Skeleton } from "@mantine/core";
import classes from "./FilmSkeletonCards.module.css";

export function FilmSkeletonCards() {
  return (
    <Grid>
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={index} className={classes.skeleton} />
      ))}
    </Grid>
  );
}
