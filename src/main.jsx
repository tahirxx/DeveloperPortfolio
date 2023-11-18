import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Reem+Kufi+Fun:wght@400;500;600;700&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
);
