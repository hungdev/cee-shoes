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
import { categories } from './fakeData'

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
        <div className='flex w-1/2 h-full flex-row items-center justify-between'>
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

      {/* trademark */}
      <div className='flex flex-row move-down'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='text-6xl font-bold text-center mx-20'>REGAIN YOUR CONFIDENCE ON THE COURT.</div>
          <div className='text-xl mt-10'>Take your game to the next level.</div>
        </div>
        <div className='flex w-1/2 img-hero' />
      </div>

      {/* category */}
      <div className='flex flex-row justify-around px-10 mt-8'>
        {categories.map((e, i) => (
          <div className='border flex-1 justify-center items-center relative'
            style={i === 1 ? { marginLeft: 20, marginRight: 20 } : {}}
          >
            <div className="gradient-category"></div>
            <img src={e.img} alt={e.title} className='h-full w-full object-cover' />
            <div className='flex flex-col absolute top-1/2 left-1/2 transform-center'>
              <div className=' text-center text-white text-3xl font-bold'>{e.title}</div>
              <button className='bg-white p-2 round'>Shop Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* feature */}
      <div className='px-10 mt-8'>
        <div className='text-6xl font-bold'>FEATURED</div>
        <div className='feature-img'>#Off the Wall</div>
      </div>

    </div>
  );
}

export default App;
