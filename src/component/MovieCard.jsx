import React from 'react'

function MovieCard({poster_path,name,handleAddtoWatchList,movieObj,handleRemoveFromWatchlist,watchlist}) {
//if the movieObj already available in the watchList or not
  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id ==movieObj.id){
        return true
      }
    }
    return false
  }



  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end'
     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    {/* Emoji for watchlist */}

    {doesContain(movieObj)
    ?
    <div onClick={()=>(handleRemoveFromWatchlist(movieObj))} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg hover:scale-120 bg-black'>
      &#10060;
    </div>
    :
    <div onClick={()=>(handleAddtoWatchList(movieObj))} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg hover:scale-120 bg-amber-50/80'>
      &#10084;
    </div>
    }


    <div className='text-white bg-gray-800/60 text-center w-full p-0.5 md:p-1 lg:p-1.5 rounded-xl '>
        {name}
    </div>

   </div>
  )
}

export default MovieCard


