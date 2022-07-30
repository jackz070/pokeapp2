import { Brightness1 } from "@mui/icons-material";
import Chip from "@mui/material/Chip";

import typeColorChart from "../utils/typeColorChart";

const TypeChip = ({ type }) => {
  type = type[0]?.toUpperCase() + type.substring(1);
  return (
    <Chip
      component="a"
      href={`/type/${type.toLowerCase()}`}
      label={type[0]?.toUpperCase() + type.substring(1)}
      clickable
      sx={{
        backgroundColor: typeColorChart[type],
        color: "white",
        marginLeft: "10px",
        marginRight: "10px",
        "&:hover": {
          backgroundColor: typeColorChart[type],
          filter: "brightness(1.15)",
        },
      }}
    />
  );
};

export default TypeChip;
