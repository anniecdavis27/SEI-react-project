//This is the search page that holds the search parameters as well as the results container
import React from 'react';
import SearchParams from '../SearchParams/SearchParams'
import './SearchPage.scss'

function SearchPage(props) {

    const handleStateChange = props.handleStateChange
    const stateList = props.stateList
    const cityList = props.cityList
    const handleFilter = props.handleFilter
    const handleClick = props.handleClick

  return (
    <div className="search-page">
        <SearchParams handleFilter={handleFilter} handleClick={handleClick} handleStateChange={handleStateChange} stateList={stateList} cityList={cityList} />
    </div>
  );
}

export default SearchPage;