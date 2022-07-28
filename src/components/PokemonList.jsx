import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Typography,
  Link,
  Stack,
  Grid,
  Divider,
  Box,
  TextField,
} from "@mui/material";

import Loader from "./Loader";

import { Link as RouterLink } from "react-router-dom";

const PokemonList = (typecolorchart) => {
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  //Happens only at first render

  useEffect(() => {
    getAllPokemonList();
  }, []);

  const array = [];
  const getAllPokemonList = async () => {
    const fetchPokemonData = async (pokemon) => {
      let url = pokemon.url;
      const response = await axios.get(url);
      array.push(response.data);
    };

    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      for (const pokemon of response.data.results) {
        await fetchPokemonData(pokemon);
      }
    } catch (error) {
      console.log(error);
    }
    setAllPokemonList(array);
    setIsLoading(false);
  };

  //Search functionality

  useEffect(() => {
    setPokemonList(allPokemonList);
    if (searchTerm) {
      const filteredPokemon = allPokemonList?.filter((pokemon) =>
        pokemon.name.includes(searchTerm)
      );
      setPokemonList(filteredPokemon);
    }
  }, [allPokemonList, searchTerm]);

  return (
    <Container
      sx={{
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "70px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
          marginTop: "15px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search by Name"
          variant="standard"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value.toLowerCase());
          }}
        />
      </Container>

      {isLoading ? (
        <Loader />
      ) : (
        <Grid container rowSpacing={6} columnSpacing={4}>
          {pokemonList?.map((pokemon) => (
            <Grid
              item
              xs={6}
              sm={2}
              key={pokemon.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={pokemon.sprites.front_default}
                style={{ transform: "scale(1.1)" }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "darkgray",
                  lineHeight: "4px",
                  marginBottom: "8px",
                }}
              >
                #{pokemon.id}
              </Typography>
              <Link
                component={RouterLink}
                to={`/${pokemon.id}`}
                underline="hover"
                variant="body1"
                sx={{ lineHeight: "1.2rem" }}
              >
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              </Link>
              <Stack
                direction="row"
                spacing={1}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {pokemon?.types.map((type) => {
                  let name =
                    type.type.name[0].toUpperCase() +
                    type.type.name.substring(1);
                  return (
                    <Typography
                      variant="caption"
                      key={type.type.name}
                      sx={{
                        color: typecolorchart[name],
                      }}
                    >
                      {type.type.name}
                    </Typography>
                  );
                })}
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PokemonList;
