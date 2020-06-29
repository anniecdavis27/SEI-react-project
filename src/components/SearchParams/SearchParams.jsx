//This component holds all of the search parameters
import React, {useState} from 'react';
import './SearchParams.scss'
import Results from '../Results/Results'

function SearchParams(props) {

    const handleClick = props.handleClick

    const [state, setState] = useState('California')
    const [city, setCity] = useState('')

    const stateList = props.stateList
    const cityList = props.cityList

    const handleStateChange = e => {
        setState(e.target.value)
        props.handleStateChange(e.target.value)
    }

    const handleCityChange = e => {
        setCity(e.target.value)
    } 


    const handleFilter = e => {
        e.preventDefault()
        props.handleFilter()
    }


if (!stateList) {
    return <option>Loading...</option>
}   let selectState = stateList.map(state => {
    return <option>{state.state}</option>
})

  return (
    <div>
        <form>
            {/* <label htmlFor='countries'>
                Select a Country: 
                <select value={country} onChange={handleCountryChange} className='dropdown-form'>
                    {countrySelect}
                </select>
            </label> */}
            <label htmlFor='states'>
                Select a State:
                <select value={state} onChange={handleStateChange} className='dropdown-form'>
                    {stateList ? selectState : null}
                </select>
            </label>
            <label htmlFor='cities'>
                Find City: <br />
                <input id='cities' type='text' value={city} onChange={handleCityChange} placeholder='Filter Specific City' className='dropdown-form'></input>
            </label>
            <button onClick={handleFilter}>Filter</button>
        </form>
        <br />
        <Results cityList={cityList} handleClick={handleClick} />
    </div>
  );
}

export default SearchParams;