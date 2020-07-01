import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage'
import About from './components/About/About'
// import Favorites from './components/Favorites/Favorites'
import CityInfo from './components/CityInfo/CityInfo'
import Footer from './components/Footer/Footer'


//This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app

function App() {

  //const [country, setCountry] = useState('USA')
    // const [countrySelected, setCountrySelected] = useState(false)
    const [stateList, setStateList] = useState()
    const [state, setState] = useState('California')
    const [cityList, setCityList] = useState()
    const [city, setCity] = useState('')
    // const [cityFilter, setCityFilter] = useState('')

  //console.log(aqCountriesData)

  // useEffect( () => {
  //   const aqCountriesAPI = `https://api.airvisual.com/v2/countries?key=${apiKey}`
  //   const makeApiCall = async () => {
  //     const res = await fetch(aqCountriesAPI)
  //     const json = await res.json()
  //     setCountryList(json.data)
  //   }
  //   makeApiCall()
    
  // }, [apiKey])
  
const handleStateChange = state => {
    setState(state)
}

console.log(state)

//console.log(state)

// const handleFilter = city => {
//   setCityFilter(city)
// }

const handleClick = city => {
  setCity(city)
}

//console.log(city)

useEffect( () => {
    const aqStatesAPI = `https://api.airvisual.com/v2/states?country=USA&key=${process.env.REACT_APP_API_KEY}`
    const makeApiCall = async () => {
      const res = await fetch(aqStatesAPI)
      const json = await res.json()
      setStateList(json.data)
    }
    makeApiCall()
  }, [])

//console.log(stateList)

useEffect( () => {
    const aqCityAPI = `https://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${process.env.REACT_APP_API_KEY}`
    const makeApiCall = async () => {
      const res = await fetch(aqCityAPI)
      const json = await res.json()
      setCityList(json.data)
    }
    makeApiCall()
  }, [state])

  console.log(cityList)


  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search-city' render={routerProps => stateList ? <SearchPage {...routerProps} handleClick={handleClick} stateList={stateList} cityList={cityList} handleStateChange={handleStateChange} /> : null}/>
      {/* <Route path='/favorites' component={Favorites}/> */}
      <Route path='/about' component={About}/>

      <Route path="/city/:city" render={routerProps => state && city ? <CityInfo {...routerProps} city={city} state={state}/>: null}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
