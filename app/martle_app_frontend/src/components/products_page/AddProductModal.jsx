import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import { Button, Alert } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { Snackbar } from '@mui/material';
import { SnackbarProvider } from 'notistack';

let CATEGORY_CHOICES = [('M', 'Mobile'), ('L', 'Laptop'),
('TW', 'Top Wear'), ('BW', 'Bottom Wear'), ('W', 'Watch'),
('P', 'Printer'), ('F', 'Fan'), ('EB', 'Earbuds'),
('C', 'Camera'), ('O', 'Oil'), ('SH', 'Shower'), ('MU', 'Museli'), ('CL', 'Cleaner'), ('CA', 'Computer and Accessories')]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const buttonStyle = {
    background: '#0062e1',
    color: 'white',
    mt: '10px',
    '&:hover': {
        background: '#1976d2',
        color: 'white'
    }
}

export default class AddProductModal extends Component {

    fileObj = []
    fileArray = []

    constructor(props) {
        super(props)
        this.state = {
            product_data: [], product_image_file: [null], open: false, message: ""
        }
        this.uploadProduct = this.uploadProduct.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen = (result) => {
        this.setState({ open: true, message: result })
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then(data => { this.setState({ product_data: data }) })
    }

    uploadProduct(event) {
        event.preventDefault()
        fetch('http://127.0.0.1:8000/api/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_title: event.target.product_title.value,
                product_selling_price: event.target.product_selling_price.value,
                product_discounted_price: event.target.product_discounted_price.value,
                product_description: event.target.product_description.value,
                product_details: event.target.product_details.value,
                product_brand: event.target.product_brand.value,
                product_category: event.target.product_category.value,
            })
        }).then(res => res.json()).then((result) => { this.handleOpen(result) }, (error) => { console.log(error) })
    }

    render() {

        const { open } = this.state

        return (
            <div>
                <Modal {...this.props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-center items-center'>Add Product</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={this.uploadProduct}>
                                <div className='flex justify-center'>
                                    <div className='w-4/5 max-w-lg'>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Title</small></span>
                                            <input required type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Name' name='product_title' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Selling Price</small></span>
                                            <input required type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Selling Price' name='product_selling_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Discounted Price</small></span>
                                            <input required type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Discounted Price' name='product_discounted_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Description</small></span>
                                            <textarea required type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Description' name='product_description' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Details</small></span>
                                            <textarea required type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Details' name='product_details' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Brand</small></span>
                                            <input required type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Brand' name='product_brand' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Category</small></span>
                                            <select className='border-2 border-black rounded-md pl-2 p-1' name="product_category" id="">
                                                <option disabled>Select Product Category</option>
                                                {CATEGORY_CHOICES.map(items => (<option key={items} value={items[0]}>{items}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center w-4/5 m-auto'>
                                    <Button type='submit' className='flex w-full justify-center' sx={buttonStyle}>Save Product</Button>
                                </div>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
                <SnackbarProvider>
                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={3000} open={open} ><Alert severity='success' variant='filled'>{this.state.message}</Alert></Snackbar>
                </SnackbarProvider>
            </div >
        );
    }
}