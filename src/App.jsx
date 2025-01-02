import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header'
import Home from './components/home/Home'
import MovieDetails from './components/movieDetail/MovieDetails'
import MovieLists from './components/movieList/MovieLists'



const App = () => {
  return (
  <div>
  <div className="App">
   
  <Router>
  <Header />
  <Routes>
  <Route index element={<Home />}></Route>
  <Route path="movie/:id" element={<MovieDetails />}></Route>
  <Route path="movies/:type" element={<MovieLists />}></Route>
  <Route path="/*" element={<h1>Error Page</h1>}></Route>
  </Routes>
  </Router>
 
  </div>

  </div>
  )
}

export default App