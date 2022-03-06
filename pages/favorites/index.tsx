import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorites, Navbar } from "../../components/ui";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [favorites, setFavortites] = useState<number[]>([]);

  useEffect(() => {
    setFavortites(localFavorites.getFavorites());
  }, []);
  return (
    <Layout title="Favorites">
      <Navbar></Navbar>
      {favorites.length == 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
