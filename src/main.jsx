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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/craftitems',
        element: <CarftItems/>
      },
      {
        path:'/addcraftitems',
        element:<AddCraftitems/>
      },
      {
        path:'/mycraftitems',
        element:<MyCraftitems/>
      },
      {
        path:'/viewcard/:id',
        element: <ViewCard/>,
        loader: ()=> fetch('http://localhost:4000/alldata')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
      <Toaster position="top-right"
        reverseOrder={false} />
    </Context>
  </React.StrictMode>,
)
