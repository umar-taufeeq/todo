import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import Todocontext from './Componenets/Todocontext';

createRoot(document.getElementById('root')).render(
  <>
  <Todocontext>
    <App  />
    <ToastContainer position="top-right"/>
    </Todocontext>
  </>
);
