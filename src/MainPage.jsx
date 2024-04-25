import { Outlet } from 'react-router-dom';
import Navbar from './components/Navber';

const MainPage = () => {
    return (
        <div className='font-mono'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainPage;