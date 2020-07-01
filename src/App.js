import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from './theme';
import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage'
import About from './components/About/About'
import CityInfo from './components/CityInfo/CityInfo'
import Footer from './components/Footer/Footer'




function App(props) {

  const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    width: 250px;
    margin: 0px 50px;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

    const [stateList, setStateList] = useState()
    const [usState, setState] = useState('California')
    const [cityList, setCityList] = useState()
    const [city, setCity] = useState('')

  
const handleStateChange = state => {
    setState(usState)
}

const handleClick = city => {
  setCity(city)
}

useEffect( () => {
    const aqStatesAPI = `https://api.airvisual.com/v2/states?country=USA&key=${process.env.REACT_APP_API_KEY}`
    const makeApiCall = async () => {
      const res = await fetch(aqStatesAPI)
      const json = await res.json()
      setStateList(json.data)
    }
    makeApiCall()
  }, [])

useEffect( () => {
    const aqCityAPI = `https://api.airvisual.com/v2/cities?state=${usState}&country=USA&key=${process.env.REACT_APP_API_KEY}`
    const makeApiCall = async () => {
      const res = await fetch(aqCityAPI)
      const json = await res.json()
      setCityList(json.data)
    }
    makeApiCall()
  }, [usState])


  return (
        <div className="App">

          <Header />
          
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/search-city' render={routerProps => stateList ? <SearchPage {...routerProps} handleClick={handleClick} stateList={stateList} cityList={cityList} handleStateChange={handleStateChange} /> : null}/>
          <Route path='/about' component={About}/>

          <Route path="/city/:city" render={routerProps => usState && city ? <CityInfo {...routerProps} city={city} state={usState}/>: null}/>
          </Switch>
          <Button onClick={() => themeToggle.toggle()}>
              {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
          
          <Footer />
        </div>

  );
}

export default withTheme(App);
