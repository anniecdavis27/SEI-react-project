//This is the search page that holds the search parameters as well as the results container
import React, {useState} from 'react';
import SearchParams from '../SearchParams/SearchParams'
import './SearchPage.scss'
import Results from '../Results/Results'

function SearchPage(props) {

    const [cityValue, setCityValue] = useState('')
    const [newCityList, setNewCityList] = useState([])
    const handleStateChange = props.handleStateChange
    const stateList = props.stateList
    
    const handleClick = props.handleClick

    const handleCityChange = city => {
        setCityValue(city)
        //cityList.filter(element => element.city.includes(e.target.value))
        console.log(cityValue)
    } 

    console.log(cityValue)

    if (!props.cityList) {
        return <h1>loading</h1>
    } const cityList = props.cityList.map(el => {
        return el.city
    })

    //console.log(cityList)

    const handleFilterClick = e => {

        console.log('clicked')

        console.log(cityList)
        console.log(cityValue)

        if (!cityList) {
            return <h1>Loading</h1>
        }   let results = cityList.filter(el => {
            return el.toLowerCase().includes(cityValue.toLowerCase())
        })
        console.log(results)
        setNewCityList(results)
    }

    console.log(newCityList)

    

  return (
    <div className="search-page">
        <div className='search-params-container'>
            <SearchParams handleFilterClick={handleFilterClick} handleClick={handleClick} handleCityChange={handleCityChange} handleStateChange={handleStateChange} stateList={stateList} cityList={cityList} />
        </div>
        <div className='results-container'>
            <Results cityList={cityList} newCityList={newCityList} handleClick={handleClick} />
        </div>
    </div>
  );
}

export default SearchPage;