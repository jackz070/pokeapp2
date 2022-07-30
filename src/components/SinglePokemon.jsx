import { useEffect } from "react";
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

import { Link as RouterLink } from "react-router-dom";

import typeChart from "../utils/typeChart";
import typeColorChart from "../utils/typeColorChart";

const SinglePokemon = ({ pokemon }) => {
  useEffect(() => {
    console.log();
  }, []);

  return (
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
            type.type.name[0].toUpperCase() + type.type.name.substring(1);
          return (
            <Typography
              variant="caption"
              key={type.type.name}
              sx={{
                color: typeColorChart[name],
              }}
            >
              {type.type.name}
            </Typography>
          );
        })}
      </Stack>
    </Grid>
  );
};

export default SinglePokemon;
