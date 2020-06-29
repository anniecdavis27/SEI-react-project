//This is the search page that holds the search parameters as well as the results container
import React from 'react';
import SearchParams from '../SearchParams/SearchParams'
import './SearchPage.scss'

function SearchPage(props) {

    //const countriesData = props.aqCountriesData

    // const [currentCountry, setCurrentCountry] = useState('')
    // const [currentState, setCurrentState] = useState('')
    // const [currentCity, setCurrentCity] = useState('')

    

    const handleClick = (country, state, city) => {

        console.log('clicked')
        // setCurrentCountry(country)
        // setCurrentState(state)
        // setCurrentCity(city)
    }

  return (
    <div className="search-page">
        <SearchParams handleClick={handleClick} />
    </div>
  );
}

export default SearchPage;