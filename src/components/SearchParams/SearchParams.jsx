//This component holds all of the search parameters
import React, {useState, useEffect} from 'react';
import './SearchParams.scss'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

function SearchParams(props) {

    const countriesData = props.countriesData

    //console.log(countriesData)

    const [country, setCountry] = useState('USA')
    const [stateList, setStateList] = useState()
    const [state, setState] = useState('California')
    const [cityList, setCityList] = useState()
    const [city, setCity] = useState('')


    const apiKey = process.env.REACT_APP_API_KEY

    const countrySelect = countriesData.map(country => {
         return <option>{country.country}</option>
    }) 

    const handleCountryChange = e => {
        setCountry(e.target.value)
    }

    const handleStateChange = e => {
        setState(e.target.value)
    }

    const handleCityChange = e => {
        setCity(e.target.value)
    }

    
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

    if (!stateList) {
        return <option>Loading...</option>
    }   let selectState = stateList.map(state => {
        return <option>{state.state}</option>
    })

    if (!cityList) {
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
                    {selectState}
                </select>
            </label>
            <label htmlFor='states'>
                Select a City: 
                <select value={city} onChange={handleCityChange} className='dropdown-form'>
                    {selectCity}
                </select>
            </label>
        </form>
        <ResultsContainer />
    </div>
  );
}

export default SearchParams;