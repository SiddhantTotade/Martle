import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import AddProductModal from './AddProductModal'
import EditProductModal from './EditProductModal'
import DeleteProductModal from './DeleteProductModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#191970",
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

const editBtn = {
    width: '40px',
    color: 'green'
}

const delBtn = {
    width: '40px',
    color: 'red',
}

const prodTitle = {
    fontSize: 40,
    color: 'rgb(56 189 248 / var(--tw-text-opacity))',
    textDecoration: 'underline',
    letterSpacing: '3px',
    lineHeight:'10px',
    textDecorationColor:'gray',
    textUnderlineOffset: '8px'
}

export default class ProductTables extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [], addModalShow: false, editModalShow: false, deleteModalShow: false, images: [], value: "", dataSource: "", tableFilter: ""
        }
    }

    searchTable = (e) => {
        if (e.target.value !== "") {
            this.setState({ value: e.target.value })
            const filterTable = this.state.data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())))
            this.setState({ tableFilter: filterTable })
        }
        else {
            this.setState({ value: e.target.value })
            this.setState({ dataSource: this.state.dataSource })
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/product")
            .then(res => res.json()).then((data) => data === 'NULL' ? this.setState({ data: null }) : this.setState({ data: data }))
    }

    render() {

        let value = this.state.value
        let tableFilter = this.state.tableFilter
        let prodData = this.state.data
        let { id, title, selling_price, discounted_price, description, details, brand, category } = this.state

        let addModalClose = () => this.setState({ addModalShow: false })
        let editModalClose = () => this.setState({ editModalShow: false })
        let deleteModalClose = () => this.setState({ deleteModalShow: false })

        let tempTable =
            <StyledTableRow>
                <StyledTableCell align='center' >No Product Data Available</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </StyledTableRow>

        let rows = prodData == null ? tempTable :
            prodData.map((item) =>
                <StyledTableRow key={item.id}>
                    <StyledTableCell align="center">{item.id}</StyledTableCell>
                    <StyledTableCell align="center">{item.product_title}</StyledTableCell>
                    <StyledTableCell align="center">{item.product_selling_price}</StyledTableCell>
                    <StyledTableCell align="center">{item.product_discounted_price}</StyledTableCell>
                    <StyledTableCell align="center">{item.product_brand}</StyledTableCell>
                    <StyledTableCell align="center">
                        <Button onClick={() => this.setState({ editModalShow: true, id: item.id, title: item.product_title, selling_price: item.product_selling_price, discounted_price: item.product_discounted_price, description: item.product_description, details: item.product_details, brand: item.product_brand, category: item.product_category })}><EditIcon sx={editBtn} /></Button>
                        <Button onClick={() => this.setState({ deleteModalShow: true, id: item.id })}><DeleteIcon sx={delBtn} /></Button>
                    </StyledTableCell>
                </StyledTableRow>
            );

        return (
            <div>
                <div className='w-4/5 m-auto mt-20'>
                    <div className='text-white flex justify-center'>
                        <Typography sx={prodTitle} >All Products</Typography>
                    </div>
                    <div className='flex justify-start mt-10'>
                        <Button sx={buttonStyle} onClick={() => this.setState({ addModalShow: true })}>Add Product</Button>
                        <Search className='text-white'>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                onChange={this.searchTable}
                                value={value}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                    <TableContainer component={Paper} className="mt-2">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Product ID</StyledTableCell>
                                    <StyledTableCell align="center">Product Name</StyledTableCell>
                                    <StyledTableCell align="center">Product Selling Price</StyledTableCell>
                                    <StyledTableCell align="center">Product Discounted Price</StyledTableCell>
                                    <StyledTableCell align="center">Product Brand</StyledTableCell>
                                    <StyledTableCell align="center">Product Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {value.length > 0 ? tableFilter.map((item) => {
                                    return <StyledTableRow key={item.id}>
                                        <StyledTableCell align="center">{item.id}</StyledTableCell>
                                        <StyledTableCell align="center">{item.product_title}</StyledTableCell>
                                        <StyledTableCell align="center">{item.product_selling_price}</StyledTableCell>
                                        <StyledTableCell align="center">{item.product_discounted_price}</StyledTableCell>
                                        <StyledTableCell align="center">{item.product_brand}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button onClick={() => this.setState({ editModalShow: true, id: item.id, title: item.product_title, selling_price: item.product_selling_price, discounted_price: item.product_discounted_price, description: item.product_description, details: item.product_details, brand: item.product_brand, category: item.product_category })}><EditIcon sx={editBtn} /></Button>
                                            <Button onClick={() => this.setState({ deleteModalShow: true, id: item.id })}><DeleteIcon sx={delBtn} /></Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                }) : rows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <AddProductModal open={this.state.addModalShow} onClose={addModalClose} />
                    <EditProductModal open={this.state.editModalShow} id={id} title={title} selling_price={selling_price} discounted_price={discounted_price} description={description} details={details} brand={brand} category={category} onClose={editModalClose} />
                    <DeleteProductModal open={this.state.deleteModalShow} id={id} onClose={deleteModalClose} />
                </div>
            </div >
        );
    }
}