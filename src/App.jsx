
import './App.css'
import Navbar from './component/Navbar'
import Movie from './component/Movie';
import WatchList from './component/WatchList';
import { Route, Routes } from "react-router-dom"
import Banner from './component/Banner';
import { useEffect, useState } from 'react';

function App() {

  let [watchlist,setWatchlist]=useState([]) 
  
  //Add the movie to the watchlist when click the emoji
  let handleAddtoWatchList =(movieObj)=>{
    let newMovieList=[...watchlist,movieObj]
    localStorage.setItem('movieApp',JSON.stringify(newMovieList))
    setWatchlist(newMovieList)
    // console.log(newMovieList)
  }

  //Remove the movie from the watchlist
  let handleRemoveFromWatchlist=(movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchList)
    localStorage.setItem('movieApp',JSON.stringify(filteredWatchList))
    console.log(filteredWatchList)
  }
 //store the movie in the watchlist using localstorage
  useEffect(()=>{
    let moviefromlocal=localStorage.getItem('movieApp')
    if(!moviefromlocal){
      return
    }
    setWatchlist(JSON.parse(moviefromlocal))
  },[])
  
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' 
             element={<> <Movie watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/> </>}/>
      <Route path='/watchlist' element={<WatchList  watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}/>
    </Routes>
    

    </>
    
  )
}

export default App
