import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import { Button } from '@mui/material';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

let CATEGORY_CHOICES = [('M', 'Mobile'), ('L', 'Laptop'),
('TW', 'Top Wear'), ('BW', 'Bottom Wear'), ('W', 'Watch'),
('P', 'Printer'), ('F', 'Fan'), ('EB', 'Earbuds'),
('C', 'Camera'), ('O', 'Oil'), ('SH', 'Shower'), ('MU', 'Museli'), ('CL', 'Cleaner'), ('CA', 'Computer and Accessories')]

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

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
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
            product_data: [], product_img_file: []
        }
        this.updateProduct = this.updateProduct.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        this.imagePreview = this.imagePreview.bind(this)
    }

    product_image = 'productimg.jpg'
    imagesrc = 'http://127.0.0.1:8000/api/product-images/savefile/' + this.product_image

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/api/product/${this.props.id}`)
            .then((res) => res.json())
            .then(data => { this.setState({ product_data: data }) })
    }

    updateProduct(event) {
        event.preventDefault()
        fetch(`http://127.0.0.1:8000/api/product/${this.props.id}`, {
            method: 'PUT',
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
        }).then(res => res.json()).then((result) => { console.log(result) }, (error) => { console.log(error) })
    }

    uploadImage = (event) => {
        // e.preventDefault()
        let fileData = new FormData()
        this.product_image = event.target.files
        console.log(this.product_image);
        fileData.append('product_image', this.props.id)
        fileData.append('product_image_url', event.target.product_image_url)
        if (event.target.files.length > 1) {
            for (let i = 0; i < event.target.files.length; i++) {
                fileData.append('product_img_file', event.target.files[i], event.target.files[i].name)
                console.log(event.target.files[i].name);
            }
        }
        console.log(fileData);
        fetch('http://127.0.0.1:8000/api/product-images/savefile/', {
            method: 'POST',
            body: fileData,
            // headers: { 'content-type': 'multipart/form-data' },
        }).then(res => res.json()).then((result) => { console.log(result) }, (err) => console.log(err))
    }

    imagePreview(event) {
        this.fileObj.push(event.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({
            product_image_file: this.fileArray
        })
    }

    render() {

        return (
            <div>
                <Modal {...this.props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-center items-center'>Edit Product</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className='flex gap-5 justify-between'>
                                <form onSubmit={this.updateProduct} className='w-full' >
                                    <div className='w-full max-w-lg'>
                                        <div className='flex flex-col mt-2'>
                                            <span className='flex'><small>Product id</small></span>
                                            <input type='text' defaultValue={this.props.id} disabled className='border-2 rounded-md pl-2 p-1' name='product_id' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Title</small></span>
                                            <input type='text' defaultValue={this.props.title} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Name' name='product_title' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Selling Price</small></span>
                                            <input type='number' defaultValue={this.props.selling_price} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Selling Price' name='product_selling_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Discounted Price</small></span>
                                            <input type='number' defaultValue={this.props.discounted_price} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Discounted Price' name='product_discounted_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Description</small></span>
                                            <textarea type='text' defaultValue={this.props.description} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Description' name='product_description' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Details</small></span>
                                            <textarea type='text' defaultValue={this.props.details} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Details' name='product_details' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Brand</small></span>
                                            <input type='text' defaultValue={this.props.brand} className='border-2 rounded-md pl-2 p-1' placeholder='Enter Product Brand' name='product_brand' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Category</small></span>
                                            <select className='border-2 rounded-md pl-2 p-1' name="product_category" id="">
                                                <option disabled>Select Product Category</option>
                                                {CATEGORY_CHOICES.map(items => (<option key={items} value={items[0]}>{items}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='grid'>
                                        <Button type='submit' sx={buttonStyle}>Update Product</Button>
                                    </div>
                                </form>
                                <form onSubmit={this.uploadImage} className='w-full'>
                                    <div className='w-full max-w-sm'>
                                        <div className='flex flex-col mt-2'>
                                            <span className='flex justify-between'>
                                                <small>Product Images URL</small>
                                                <small className='text-red-500'>*Optional</small>
                                            </span>
                                            <input type='url' multiple className='border-2  rounded-md pl-2 p-1' name='product_image_url' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span className='flex justify-between'>
                                                <small>Product Images Files</small>
                                                <small className='text-red-500'>*Optional</small>
                                            </span>
                                            <input type='file' multiple className='border-2 rounded-md pl-2 p-1' name='product_img_file' onChange={this.uploadImage} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Preview</small></span>
                                            <div className='object-contain'>
                                                <Carousel responsive={responsive} className='w-full object-contain'>
                                                    {(this.fileArray || []).map(url => (
                                                        <img src={url} alt="product" className='w-96 h-96 object-contain' />
                                                    ))}
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid mt-8'>
                                        <Button type='submit' sx={buttonStyle}>Upload Images</Button>
                                    </div>
                                </form>
                            </div>
                        </Typography>
                    </Box>
                </Modal >
            </div >
        );
    }
}