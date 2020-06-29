import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage'
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites'


//This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app

function App() {
  

  //const apiKey = process.env.REACT_APP_API_KEY

  //console.log(aqCountriesData)

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search-city' component={SearchPage}/>
      <Route path='/favorites' component={Favorites}/>
      <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
