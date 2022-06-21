import React from 'react';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Eye from './assets/Eye';
import EyeClose from './assets/EyeClose';
import './App.scss';

export default function Login() {
  return (
    <div className='mt-16 px-16 auth-screen'>
      {/* header */}
      <div className='flex flex-row h-14 items-center fixed w-full top-0 z-50'>
        <div className='flex flex-1 flex-row bg-white px-20 items-center h-full'>
          <div className='text-gray-300 text-4xl mr-auto cursor-pointer font-bold'>Cee</div>
          <div className='flex flex-row'>
            <div className='page-link mr-10 cursor-pointer w-16'>Home</div>
            <div className='page-link cursor-pointer w-20'>Product</div>
          </div>
        </div>
        <div className='flex w-1/2 h-full flex-row items-center justify-between bg-white'>
          <div className='ml-4 relative w-64'>
            <input
              className='border rounded-full pl-2 w-full h-7'
              placeholder='Search here'
            />
            <FaSearch className='absolute top-1.5 right-2.5' />
          </div>
          <div className='flex flex-row'>
            <FaUser className='text-2xl mr-10 text-gray-300' />
            <FaHeart className='text-2xl mr-10 text-gray-300' />
            <FaShoppingCart className='text-2xl mr-10 text-gray-300' />
            <FiLogOut className='text-2xl mr-10 text-gray-300' />
          </div>
        </div>
      </div>

      {/* content */}
      <div className='wrap-content'>
        <div className='left'></div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div className='mt-4'>Email</div>
            <input
              placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Must be at least 8 characters'
                className='border-black border rounded pl-2 w-full h-10'
                type={'password'}
              />
              <div className='eye-input'>  <EyeClose /> </div>
            </div>
            <div
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login
            </div>
            <div className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login as guest
            </div>
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Not a Member? <div to={'/register'} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</div></div>
              <div className='mt-2 px-8 text-center'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
