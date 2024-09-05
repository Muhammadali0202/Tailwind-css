import React from 'react'

function MenuCard({name, price, imgUrl}) {
  return (
    <div className='flex border border-gray-300 rounded-md px-4 py-2 gap-x-2 md:w-[40%]'>
    <img src={imgUrl} alt=""
      className='w-32 h-32 object-cover rounded-md' />
      <div className='flex flex-col'>
        <span className='text-gray-700 font-bold text-lg'>{name}</span>
        <span >Rs.{price}</span>
        <p >This is the brief description of Product.</p>
        <button className='px-4 py-2 w-32 text-white font-semibold  bg-gradient-to-tl to-pink-500 from bg-pink-600 rounded-md'>Order Now</button>
      </div>
    </div>
  )
}

export default MenuCard
