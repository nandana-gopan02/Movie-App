import React from 'react'

function Banner({banner_path,name}) {
  return (
    <div className='relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]'>
    <div className='absolute inset-0 bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${banner_path})`}}>
     <div className='text-white text-l bg-gray-800/60 text-center w-full p-0.5 md:p-1 lg:p-1.5'>{name}</div>
    </div>
    </div>
   
  )
}

export default Banner
