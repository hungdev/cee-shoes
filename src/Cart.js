import './App.scss';
import logo from './logo.svg';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { products } from './fakeData'

const sizeList = [40, 41, 42, 43]

function App() {
  return (
    <div>
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

      {/* cart */}
      <div className='mt-16 px-16'>
        <div className='text-4xl font-bold mb-4'>Items in Cart: 8</div>

        <div className='flex flex-row'>
          <div className='flex-1 mr-8'>
            <div className='flex flex-row hover:border p-2 mb-6'>
              <img src={`${require("./assets/images/shoe1.jfif")}`} alt={'shoes'} className='object-cover w-40 h-40' />
              <div className='ml-4 w-full'>
                <div className='flex justify-between'>
                  <div className='font-bold'>Nike Air Force 1 '07 LV8'</div>
                  <div className='font-bold'>8295$</div>
                </div>
                <div className='text-xs font-bold text-gray-600'>Nike</div>
                <div>Black/Rough Green/White/Total Orange</div>
                <div className='flex flex-row my-4'>
                  <div className="mr-10">
                    <label htmlFor="size">Size</label>
                    <select name="variant" id="variant" className="ml-2">
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                    </select>
                  </div>
                  <div className='flex flex-row'>
                    <div className='mr-2'>Quantity</div>
                    <div className='flex flex-row'>
                      <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>-</div>
                      <div className='h-6 w-6 bg-gray-300 flex justify-center items-center'>1</div>
                      <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>+</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row mt-4'>
                  <div className='mr-4 bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Move to wishlist</div>
                  <div className='bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Remove</div>
                </div>
              </div>
            </div>


          </div>

          <div className='w-72'>
            <div className='text-2xl font-bold'>ORDER SUMMARY</div>
            <div className='text-2xl font-bold'>(8 ITEMS)</div>

            <div className='flex justify-between mb-4 pl-2 mt-4'>
              <div>Subtotal</div>
              <div>54876$</div>
            </div>
            <div className='flex justify-between mb-4 pl-2'>
              <div>Discount</div>
              <div className='text-green-500'>-0$</div>
            </div>
            <div className='flex justify-between mb-4 pl-2'>
              <div>Delivery Charges</div>
              <div className='text-green-500'>FREE</div>
            </div>
            <div className='flex justify-between font-bold mb-4 pl-2'>
              <div>Total Amount</div>
              <div className=''>54876</div>
            </div>
            <div className='w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
              CHECKOUT
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
