/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import React from "react";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { FavouriteMovies } from './components/FavouriteMovies';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favouriteMovies' element={<FavouriteMovies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
