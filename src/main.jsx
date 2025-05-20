import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <>
    <App  />
    <ToastContainer position="top-right"/>
  </>
);
