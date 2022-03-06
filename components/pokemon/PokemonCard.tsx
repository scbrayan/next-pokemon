import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onclick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} key={pokemon.id}>
      <Card hoverable clickable onClick={onclick}>
        <Card.Body css={{ p: 2 }}>
          <Card.Image
            src={pokemon.img}
            width={"100%"}
            height={140}
          ></Card.Image>
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
