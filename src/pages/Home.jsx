import React from 'react'
import FoodCard from '../components/FoodCard'

function Home() {
    const foodCard = [
        {
            imgId: 1,
            imgUrl: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Pizza"
        },

        {
            imgId: 2,
            imgUrl: 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Burger"
        },
        {
            imgId: 1,
            imgUrl: 'https://images.pexels.com/photos/4202390/pexels-photo-4202390.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Momos"
        }
    ]
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

       <section className='w-[100vw] flex flex-col justify-center items-center p-5'>
        <h2 className='text-3xl font-bold text-gray-700 mb-6'>Explore Food</h2>
        <div className='w-full flex items-center justify-center gap-16'>
             {
                foodCard.map((items) => (
                    <FoodCard key={items.imgId} name={items.name} img={items.imgUrl}/>
                ))
             }
        </div>
       </section>
    </div>
  )
}

export default Home
