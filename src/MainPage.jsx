import { Outlet } from 'react-router-dom';
import Navbar from './components/Navber';
import Footer from './components/Footer';

const MainPage = () => {
    return (
        <div className='font-mono'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainPage;