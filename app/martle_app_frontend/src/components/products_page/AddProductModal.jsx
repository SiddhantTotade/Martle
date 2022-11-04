import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import { Button } from '@mui/material';

let CATEGORY_CHOICES = [('Mobile'), ('Laptop'),
('Top Wear'), ('Bottom Wear'), ('Watch'),
('Printer'), ('Fan'), ('Earbuds'),
('Camera'), ('Oil'), ('Shower'), ('Museli'), ('Cleaner'), ('Computer and Accessories')]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
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

    constructor(props) {
        super(props)
        this.state = {
            product_title: "",
            product_selling_price: "",
            product_discounted_price: "",
            product_description: "",
            product_details: "",
            product_brand: "",
            product_category: "",
            product_image: "",
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleFile = this.handleFile.bind(this)
    }

    product_image = 'product_image'
    imagesrc = 'http://127.0.0.1:8000/media/' + this.product_image

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then(data => { this.setState({ productData: data }) })
    }

    changeHandler(event) {
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
        // const formData = new FormData
        // fetch('http://127.0.0.1:8000/media/product_images', {
        //     method: 'POST',
        //     body: formData
        // }).then(res => res.json()).then((result) => { this.imagesrc = 'http://127.0.0.1:8000/media/' + result }, (err) => console.log(err))

        // console.log(event.target.value);
    }

    handleFile(event) {
        console.log(event.target.value);
        this.product_image = event.target.name
        const formData = new FormData()
        formData.append('product_image', event.target.files[0], event.target.files[0].name)
        console.log(formData);
        fetch('http://127.0.0.1:8000/api/product-images/savefile/', {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then((result) => { this.imagesrc = 'http://127.0.0.1:8000/media/' + result }, (err) => console.log(err))
    }

    submitForm() {
        fetch('http://127.0.0.1:8000/api/media/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((data) => console.log(data));

        this.setState({
            product_title: "",
            product_selling_price: "",
            product_discounted_price: "",
            product_description: "",
            product_details: "",
            product_brand: "",
            product_category: "",
            product_image: "",

        });
    }

    render() {

        return (
            <div>
                <Modal {...this.props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-center items-center'>Add Product</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={this.submitForm} >
                                <div className='flex justify-between gap-10'>
                                    <div className='w-4/5'>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Title</small></label>
                                            <input type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Name' name='product_title' value={this.state.product_title} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Selling Price</small></label>
                                            <input type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Selling Price' name='product_selling_price' value={this.state.product_selling_price} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Discounted Price</small></label>
                                            <input type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Discounted Price' name='product_discounted_price' value={this.state.product_discounted_price} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Description</small></label>
                                            <textarea type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Description' name='product_description' value={this.state.product_description} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Details</small></label>
                                            <textarea type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Details' name='product_details' value={this.state.product_details} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Brand</small></label>
                                            <input type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Brand' name='product_brand' value={this.state.product_brand} onChange={this.changeHandler} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor="category"><small>Product Category</small></label>
                                            <select className='border-2 border-black rounded-md pl-2 p-1' name="product_category" id="" value={this.state.product_category} onChange={this.changeHandler}>
                                                <option disabled>Select Product Category</option>
                                                {CATEGORY_CHOICES.map(items => (<option key={items} value={items}>{items}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-4/5'>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Product Images</small></label>
                                            <input type='file' multiple className='border-2 border-black rounded-md pl-2 p-1' name='product_image' onChange={this.handleFile} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <label htmlFor=""><small>Preview</small></label>
                                            <img src={this.imagesrc} alt="" className='border-2 border-red-600 h-96' />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid'>
                                    <Button type='submit' sx={buttonStyle}>Save Product</Button>
                                </div>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div >
        );
    }
}