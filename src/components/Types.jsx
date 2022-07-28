import { Container, Typography } from "@mui/material";
import typeChart from "../utils/typeChart";

const Types = () => {
  console.log(typeChart);
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
      {/* {typeChart.map((type) => {
        return <Typography>{type}</Typography>;
      })} */}
    </Container>
  );
};

export default Types;
