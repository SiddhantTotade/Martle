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
            product_data: [], product_image_file: [null]
        }
        this.submitProductData = this.submitProductData.bind(this)
        this.handleImagesFile = this.handleImagesFile.bind(this)
    }

    product_image = 'product-image'
    imagesrc = 'http://127.0.0.1:8000/media/' + this.product_image

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then(data => { this.setState({ product_data: data }) })
    }

    submitProductData(event) {
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
        }).then(res => res.json()).then((result) => { alert(result) }, (error) => { console.log(error) })
    }

    handleImagesFile(event) {
        this.fileObj.push(event.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({
            product_image_file: this.fileArray
        })
        this.product_image = event.target.files[0].name
        const formData = new FormData()
        formData.append('product_image', event.target.files[0], event.target.files[0].name)
        fetch('http://127.0.0.1:8000/api/product-images/savefile', {
            method: 'POST',
            body: JSON.stringify({
                product_img_file: this.image
            })
        }).then(res => res.json()).then((result) => { this.imagesrc = 'http://127.0.0.1:8000/media/' + result }, (err) => console.log(err))
    }


    render() {

        return (
            <div>
                <Modal {...this.props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-center items-center'>Add Product</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={this.submitProductData} >
                                <div className='flex justify-between gap-10'>
                                    <div className='w-4/5 max-w-lg'>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Title</small></span>
                                            <input type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Name' name='product_title' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Selling Price</small></span>
                                            <input type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Selling Price' name='product_selling_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Discounted Price</small></span>
                                            <input type='number' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Discounted Price' name='product_discounted_price' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Description</small></span>
                                            <textarea type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Description' name='product_description' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Details</small></span>
                                            <textarea type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Details' name='product_details' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Brand</small></span>
                                            <input type='text' className='border-2 border-black rounded-md pl-2 p-1' placeholder='Enter Product Brand' name='product_brand' />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Category</small></span>
                                            <select className='border-2 border-black rounded-md pl-2 p-1' name="product_category" id="">
                                                <option disabled>Select Product Category</option>
                                                {CATEGORY_CHOICES.map(items => (<option key={items} value={items[0]}>{items}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-4/5 max-w-sm'>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Product Images</small></span>
                                            <input type='file' multiple className='border-2 border-black rounded-md pl-2 p-1' name='product_image' onChange={this.handleImagesFile} />
                                        </div>
                                        <div className='flex flex-col mt-2'>
                                            <span><small>Preview</small></span>
                                            <div className='object-contain'>
                                                <Carousel responsive={responsive} className='w-full object-contain'>
                                                    {(this.fileArray || []).map(url => (
                                                        <img src={url} alt="product" className='w-96 h-96 object-contain rounded-sm' />
                                                    ))}
                                                </Carousel>
                                            </div>
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