//This component holds all of the search parameters
import React, {useState} from 'react';
import './SearchParams.scss'
import Results from '../Results/Results'

function SearchParams(props) {

    const handleClick = props.handleClick

    const [state, setState] = useState('California')
    const [cityValue, setCityValue] = useState('')

    const [cityList, setCityList] = useState([...props.cityList])

    //const [cityList, setCityList] = useState(props.cityList)

    const stateList = props.stateList
    

    const handleStateChange = e => {
        setState(e.target.value)
        props.handleStateChange(e.target.value)
    }

    const handleCityChange = e => {
        setCityValue(e.target.value)
        //cityList.filter(element => element.city.includes(e.target.value))
    } 

    //console.log(city)

    
    

    const handleFilterClick = e => {
        e.preventDefault()

        console.log(cityList)
        console.log(cityValue)

        let results = []
        if (!cityList) {
            return <h1>Loading</h1>
        }   results = cityList.filter(el => {
            return el.toLowerCase().includes(cityValue.toLowerCase())
        })
        console.log(results)
        setCityList(results)
    }

    const restoreState = e => {
        setCityList([...props.cityList])
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
                Find City: <br /> {cityValue}
                <input id='cities' type='text' value={cityValue} onChange={handleCityChange} placeholder='Filter Specific City' className='dropdown-form'></input>
            </label>
            <button onClick={handleFilterClick}>Filter</button>
        </form>
        <br />
        <Results cityList={cityList} handleClick={handleClick} restoreState={restoreState} />
    </div>
  );
}

export default SearchParams;