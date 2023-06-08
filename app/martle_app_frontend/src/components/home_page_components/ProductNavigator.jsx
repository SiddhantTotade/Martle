import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { Link } from 'react-router-dom';

const style = 'flex flex-col justify-center items-center bg-blue-400 mt-8 rounded-lg p-2 hover:scale-125 hover:duration-200 duration-200 hover:bg-sky-600 translate-x-0 translate-y-0'

export default function ProductNavigator() {
    return (
        <div>
            <div className='flex justify-center items-center gap-5'>
                <Link to="/mobiles" className={style}>
                    <PhoneAndroidIcon />
                    <p>Mobiles</p>
                </Link>
                <Link to="/laptops" className={style}>
                    <LaptopMacIcon />
                    <p>Laptops</p>
                </Link>
                <Link to="/accessories" className={style}>
                    <ImportantDevicesIcon />
                    <p>Accessories</p>
                </Link>
                <Link to="/fashion" className={style}>
                    <CheckroomIcon />
                    <p>Fashion</p>
                </Link>
                <Link to="/electronics" className={style}>
                    <DevicesOtherIcon />
                    <p>Electronics</p>
                </Link>
            </div>
        </div>
    );
}