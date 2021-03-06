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

      {/* product detail */}
      <div>
        <div className='flex flex-row mt-14 mb-8'>
          <div className='w-1/2'>
            <img src={`${require("./assets/images/shoe1.jfif")}`} alt={'shoes'} className='object-cover w-full' style={{ height: 500 }} />
          </div>
          <div className='w-1/2 px-8'>
            <div className='bg-gray-800 inline-block p-2 px-6 text-white font-bold'>MEN</div>
            <div className='text-4xl font-bold my-1'>NIKE</div>
            <div>Nike Air Force 1 '07 LV8'</div>
            <div className='my-2'>Rating: 4???</div>
            <div>Price: 5000$</div>
            <div className='my-2 border-dashed border-y-2 border-gray-500 py-4'>
              S??? d???ng v???i canvas NE ph???i h???p c??ng da l???n, Vintas Mister phi??n b???n m???i gia t??ng th??m ????? tho???i m??i khi l??n ch??n,
              ?????ng th???i v???n nguy??n v???n di???n m???o c??? ??i???n ?????y cu???n h??t. L???a ch???n kh??ng th??? b??? qua ?????i v???i m???i t??n ????? theo ??u???i
              n??t ?????p mang d???u ???n th???i gian.ou know best:
              era-echoing, '80s construction, bold details and nothin'-but-net style.
            </div>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>Available sizes:</div>
              {sizeList.map(e => (
                <div className='mr-2 mt-2 flex px-4 h-11 justify-center items-center uppercase font-medium border border-gray-400 cursor-pointer'>
                  {e}
                </div>
              ))}
            </div>
            <div className='flex flex-row mt-4'>
              <div className='w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                Add to cart
              </div>
              <div className='ml-2 flex px-4 bg-gray-200 h-11 justify-center items-center uppercase font-medium text-white cursor-pointer'>
                <FaHeart
                  className='text-gray-800'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Description
        </div>
        <div className='px-40 my-4'>
          RACER TR21 SHOES
          RUNNING-INSPIRED SHOES FOR DAILY WEAR.
          Bring the comfort and athletic style of running footwear to your everyday look in these adidas shoes. Step through your day confidently with a snug fit and a lightweight midsole that cushions your feet with every step.

          This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content. No virgin polyester.
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Reviews
        </div>
        <div className='px-40 my-4'>
          <div className='flex flex-row justify-between mb-4'>
            <div className='font-bold text-xl'>841 reviews</div>
            <div className='underline'>Write a review</div>
          </div>

          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>

        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Products viewed
        </div>
        <div className='flex flex-row justify-around px-40 my-4'>
          {products.slice(2, 6).map(e => (
            <div className='mr-6'>
              <img src={e.img} alt={'shoes'} className='object-cover w-72 h-72' />
            </div>
          ))}
        </div>

      </div>


    </div >
  );
}

export default App;
