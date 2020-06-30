//This is the search page that holds the search parameters as well as the results container
import React, {useState} from 'react';
import SearchParams from '../SearchParams/SearchParams'
import './SearchPage.scss'
import Results from '../Results/Results'

function SearchPage(props) {

    const [cityValue, setCityValue] = useState('')
    const handleStateChange = props.handleStateChange
    const stateList = props.stateList
    
    const handleFilter = props.handleFilter
    const handleClick = props.handleClick

    if (!props.cityList) {
        return <h1>loading</h1>
    } const cityList = props.cityList.map(el => {
        return el.city
    })

    console.log(cityList)

    const handleFilterClick = e => {
        e.preventDefault()

        console.log('clicked')

        // console.log(cityList)
        // console.log(cityValue)

        // let results = []
        // if (!cityList) {
        //     return <h1>Loading</h1>
        // }   results = cityList.filter(el => {
        //     return el.toLowerCase().includes(cityValue.toLowerCase())
        // })
        // console.log(results)
        // setCityList(results)
    }

    

  return (
    <div className="search-page">
        <SearchParams handleFilterClick={handleFilterClick} handleClick={handleClick} handleStateChange={handleStateChange} stateList={stateList} cityList={cityList} />
        <Results cityList={cityList} />
    </div>
  );
}

export default SearchPage;