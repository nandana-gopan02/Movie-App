import React from 'react'
import MovieCard from './MovieCard'

function Movie() {
  return (
    <div className='p-2'>
        <div className='text-center m-4 text-2xl font-bold'>Trending Movies</div>
        <div className='flex flex-row flex-wrap justify-around'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>

  )
}

export default Movie
