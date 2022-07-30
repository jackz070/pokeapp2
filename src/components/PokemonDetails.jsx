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
  Grid,
  Tooltip,
  Zoom,
} from "@mui/material";

import TypeChip from "./TypeChip";
import Loader from "./Loader";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonText, setPokemonText] = useState("");
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

  const getPokemonText = async (pokemonNumber) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`
      );
      setPokemonText(response.data["flavor_text_entries"][0]["flavor_text"]);
      setIsLoading(false);
      console.log(pokemonText);
    } catch (error) {
      console.log(error);
    }
  };

  const prevPokemon = () => {
    return `/${parseInt(pokemonNumber) - 1}`;
  };
  const nextPokemon = () => {
    return `/${parseInt(pokemonNumber) + 1}`;
  };

  useEffect(() => {
    getPokemonDetail(pokemonNumber);
    getPokemonText(pokemonNumber);
  }, [pokemonNumber]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
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
          <Typography
            variant="base2"
            sx={{ maxWidth: "350px", marginBottom: "10px" }}
          >
            {pokemonText}
          </Typography>
          <Stack
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Grid container sx={{ minWidth: "600px" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5">Basic Data</Typography>
                <Stack direction="row" spacing={2}>
                  <Typography variant="body1">Types: </Typography>
                  {pokemon?.types?.map((type) => {
                    return <TypeChip type={type.type.name} />;
                  })}
                </Stack>
                <Typography variant="body1">
                  Height: {pokemon?.height}
                </Typography>
                <Typography variant="body1">
                  Weight: {pokemon?.weight}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Base Stats</Typography>
                <Stack>
                  {pokemon?.stats?.map((stat) => (
                    <Box
                      key={stat.stat.name}
                      sx={{ display: "flex", alignItems: "baseline" }}
                    >
                      <Tooltip
                        title={stat.stat.name}
                        placement="top-end"
                        TransitionComponent={Zoom}
                      >
                        <Typography variant="body1">
                          {stat?.stat?.name?.replace("special", "sp")}:&nbsp;
                        </Typography>
                      </Tooltip>
                      <Typography variant="body1">{stat?.base_stat}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Stack direction="row">
            {pokemonNumber > 1 && (
              <Button onClick={() => navigate(prevPokemon())}>Previous</Button>
            )}
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate("/")}
              sx={{
                marginTop: "10px",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Back to List
            </Button>
            {pokemonNumber < 151 && (
              <Button onClick={() => navigate(nextPokemon())}>Next</Button>
            )}
          </Stack>
        </Container>
      )}
    </Container>
  );
};

export default PokemonDetails;
