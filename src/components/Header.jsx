import React from 'react'
import icon from '/icon.png'
function Header() {
  return (
    <div className='flex flex-row  justify-between items-center bg-blue-950'>
        <div className='flex flex-row gap-x-2 items-center m-4 ml-8 sm:ml-14'>
        <img src={icon} alt="" className='rounded-full sm:w-20 sm:h-20 w-16 h-16 p-2' />
        <span className='text-white font-medium text-xl sm:text-2xl'>Wisozk Inc</span>
        </div>
      <button className='text-blackrounded-lg border-2 border-violet-700 text-black text-normal p-2 transition duration-300 ease-in-out hover:bg-violet-700 hover:border-violet-900 bg-white rounded-xl text-center py-1 sm:py-2 px-6 text-lg mr-12 font-medium  hover:text-white'>contact</button>
    </div>
  )
}

export default Header
