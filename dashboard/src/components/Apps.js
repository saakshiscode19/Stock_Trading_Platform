import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import this
import App from './App'; // Or wherever your Dashboard/Home is rendered

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>
);