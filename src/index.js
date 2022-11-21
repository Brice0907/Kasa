import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/error/Error';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Root from './root/root';
import Home, { loader as homeLoader } from './pages/home/home';
import Appartement, { loader as ApartmentLoader } from './pages/appartements/appartement';
import Propos from './pages/propos/propos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home/>,
        loader: homeLoader
      },
      {
        path: 'apartment/:apartmentId',
        element: <Appartement/>,
        loader: ApartmentLoader
      },
      {
        path: '/propos',
        element: <Propos/>
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
