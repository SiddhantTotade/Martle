import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Container } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const RatingBar = (props) => {
  return (
    <Container sx={{ width: props.width }}>
      <BorderLinearProgress
        variant="determinate"
        value={props.value}
        sx={{
          height: 6,
          borderRadius: 5,
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: props.color,
          },
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#EAEAEA",
          },
        }}
      />
    </Container>
  );
};

export default RatingBar;
