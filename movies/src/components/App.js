import React from 'react';
import { useState,useEffect } from 'react';
import { Routes, Route, useLocation  } from 'react-router-dom';

import { useMyLocation } from '../hooks/useMyLocation.js';

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
import {headerPathsArray, footerPathsArray} from '../utils/constants.js' // пути, где применяются хедер и футер


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState (false);
  const [isMobMenuOpen, setMobMenuOpen] = useState (false);
  const [shortsCheckbox, setShortsCheckbox] = useState (false);
  const [movies, setMovies] = useState (testMovies);
  const [savedMovies, setSavedMovies] = useState (testMoviesSaved);

  const currentPage = useMyLocation();
  
  function handleMenuMobOpen () {
    setMobMenuOpen (true)
  };

  function handleMenuMobClose () {
    setMobMenuOpen (false)
  };
  
  return (
    <div className="App">
      <div className="page">
        {headerPathsArray.indexOf(currentPage.pathname) >= 0 && <Header
          isLoggedIn = {isLoggedIn}
          onClick = {handleMenuMobOpen}/>}
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
            isOpen={isProfileEditOpen}
          />}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
        {footerPathsArray.indexOf(currentPage.pathname) >= 0 && <Footer/>}
        <MenuMobPopup
          isLoggedIn = {isLoggedIn}
          isOpen={isMobMenuOpen}
          onClick={handleMenuMobClose}
        />
      </div>
    </div>
  );
}

export default App;
