import React, { useEffect, useState } from 'react'
import genreids from '../Utility/genre'

function WatchList({watchlist,setWatchlist,handleRemoveFromWatchlist}) {
  const [search,setSearch]=useState('');
  const [genrelist,setGenrelist]=useState(['All genre']);
  //set to current genre(to display in blue bg otherwise gray bg)
  const [currGenre,setCurrGenre] = useState('All genres');

  let handleSearch =(e)=>{
    setSearch(e.target.value)
  };

  let handleFilter =(genre)=>{
    setCurrGenre(genre)
  }

  //Rating Sort
  let sortIncreasing =()=>{
    let sortIncrease = watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })

    setWatchlist([...sortIncrease])

  }

  let sortDecreasing =()=>{
    let sortDecrease = watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })

    setWatchlist([...sortDecrease])

  }

  //Popularity Sorting
  let sortPopIncrease =()=>{
    let popularIncrease = watchlist.sort((movieA,movieB)=>{
      return movieA.popularity - movieB.popularity
    })

    setWatchlist([...popularIncrease])
  }

  let sortPopDecrease =()=>{
    let popularDecrease = watchlist.sort((movieA,movieB)=>{
      return movieB.popularity - movieA.popularity
    })

    setWatchlist([...popularDecrease])
  }


//To get all the genre name 
  useEffect(()=>{
    let temp=watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp) // Set -> help to eliminate the duplicate value
    setGenrelist(['All genres', ...temp])
    console.log(temp)
  },[watchlist])

  return (
    <>
    {/* Populate all the genre id at the top */}
      <div className=' flex justify-center flex-wrap m-4 space-x-10 '>
        {genrelist.map((genre)=>{
          return <div onClick={()=> handleFilter(genre)} className={currGenre == genre ? 'flex justify-center items-center bg-blue-400 rounded-xl text-white p-2 cursor-pointer ': 'flex justify-center items-center bg-gray-300 rounded-xl text-black p-2 cursor-pointer '}>
          {genre}
          </div>

        })}

      </div>

      {/* Search */}
      <div className='flex justify-center my-5'>
        <input onChange={handleSearch} value={search} type="text"placeholder='Search the Movie' className='h-[2rem] w-[250px] bg-gray-300 p-4 rounded-xl outline-none ' />
      </div>


      <div className='overflow-hidden rounded-xl border border-gray-400 m-8 p-8'>
        <table className='w-full text-gray-600 text-center'>
            <thead className='border-b-2'>
                <tr className=''>
                    <th className='px-15'>Name</th>

                    <th className='px-15'>
                      <div className='flex items-center justify-center gap-2'>
                        <button onClick={sortIncreasing} className='cursor-pointer'><i class="fa-solid fa-arrow-up"></i></button>
                        <span>Rating</span>
                        <button onClick={sortDecreasing} className='cursor-pointer'><i class="fa-solid fa-arrow-down"></i></button>
                      </div>
                    </th>

                    <th className='px-15'>
                      <div className='flex items-center justify-center gap-2'>
                        <button onClick={sortPopIncrease} className='cursor-pointer'><i class="fa-solid fa-arrow-up"></i></button>
                        <span>Popularity</span>
                        <button onClick={sortPopDecrease} className='cursor-pointer'><i class="fa-solid fa-arrow-down"></i></button>
                      </div>
                    </th>

                    <th className='px-15 text-center'>Genre</th>
                </tr>
            </thead>


            <tbody>
              {/* Dynamically add the watchlist */}
              {/* To filter the movie based on the genre */}
              {watchlist.filter((movieObj)=>{
                if(currGenre=='All genres'){
                  return true
                }else{
                  return genreids[movieObj.genre_ids[0]]==currGenre;
                }
              })
              
              //Search logic (to change all the title to lowercase )
              .filter((movieObj)=>{
                // compare the title with the search string if the title include the search string then return only those movies
                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
              })
              
              .map((movieObj)=>{
                return <tr key={movieObj.id} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[8rem] w-[8rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                    <div className='mx-20'>{movieObj.title}</div>
                  </td>

                  <td className=''>{movieObj.vote_average}</td>

                  <td className=''>{movieObj.popularity}</td>

                  <td className=''>{genreids[movieObj.genre_ids[0]]}</td>

                  <td onClick={()=>(handleRemoveFromWatchlist(movieObj))} className=' text-red-600 cursor-pointer'>Delete</td>
                </tr>
              })}
               

                
            </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
