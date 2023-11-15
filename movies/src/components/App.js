import React from 'react';
import { useState } from 'react';
import { Routes, Route  } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Movies from './Movies';
import Footer from './Footer';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import MenuMobPopup from './MenuMobPopup';

import {testMovies, testMoviesSaved} from '../utils/testdata.js'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState (true);
  const [isMobMenuOpen, setMobMenuOpen] = useState (true);
  const [shortsCheckbox, setShortsCheckbox] = useState (false);
  const [movies, setMovies] = useState (testMovies)
  const [savedMovies, setSavedMovies] = useState (testMoviesSaved)

  return (
    <div className="App">
      <div className="page">
        <Header 
        isLoggedIn = {isLoggedIn}
        />
        <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies 
          isShortsSearch = {shortsCheckbox}
          movies = {movies}
          />} />
          <Route path="/saved-movies" element={<Movies
          isShortsSearch = {shortsCheckbox}
          movies = {savedMovies}
          />} />
          <Route path="/profile" element={<Profile
          isOpen={isProfileEditOpen}/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
        <Footer/>
        <MenuMobPopup
        isLoggedIn = {isLoggedIn}
        isOpen={isMobMenuOpen}
        />
      </div>
    </div>
  );
}

export default App;
