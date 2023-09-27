import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Collapse, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const TechnicalDetails = (props) => {
  const technicalDetails = props.product_description
    ? JSON.parse(props.product_description)
    : {};

  const { technicalDetailsPreShow, technicalDetailsPostShow } = Object.entries(
    technicalDetails
  ).reduce(
    (acc, [key, value], index) => {
      const target =
        index < 5 ? "technicalDetailsPreShow" : "technicalDetailsPostShow";
      acc[target][key] = value;
      return acc;
    },
    { technicalDetailsPreShow: {}, technicalDetailsPostShow: {} }
  );

  const dataLength = Object.keys(technicalDetails).length;

  const [expanded, setExpanded] = React.useState(false);

  const [showMore, setShowMore] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setShowMore(!showMore);
  };

  return (
    <Container sx={{ marginTop: "20px", gap: "5px", display: "grid" }}>
      <Typography fontSize={15} fontWeight={"bold"}>
        Technical Details
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {Object.entries(technicalDetailsPreShow).map(([key, val]) => (
              <TableRow>
                <TableCell
                  sx={{ width: "20%", padding: "5px" }}
                  style={{ height: "10px" }}
                  align="left"
                  component="th"
                  scope="row"
                >
                  {key}
                </TableCell>
                <TableCell
                  sx={{ width: "20%", padding: "5px" }}
                  style={{ height: "10px" }}
                  align="left"
                  component="th"
                  scope="row"
                >
                  {val}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {dataLength > 5 ? (
            showMore ? (
              ""
            ) : (
              <div
                className="text-sm cursor-pointer text-blue-700 mt-2"
                onClick={() => handleExpandClick()}
              >
                Show more
                <ExpandMoreIcon />
              </div>
            )
          ) : (
            ""
          )}
          <TableBody>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {Object.entries(technicalDetailsPostShow).map(([key, val]) => (
                <TableRow key={key}>
                  <TableCell
                    sx={{ width: "20%", padding: "5px" }}
                    style={{ height: "10px" }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {key}
                  </TableCell>
                  <TableCell
                    sx={{ width: "20%", padding: "5px" }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {val}
                  </TableCell>
                </TableRow>
              ))}
              {showMore ? (
                <div
                  className="text-sm cursor-pointer text-blue-700 mt-2"
                  onClick={() => handleExpandClick()}
                >
                  Show less
                  <ExpandLessIcon />
                </div>
              ) : (
                ""
              )}
            </Collapse>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TechnicalDetails;
