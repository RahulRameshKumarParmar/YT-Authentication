import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import VerifyOtp from '../src/pages/VerifyOtp';
import {ToastContainer} from "react-toastify";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <ToastContainer/>
      </ BrowserRouter>
    </>
  )
}
