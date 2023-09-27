import React, { useState } from "react";

import {
  Container,
  Typography,
  TableCell,
  TableBody,
  TablePagination,
  Table,
  TableContainer,
  TableRow,
} from "@mui/material";

const rowsPerPageOptions = [5, 10, 25];

const TechnicalDetails = (props) => {
  const technicalDetails = props.product_description
    ? JSON.parse(props.product_description)
    : {};

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container sx={{ marginTop: "20px", gap: "5px", display: "grid" }}>
      <Typography fontSize={15} fontWeight={"bold"}>
        Technical Details
      </Typography>
      <Container>
        <TableContainer>
          <Table>
            <TableBody>
              {Object.entries(technicalDetails).map(([key, val]) => (
                <TableRow key={key}>
                  <TableCell
                    sx={{
                      padding: "7px",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    {key}
                  </TableCell>
                  <TableCell sx={{ padding: "7px", fontSize: "13px" }}>
                    {val}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={Object.entries(technicalDetails).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </Container>
  );
};

export default TechnicalDetails;
