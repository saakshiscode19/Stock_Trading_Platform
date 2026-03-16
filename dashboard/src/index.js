import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import Home from './components/Home'; // 1. Import Home instead of Dashboard!
import Login from './components/Login';
import Signup from './components/Signup';

// The Global Interceptor rule
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Home />} /> {/* 2. Render Home here! */}
    </Routes>
  </BrowserRouter>
);