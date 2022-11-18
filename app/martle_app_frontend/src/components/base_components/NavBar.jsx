import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import React from 'react'
import Sidebar from './Sidebar';
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
            <div className='border-white border-b'>
                <div className="flex items-center justify-around text-white gap-28 h-20">
                    <div className='fixed -left-3 hover:cursor-pointer top-28 p-2 z-50 bg-white border-2 border-white rounded-3xl hover:translate-x-4 duration-300'>
                        <div onClick={() => this.setState({ sidebar: true })} className='left-3.5 p-2 m-0' ><KeyboardArrowRightOutlinedIcon className='text-blue-700 hover:cursor-pointer' /></div>
                    </div>
                    <Link to='/' className='font-title text-sky-400 tracking-widest underline decoration-slate-500 underline-offset-4 text-xl'>MARTLE</Link>
                    <div>
                        <Link to='/address' className='flex gap-1'>
                            <p>Address</p>
                            <PlaceIcon />
                        </Link>
                    </div>
                    <form action='#' method='post' className='flex justify-center items-center w-2/5 gap-2'>
                        <input type="search" name="" id="" className='w-full flex items-center text-black border-none outline-none h-8 p-2.5 pr-2 rounded-md' />
                        <button type='submit' className='h-8 w-16 bg-white rounded-md'>
                            <SearchIcon className='bg-white text-blue-700' />
                        </button>
                    </form>
                    <div>
                        <Link to='/orders' className='flex gap-1'>
                            <p>Orders</p>
                            <ShoppingBasketIcon />
                        </Link>
                    </div>
                    <div>
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