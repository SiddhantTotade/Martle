import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TechnicalDetails = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, height: "1vh" }} aria-label="simple table">
        <TableBody>
          {props.product_description
            ? Object.entries(JSON.parse(props.product_description)).map(
                ([key, val]) => (
                  <TableRow key={key}>
                    <TableCell
                      style={{ height: "10px" }}
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {key}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {val}
                    </TableCell>
                  </TableRow>
                )
              )
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TechnicalDetails;
