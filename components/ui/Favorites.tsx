import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemon } from "./FavoritePokemon";

interface Props {
  pokemons: number[];
}
export const Favorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
      {pokemons.map((id) => (
        <FavoritePokemon pokemonId={id} key={id}></FavoritePokemon>
      ))}
    </Grid.Container>
  );
};
