import React from 'react'

function Home() {
  return (
    <div>
        {/* Hero Section */}
      <section className='relative'>
        <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/86/50/meZe5dADRvChZPDSwEdD_0S9A7987.jpg" alt="" 
        className='h-[50vh] w-full object-cover'/>
        <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'>
            <div className='flex gap-1'>
                <input type="text" placeholder='Search'  className='px-4 py-2 w-[35vw] focus:outline-none border border-gray-400 rounded-lg '/>
                <button className='px-6 py-2 text-white font-semibold  bg-gradient-to-tl to-pink-500 from bg-pink-600 rounded-md'>Search</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
