//This component holds all of the search parameters
import React, {useState, useEffect} from 'react';
import './SearchParams.scss'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

function SearchParams(props) {

    // const countriesData = props.countriesData

    //console.log(countriesData)

    const [country, setCountry] = useState('USA')
    const [countryList, setCountryList] = useState()
    const [countrySelected, setCountrySelected] = useState(false)
    const [stateList, setStateList] = useState()
    const [state, setState] = useState('California')
    const [cityList, setCityList] = useState()
    const [city, setCity] = useState('')


    const apiKey = process.env.REACT_APP_API_KEY

    const handleCountryChange = e => {
        setCountry(e.target.value)
        setCountrySelected(true)
        console.log(countrySelected)
        setState()
        setCity()
    }

    // console.log(countryList)

    //   const getStateList = (country, apiKey) => {
    //     const aqStatesAPI = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`
    //     fetch(aqStatesAPI)
    //     .then( res => res.json.data())
    //     .then( data => setStateList(data))
    //   }

    //   console.log(getStateList)

    //   const getCityList = (country, city, apiKey) => {
    //     const aqCityAPI = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
    //     fetch(aqCityAPI)
    //     .then( res => res.json.data())
    //     .then( data => setCityList(data))
    //   }

    //   console.log(getCityList)

    const handleStateChange = e => {
        setState(e.target.value)
    }

    const handleCityChange = e => {
        setCity(e.target.value)
    }

    useEffect( () => {
        const aqCountriesAPI = `https://api.airvisual.com/v2/countries?key=${apiKey}`
        const makeApiCall = async () => {
          const res = await fetch(aqCountriesAPI)
          const json = await res.json()
          setCountryList(json.data)
        }
        makeApiCall()
      }, [apiKey])

      console.log(countryList)
    
    useEffect( () => {
        const aqStatesAPI = `https://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`
        const makeApiCall = async () => {
          const res = await fetch(aqStatesAPI)
          const json = await res.json()
          setStateList(json.data)
        }
        makeApiCall()
      }, [country, apiKey])

    //console.log(stateList)

    useEffect( () => {
        const aqCityAPI = `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
        const makeApiCall = async () => {
          const res = await fetch(aqCityAPI)
          const json = await res.json()
          setCityList(json.data)
        }
        makeApiCall()
      }, [state, country, apiKey])

    console.log(cityList)

    if (!countryList) {
        return <option>Loading...</option>
    }   
    let countrySelect = countryList.map(country => {
        return <option>{country.country}</option>
   }) 

    if (!stateList || !country) {
        return <option>Loading...</option>
    }   let selectState = stateList.map(state => {
        return <option>{state.state}</option>
    })

    if (!cityList || !state || !country) {
        return <option>Loading...</option>
    }   let selectCity = cityList.map(city => {
        return <option>{city.city}</option>
    })

  return (
    <div>
        <form>
            <label htmlFor='countries'>
                Select a Country: 
                <select value={country} onChange={handleCountryChange} className='dropdown-form'>
                    {countrySelect}
                </select>
            </label>
            <label htmlFor='states'>
                Select a State:
                <select value={state} onChange={handleStateChange} className='dropdown-form'>
                    {stateList ? selectState : null}
                </select>
            </label>
            <label htmlFor='states'>
                Select a City: 
                <select value={city} onChange={handleCityChange} className='dropdown-form'>
                    {stateList ? selectCity : null}
                </select>
            </label>
        </form>
        <ResultsContainer />
    </div>
  );
}

export default SearchParams;