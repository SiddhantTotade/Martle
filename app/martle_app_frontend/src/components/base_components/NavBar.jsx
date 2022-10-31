import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Router>
            <div className='border-white border-b'>
                <div className="flex items-center justify-around text-white gap-28 h-20">
                    <Link to='/' className='font-title text-sky-400 text-xl'>MARTLE</Link>
                    <div>
                        <Link to='/' className='flex gap-1'>
                            <p>Address</p>
                            <PlaceIcon />
                        </Link>
                    </div>
                    <div>
                        <Link to='/product' className='flex gap-1'>
                            <p>Product Upload</p>
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
                        <Link to='/' className='flex gap-1'>
                            <p>Orders</p>
                            <ShoppingBasketIcon />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='flex gap-1'>
                            <p>Cart</p>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </Router>
    );
}