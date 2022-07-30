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
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Loader from "./Loader";
import typeChart from "../utils/typeChart";
import SinglePokemon from "./SinglePokemon";

import { Link as RouterLink } from "react-router-dom";

const PokemonList = () => {
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeSort, setTypeSort] = useState("");

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
    if (searchTerm && !typeSort) {
      const filteredPokemon = allPokemonList?.filter((pokemon) =>
        pokemon.name.includes(searchTerm)
      );
      setPokemonList(filteredPokemon);
    }

    //Sort By Type logic
    if (typeSort === "all") {
      setTypeSort("");
    }

    if (typeSort && !searchTerm) {
      const filteredPokemon = allPokemonList?.filter((pokemon) =>
        checkTypes(pokemon.types)
      );
      setPokemonList(filteredPokemon);
    }

    // Both Sort By Type && By Search Term functionality
    if (typeSort && searchTerm) {
      const filteredPokemon = allPokemonList
        ?.filter((pokemon) => pokemon.name.includes(searchTerm))
        .filter((pokemon) => checkTypes(pokemon.types));
      setPokemonList(filteredPokemon);
    }
  }, [typeSort, searchTerm, allPokemonList]);

  //Helpers for Sort By Type functionality

  const checkTypes = (types) => {
    for (let type of types) {
      return type.type.name === typeSort;
    }
  };

  const handleChange = (event) => {
    setTypeSort(event.target.value);
  };

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
        <Box sx={{ minWidth: 120 }}>
          <FormControl
            variant="standard"
            sx={{ marginRight: 10, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-label">Sort By Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeSort}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value="all">all</MenuItem>
              {Object.keys(typeChart).map((key) => (
                <MenuItem value={key}>{key}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
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
            <SinglePokemon pokemon={pokemon} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PokemonList;
