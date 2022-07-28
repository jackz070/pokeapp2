import { Typography, Container, Box } from "@mui/material";

import typeChart from "../utils/typeChart";

const About = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30vh",
      }}
    >
      <Typography variant="h3" sx={{ paddingBottom: "2rem" }}>
        About The Pokemon App
      </Typography>
      <Typography variant="body1">
        Built in July 2022 as a project to practice React with Material UI,
        especially fetching & handling data from API, dynamic list generation,
        router. Unexpected challenges included forEach method not working in
        asyncronous functions, weird Material UI behavior.
      </Typography>
    </Container>
  );
};

export default About;
