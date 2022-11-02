import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddProductModal from './AddProductModal'

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

const buttonStyle = {
    background: '#0062e1',
    color: 'white',
    '&:hover': {
        background: '#1976d2',
        color: 'white'
    }
}

export default class ProductTables extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [], addModalShow: false
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
        let addModalClose = () => this.setState({ addModalShow: false })

        const rows = empData.map((item) =>
            <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">{item.product_title}</StyledTableCell>
                <StyledTableCell align="right">{item.product_selling_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_discounted_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_description}</StyledTableCell>
                <StyledTableCell align="right">{item.product_brand}</StyledTableCell>
                <StyledTableCell align="right">
                    <div className="flex justify-end items-center gap-5">
                        <Link to={`/product/${item.id}`} className="text-green-600">Edit</Link>
                        <Link to={`/product/${item.id}`} className="text-red-600">Delete</Link>
                    </div>
                </StyledTableCell>
            </StyledTableRow>
        );

        return (
            <div>
                <div className='w-4/5 m-auto mt-20'>
                    <div className='flex justify-start'>
                        <Button sx={buttonStyle} onClick={() => this.setState({ addModalShow: true })}>Add Product</Button>
                    </div>
                    <TableContainer component={Paper} className="mt-2">
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Product Name</StyledTableCell>
                                    <StyledTableCell align="right">Product selling price</StyledTableCell>
                                    <StyledTableCell align="right">Product discounted price</StyledTableCell>
                                    <StyledTableCell align="right">Product Description</StyledTableCell>
                                    <StyledTableCell align="right">Product brand</StyledTableCell>
                                    <StyledTableCell align="right">Product action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <AddProductModal open={this.state.addModalShow} onClose={addModalClose} />
                </div>
            </div>
        );
    }
}