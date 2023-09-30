import * as React from "react";

import { styled } from "@mui/material/styles";
import { Collapse, IconButton, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ContentCollapse = ({ data, handleRatingReview }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    handleRatingReview(!expanded);
  };

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {data}
      </Collapse>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </Box>
  );
};

export default ContentCollapse;
