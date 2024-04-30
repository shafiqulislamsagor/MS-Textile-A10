import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Context from './context/Context';
import { Toaster } from 'react-hot-toast';
import CarftItems from './page/CarftItems';
import AddCraftitems from './page/AddCraftitems';
import MyCraftitems from './page/MyCraftitems';
import ViewCard from './page/ViewCard';
import UpdateCard from './page/UpdateCard';
import { HelmetProvider } from 'react-helmet-async';
import Privet from './context/PrivetRoutes';
import PageNotFound from './page/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <PageNotFound />
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <PageNotFound />
      },
      {
        path: '/register',
        element: <Register />,
        errorElement: <PageNotFound />
      },
      {
        path: '/craftitems',
        element: <CarftItems />,
        errorElement: <PageNotFound />
      },
      {
        path: '/addcraftitems',
        element: <Privet><AddCraftitems /></Privet>,
        errorElement: <PageNotFound />
      },
      {
        path: '/mycraftitems',
        element: <Privet><MyCraftitems /></Privet>,
        errorElement: <PageNotFound />
      },
      {
        path: '/viewcard/:id',
        element: <Privet><ViewCard /></Privet>,
        loader: () => fetch('https://sm-bead.vercel.app/alldata'),
        errorElement: <PageNotFound />
      },
      {
        path: '/updatecard/:id',
        element: <Privet><UpdateCard /></Privet>,
        errorElement: <PageNotFound />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right"
          reverseOrder={false} />
      </HelmetProvider>
    </Context>
  </React.StrictMode>,
)
