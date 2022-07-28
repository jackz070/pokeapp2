import { useNavigate, useParams } from "react-router-dom";

import TypeChip from "./TypeChip";
import typeChart from "../utils/typeChart";

import { Typography, Container, Button } from "@mui/material";

const Type = () => {
  const navigate = useNavigate();

  const { type } = useParams();
  const currentType = typeChart[type];
  const superEffective = currentType.superEffective;
  const notVeryEffective = currentType.notVeryEffective;
  const noEffect = currentType.noEffect;

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "70px",
      }}
    >
      <Typography variant="h2">
        {type[0]?.toUpperCase() + type.substring(1)}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "darkgray",
          marginBottom: "5px",
        }}
      >
        (type)
      </Typography>
      <Typography
        sx={{
          marginBottom: "5px",
        }}
      >
        {<TypeChip type={type} />}
        moves are super effective against
        {superEffective.map((type) => {
          let name = type[0]?.toUpperCase() + type.substring(1);

          return <TypeChip type={name} />;
        })}
        type moves
      </Typography>
      <Typography
        sx={{
          marginBottom: "5px",
        }}
      >
        {<TypeChip type={type} />}
        moves are not very effective against
        {notVeryEffective.map((type) => {
          let name = type[0]?.toUpperCase() + type.substring(1);

          return <TypeChip type={name} />;
        })}
        type moves
      </Typography>
      {noEffect.length > 0 ? (
        <Typography>
          {<TypeChip type={type} />}
          moves deal no damage to
          {noEffect.map((type) => {
            let name = type[0]?.toUpperCase() + type.substring(1);
            return <TypeChip type={name} />;
          })}
          type moves
        </Typography>
      ) : null}
      <Button size="small" onClick={() => navigate("/")}>
        Back to List
      </Button>
    </Container>
  );
};

export default Type;
