import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { Layout } from "../../components/layouts";

const FavoritesPage: NextPage = () => {
  return (
    <Layout title="Favorites">
      <Grid.Container gap={2} justify="flex-start"></Grid.Container>
    </Layout>
  );
};

export default FavoritesPage;
