import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navber';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { ApiContext } from './context/Context';

const MainPage = () => {
    const location = useLocation()
    const [path, setPath] = useState('HOME')
    const pathName = location.pathname.replaceAll('/', '').toUpperCase()
    const { loader } = useContext(ApiContext)
    // console.log(loader);
    useEffect(() => {
        if (pathName) {
            setPath(pathName)
        }
        if (!pathName) {
            setPath('HOME')
        }
    }, [pathName])
    return (
        <div className='font-mono'>
            <Helmet>

                <title>{path} || SM Textile</title>
            </Helmet>
            
            {
                loader ? <div className='flex flex-col min-h-screen'>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div> : <div className='flex justify-center items-center h-screen'><ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /></div>
            }

        </div>
    );
};

export default MainPage;