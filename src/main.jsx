import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from "react-router-dom";
import './index.css';
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Auth/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>,
)
