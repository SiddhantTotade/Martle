import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default class ProductTables extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    fetchData() {
        fetch("http://127.0.0.1:8000/api/product")
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const empData = this.state.data
        const rows = empData.map((item) =>
            <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">{item.product_title}</StyledTableCell>
                <StyledTableCell align="right">{item.product_selling_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_discounted_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_description}</StyledTableCell>
                <StyledTableCell align="right">{item.product_brand}</StyledTableCell>
            </StyledTableRow>
        );

        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="right">Product selling price</StyledTableCell>
                            <StyledTableCell align="right">Product discounted price</StyledTableCell>
                            <StyledTableCell align="right">Product Description</StyledTableCell>
                            <StyledTableCell align="right">Product brand</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}