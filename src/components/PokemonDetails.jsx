import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";

import TypeChip from "./TypeChip";
import Loader from "./Loader";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pokemonNumber } = useParams();
  const navigate = useNavigate();

  const getPokemonDetail = async (pokemonNumber) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      );
      setPokemon(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonDetail(pokemonNumber);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "30px",
          }}
        >
          <Box
            component="img"
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            sx={{ width: "200px" }}
          />

          <Typography variant="h2">
            {pokemon?.name[0]?.toUpperCase() + pokemon?.name?.substring(1)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "darkgray",
            }}
          >
            #{pokemon.id}
          </Typography>
          <Stack
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Box>
              <Typography variant="h4">Basic Data</Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">Types: </Typography>
                {pokemon?.types?.map((type) => {
                  return <TypeChip type={type.type.name} />;
                })}
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                <Typography variant="h6">Height: </Typography>
                <Typography variant="body1">{pokemon?.height}</Typography>

                <Typography variant="h6">Weight: </Typography>
                <Typography variant="body1">{pokemon?.weight}</Typography>
              </Stack>
            </Box>
            <Box>
              <Typography variant="h4">Base Stats</Typography>
              <Stack>
                {pokemon?.stats?.map((stat) => (
                  <Box
                    key={stat.stat.name}
                    sx={{ display: "flex", alignItems: "baseline" }}
                  >
                    <Typography variant="h6">
                      {stat?.stat?.name?.replace("special", "sp")}:&nbsp;
                    </Typography>
                    <Typography variant="body1">{stat?.base_stat}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
          <Button size="small" onClick={() => navigate(-1)}>
            Back to List
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default PokemonDetails;
