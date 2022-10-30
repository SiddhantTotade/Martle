import '../../../src/index.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function NavBar() {
    return (
        <div className='border-white border-b'>
            <div className="flex items-center justify-around text-white gap-28 h-20">
                <a href='/' className='font-title text-sky-400 text-xl'>MARTLE</a>
                <div>
                    <a href='/' className='flex gap-1'>
                        <p>Address</p>
                        <PlaceIcon />
                    </a>
                </div>
                <form action='#' method='post' className='flex justify-center items-center w-2/5 gap-2'>
                    <input type="search" name="" id="" className='w-full flex items-center text-black border-none outline-none h-8 p-2.5 pr-2 rounded-md' />
                    <button type='submit' className='h-8 w-16 bg-white rounded-md'>
                        <SearchIcon className='bg-white text-blue-700' />
                    </button>
                </form>
                <div>
                    <a href='/' className='flex gap-1'>
                        <p>Orders</p>
                        <ShoppingBasketIcon />
                    </a>
                </div>
                <div>
                    <a href='/' className='flex gap-1'>
                        <p>Cart</p>
                        <ShoppingCartIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}