import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";

export const NoFavorites = () => {
  return (
    <Grid.Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "cacl(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
    </Grid.Container>
  );
};
