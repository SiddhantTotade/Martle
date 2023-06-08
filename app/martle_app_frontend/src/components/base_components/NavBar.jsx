import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import React from 'react'
import Sidebar from './Sidebar';
import { TextField, Box, Button } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebar: false
        }
    }

    render() {

        let sidebar = () => this.setState({ sidebar: false })

        return (
            <div className='border-white bg-slate-900 fixed w-NavBar top-0 z-50'>
                <div className="flex items-center justify-evenly text-white gap-18 h-20">
                    <div className='fixed -left-3 hover:cursor-pointer top-28 p-2 z-50 bg-white border-2 border-white rounded-3xl hover:translate-x-4 duration-300'>
                        <div onClick={() => this.setState({ sidebar: true })} className='left-3.5 p-2 m-0' ><KeyboardArrowRightOutlinedIcon className='text-blue-700 hover:cursor-pointer' /></div>
                    </div>
                    <Link to='/' className='font-title text-rose-600 tracking-wide text-xl hover:text-rose-700'>MARTLE</Link>
                    <div className='hover:text-rose-500'>
                        <Link to='/address' className='flex gap-1'>
                            <p>Address</p>
                            <PlaceIcon />
                        </Link>
                    </div>
                    <form action='#' method='post' className='flex justify-center items-center'>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 2, width: '75ch' }, color: 'white'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField size='small' InputLabelProps={{ style: { color: '#c9c9c9' } }} inputProps={{ style: { alignItems: 'center', justifyContent: "center", color: 'white', fontSize: 'medium' } }} sx={{
                                "& .MuiInputLabel-root": { color: 'white' },
                                "&:hover .MuiOutlinedInput-root": { "& > fieldset": { borderColor: 'blue' } },
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: "white" },
                                }
                            }} id="outlined-search" label="Search Products" type="search" />
                        </Box>
                        <Button variant="contained">
                            <SearchIcon sx={{ fontSize: 'x-large' }} />
                        </Button>
                    </form>
                    <div className='hover:text-rose-500'>
                        <Link to='/orders' className='flex gap-1'>
                            <p>Orders</p>
                            <ShoppingBasketIcon />
                        </Link>
                    </div>
                    <div className='hover:text-rose-500'>
                        <Link to='/cart' className='flex gap-1'>
                            <p>Cart</p>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                </div>
                <Sidebar open={this.state.sidebar} onClose={sidebar} />
            </div>
        )
    }
}