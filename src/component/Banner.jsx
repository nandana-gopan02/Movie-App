import React from 'react'

function Banner() {
  return (
    <div>
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end ' style={{backgroundImage:'url(https://cdn.europosters.eu/image/hp/80594.jpg)'}}>
     <div className='text-white text-l bg-gray-800/60 text-center w-full p-0.5 md:p-1 lg:p-1.5'>Harry Potter</div>
    </div>
    </div>
   
  )
}

export default Banner
