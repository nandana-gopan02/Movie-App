import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'
import InterceptorManager from './../../node_modules/axios/lib/core/InterceptorManager';

function Movie() {

    const[movies,setMovies]=useState([])
    const[page,setPage]=useState(1)

    const decrementPage=()=>{
         if(page===1){
            setPage(page)
        }else{
            setPage(page-1)
        }
        
    }

    const incrementPage=()=>{
        setPage(page+1)
    }



    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a0009c00186c2a7f4fe66faaa0705f81&language=en-US&page=${page}`).then(function(res){
            // console.log(res.data.results)
            setMovies(res.data.results)
        })
    },[page])
  return (
    <div className='p-2'>
        <div className='text-center m-4 text-2xl font-bold'>Trending Movies</div>
        <div className='flex flex-row flex-wrap ml-13 gap-10 '>
            {/* Take each and every movie */}
            {movies.map((movieObj)=>{
                return <MovieCard poster_path={movieObj.poster_path} name={movieObj.title} />
            })}
        </div>
        <Pagination page={page} incrementPage={incrementPage} decrementPage={decrementPage}/>
    </div>

  )
}

export default Movie


//https://api.themoviedb.org/3/movie/popular?api_key=a0009c00186c2a7f4fe66faaa0705f81