import React from 'react'

function MovieCard({poster_path,name}) {
  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end items-end'
     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    <div className='text-white bg-gray-800/60 text-center w-full p-0.5 md:p-1 lg:p-1.5 rounded-xl '>
        {name}
    </div>

   </div>
  )
}

export default MovieCard
