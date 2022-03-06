import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { Navbar } from "../components/ui";
import { Pokemon, PokemonListResponse } from "../interfaces";

interface Props {
  pokemons: Pokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  const onToggleFavorites = () => {};
  return (
    <Layout title="Lista Pokemon">
      <Navbar></Navbar>

      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: Pokemon[] = data.results.map((poke, index: number) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
