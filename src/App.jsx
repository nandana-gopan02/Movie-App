
import './App.css'
import Navbar from './component/Navbar'
import Movie from './component/Movie';
import WatchList from './component/WatchList';
import { Route, Routes } from "react-router-dom"
import Banner from './component/Banner';
import { useState } from 'react';

function App() {

  let [watchlist,setWatchlist]=useState([]) 

  let handleAddtoWatchList =(movieObj)=>{
    let newMovieList=[...watchlist,movieObj]
    setWatchlist(newMovieList)
    console.log(newMovieList)
  }

  //Remove the movie from the watchlist
  let handleRemoveFromWatchlist=(movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchList)
    console.log(filteredWatchList)
  }
  
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' 
             element={<> <Banner/> <Movie watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/> </>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
    

    </>
    
  )
}

export default App
