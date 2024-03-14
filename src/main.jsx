import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from 'react-router-dom';

import './Lang/i18n'

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeicons/primeicons.css'; //primeicons
import 'primereact/resources/primereact.css'; //style

import './assets/css/bootstrap.min.css'// bootstrap
import './assets/fontawesome/css/all.min.css'// fontawesome
import './assets/css/global/style.css'// css  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
)
