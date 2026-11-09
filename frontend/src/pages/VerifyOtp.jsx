import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import { server } from "../main.jsx";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandeler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();

    const email = localStorage.getItem("email");
    try {
      const { data } = await axios.post(`${server}/api/v1/verify`, {
        email,
        otp
      }, {
        withCredentials: true,
      });
      toast(data.message);
      localStorage.clear("email");
    }
    catch (error) {
      toast.error(error.response.data.message);
    }
    finally {
      setBtnLoading(false);
    }
  }
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
          <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <form onSubmit={submitHandeler} className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg text-center font-medium title-font mb-5">OTP Verify</h2>
          <div className="relative mb-4">
            <label htmlFor="otp" className="leading-7 text-sm text-gray-400">OTP</label>
            <input type="number" id="otp" name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button
            disabled={btnLoading}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{
              btnLoading ? "Submitting..." : "Button"
            }</button>
          <Link to={"/login"} className="text-xs mt-3 text-center hover:text-gray-300">Go to login page</Link>
        </form>
      </div>
    </section>
  )
}
