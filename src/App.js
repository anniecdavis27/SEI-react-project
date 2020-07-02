import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import About from './components/About/About';
import CityInfo from './components/CityInfo/CityInfo';
import Footer from './components/Footer/Footer';

function App(props) {

    const themeToggle = useTheme();
    const [stateList, setStateList] = useState()
    const [state, setState] = useState('California')
    const [cityList, setCityList] = useState()
    const [city, setCity] = useState('')
  
    const handleStateChange = state => {
        setState(state)
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
        const aqCityAPI = `https://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${process.env.REACT_APP_API_KEY}`
        const makeApiCall = async () => {
            const res = await fetch(aqCityAPI)
            const json = await res.json()
            setCityList(json.data)
        }
        makeApiCall()
    }, [state])


  return (
      <div className="App">
          <Header themeToggle={themeToggle} />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/search-city' render={routerProps => stateList ? <SearchPage {...routerProps} handleClick={handleClick} stateList={stateList} cityList={cityList} handleStateChange={handleStateChange} /> : null}/>
              <Route path='/about' component={About}/>

              <Route path="/city/:city" render={routerProps => state && city ? <CityInfo {...routerProps} city={city} state={state}/>: null}/>
          </Switch>
          <Footer />
        </div>
  );
}

export default App;
