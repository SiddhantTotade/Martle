import '../../../src/index.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const style = 'flex flex-col justify-center items-center bg-blue-300 mt-3 rounded-lg p-2 hover:scale-105 hover:duration-200 hover:bg-sky-600'

export default function ProductNavigator() {
    return (
        <div className=''>
            <div className='flex justify-center items-center gap-2'>
                <a href="/" className={style}>
                    <PhoneAndroidIcon />
                    <p>Mobiles</p>
                </a>
                <a href="/" className={style}>
                    <LaptopMacIcon />
                    <p>Laptops</p>
                </a>
                <a href="/" className={style}>
                    <ImportantDevicesIcon />
                    <p>Accessories</p>
                </a>
                <a href="/" className={style}>
                    <CheckroomIcon />
                    <p>Fashion</p>
                </a>
                <a href="/" className={style}>
                    <DevicesOtherIcon />
                    <p>Electronics</p>
                </a>
            </div>
        </div>
    );
}