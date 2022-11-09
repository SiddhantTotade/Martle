import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AddProductModal from './AddProductModal'
import EditProductModal from './EditProductModal'
import DeleteProductModal from './DeleteProductModal';

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

const editButton = {
    background: '#41a345',
    color: 'white',
    '&:hover': {
        background: '#50c955',
        color: 'white'
    }
}

const deleteButton = {
    background: '#cf0d0d',
    color: 'white',
    '&:hover': {
        background: '#ed0909',
        color: 'white'
    }
}

export default class ProductTables extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [], addModalShow: false, editModalShow: false, deleteModalShow: false, title: ''
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

        const prodData = this.state.data
        console.log();
        const { id, title, selling_price, discounted_price, description, details, brand, category } = this.state
        let addModalClose = () => this.setState({ addModalShow: false })
        let editModalClose = () => this.setState({ editModalShow: false })
        let deleteModalClose = () => this.setState({ deleteModalShow: false })

        const rows = prodData.map((item) =>
            <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">{item.product_title}</StyledTableCell>
                <StyledTableCell align="right">{item.product_selling_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_discounted_price}</StyledTableCell>
                <StyledTableCell align="right">{item.product_description}</StyledTableCell>
                <StyledTableCell align="right">{item.product_brand}</StyledTableCell>
                <StyledTableCell align="right">
                    <div className="flex justify-end items-center gap-5">
                        <Button onClick={() => this.setState({ editModalShow: true, id: item.id, title: item.product_title, selling_price: item.product_selling_price, discounted_price: item.product_discounted_price, description: item.product_description, details: item.product_details, brand: item.product_brand, category: item.product_category })} sx={editButton}>Edit</Button>
                        <Button onClick={() => this.setState({ deleteModalShow: true, id: item.id })} sx={deleteButton}>Delete</Button>
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
                    <EditProductModal open={this.state.editModalShow} id={id} title={title} selling_price={selling_price} discounted_price={discounted_price} description={description} details={details} brand={brand} category={category} onClose={editModalClose} />
                    <DeleteProductModal open={this.state.deleteModalShow} id={id} onClose={deleteModalClose} />
                </div>
            </div>
        );
    }
}