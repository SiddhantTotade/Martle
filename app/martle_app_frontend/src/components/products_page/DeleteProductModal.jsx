import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Component } from 'react';
import { Button } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { Snackbar } from '@mui/material';
import { SnackbarProvider } from 'notistack';

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
        this.state = {
            open: false
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleOpen = () => {
        console.log("Clicked");
        this.setState({ open: true })
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
        }).then(res => res.json()).then(() => { this.handleOpen() }, (error) => { console.log(error) })
    }


    render() {

        const { open } = this.state

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
                <SnackbarProvider maxSnack={2}>
                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} severity='success' autoHideDuration={3000} variant='filled' open={open} message="Deleted Successfully" />
                </SnackbarProvider>
            </div >
        );
    }
}