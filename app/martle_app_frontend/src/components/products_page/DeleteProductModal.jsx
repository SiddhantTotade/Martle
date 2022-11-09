import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import { Button } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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

export default class DeleteProductModal extends Component {

    constructor(props) {
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/api/product/${this.props.id}`)
            .then((res) => res.json())
            .then(data => { this.setState({ product_data: data }) })
    }

    deleteProduct(event) {
        event.preventDefault()
        fetch(`http://127.0.0.1:8000/api/product/${this.props.id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then((result) => { console.log(result) }, (error) => { console.log(error) })
    }

    render() {

        return (
            <div>
                <Modal {...this.props} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className='flex justify-center items-center'>Delete Product</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className='flex gap-5 justify-between'>
                                <form onSubmit={this.deleteProduct} className='w-full' >
                                    <div className='flex justify-center'>
                                        <span>Are you sure you want to delete this product with Id : {this.props.id}</span>
                                    </div>
                                    <div className='grid'>
                                        <Button type='submit' sx={buttonStyle}>Delete Product</Button>
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