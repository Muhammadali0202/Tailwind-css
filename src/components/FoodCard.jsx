import React from 'react'

function FoodCard({name, img}) {
  return (
    <div className='relative rounded-md overflow-hidden'>
      <img src= {img} alt=""
       className='h-[400px] rounded-md'/>
    <p className='bottom-[10%] right-[50%] translate-x-[50%] translate-y-[50%] absolute text-white font-semibold'  >{name}</p>
    </div>
  )
}

export default FoodCard
