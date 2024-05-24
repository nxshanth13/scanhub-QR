// frontend/src/App.js

import React, { useState } from 'react';

import QRCodeGenerator from './QRCodeGenerator';
import QRCodeScanner from './QRCodeScanner';
import Login from './components/Login'
import Dashboard from './Dashboard'
import PrivateRoutes from './utils/PrivateRoutes';
import MassQRCodeGenerator from './MassQRCodeGenerator';
import Landingpage from './Landingpage';

import { Route,BrowserRouter,Routes,PrivateRoute, Navigate } from 'react-router-dom'

import HomePage from './HomePage';
import Aboutus from './Aboutus';
import Manual from './Manual';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/scan' element={<QRCodeScanner />} exact></Route>
            <Route path="/dashboard" element={<Dashboard />} exact></Route>
          </Route>
          <Route path='/generate' element={<QRCodeGenerator />} exact></Route>
          <Route path='/massgen' element={<MassQRCodeGenerator />} exact></Route>
          <Route path='/features' element={<Landingpage />} exact></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/manual" element={<Manual />}></Route>
          <Route path="login" element={<Login />} />
          <Route path='/user-details/:uniqueNumber' element={<QRCodeScanner />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
