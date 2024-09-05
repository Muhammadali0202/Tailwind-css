import React from 'react'
import FoodCard from '../components/FoodCard'
import MenuCard from '../components/MenuCard'

function Home() {
    const foodCard = [
        {
            imgId: 1,
            imgUrl: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Pizzas"
        },

        {
            imgId: 2,
            imgUrl: 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Burgers"
        },
        {
            imgId: 1,
            imgUrl: 'https://images.pexels.com/photos/4202390/pexels-photo-4202390.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Momos"
        }
    ]

    const menuCard = [
        {
            imgId: 1,
            name:"Lasagnia",
            price: "600",
            imgUrl:"https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            imgId: 2,
            name:"Wadapao",
            price: "200",
            imgUrl:"data:image/jpeg;base64,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",
        },
        {
            imgId: 3,
            name:"K2 Burger",
            price: "300",
            imgUrl:"https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            imgId: 4,
            name:"Chicken Tikka",
            price: "1000",
            imgUrl:"https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

    ]
  return (
    <div>
        {/* Hero Section */}
      <section className='relative'>
        <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/86/50/meZe5dADRvChZPDSwEdD_0S9A7987.jpg" alt="" 
        className='h-[50vh] w-full object-cover'/>
        <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'>
            <div className='flex gap-1'>
                <input type="text" placeholder='Search'  className='px-4 py-2 sm:w-[35vw] w-[50vw] focus:outline-none border border-gray-400 rounded-lg '/>
                <button className='px-6 py-2 text-white font-semibold  bg-gradient-to-tl to-pink-500 from bg-pink-600 rounded-md'>Search</button>
            </div>
        </div>
      </section>

       <section className='w-[100vw] flex flex-col justify-center items-center p-5'>
        <h2 className='text-3xl font-bold text-gray-700 mb-6'>Explore Food</h2>
        <div className='w-full flex flex-wrap items-center justify-center gap-16'>
             {
                foodCard.map((items) => (
                    <FoodCard key={items.imgId} name={items.name} img={items.imgUrl}/>
                ))
             }
        </div>
       </section>

       <section className='mx-auto'>
        <h2 className='text-center font-bold text-2xl text-gray-700 m-5'>Food Menu</h2>
        <div className='flex flex-wrap justify-around gap-4'>
        {
            menuCard.map((item)=>{
              return  <MenuCard key={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl}/>
            })
        }
        

        </div>
        
       </section>
    </div>
  )
}

export default Home
