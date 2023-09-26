import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

const TechnicalDetails = (props) => {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Typography fontSize={15} fontWeight={"bold"}>
        Technical Details
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {props.product_description
              ? Object.entries(JSON.parse(props.product_description)).map(
                  ([key, val]) => (
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
                        sx={{ width: "100%", padding: "5px" }}
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {val}
                      </TableCell>
                    </TableRow>
                  )
                )
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TechnicalDetails;
