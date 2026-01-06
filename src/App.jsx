
import './App.css'
import Navbar from './component/Navbar'
import Movie from './component/Movie';
import WatchList from './component/WatchList';
import { Route, Routes } from "react-router-dom"
import Banner from './component/Banner';

function App() {
  
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' 
             element={<> <Banner/> <Movie/> </>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
    

    </>
    
  )
}

export default App
