import { useState } from "react";
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

import AppContainer from "../common/Container";

const rowsPerPageOptions = [5, 10, 25];

export default function Specification({ data }: any) {
  const technicalDetails = data ? JSON.parse(data) : {};
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AppContainer
      sx={{ marginTop: "20px", gap: "5px", display: "grid", mt: 3 }}
    >
      <Typography fontSize={20} fontWeight={"bold"}>
        Specification
      </Typography>
      <AppContainer sx={{ mt: 0 }}>
        <TableContainer>
          <Table>
            <TableBody>
              {Object.entries(technicalDetails)?.map(
                ([key, val]: [string, unknown]) => (
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
                )
              )}
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
      </AppContainer>
    </AppContainer>
  );
}
