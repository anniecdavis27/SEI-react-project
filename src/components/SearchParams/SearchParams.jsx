import React, {useState} from 'react';
import './SearchParams.scss'

function SearchParams(props) {

    const [state, setState] = useState('California')
    const [cityValue, setCityValue] = useState('')

    // const [cityList, setCityList] = useState(props.cityList)

    const cityList = props.cityList

    const stateList = props.stateList
    

    const handleStateChange = e => {
        setState(e.target.value)
        props.handleStateChange(e.target.value)
    }

    const handleCityChange = e => {
        setCityValue(e.target.value)
        props.handleCityChange(e.target.value)
        
        //cityList.filter(element => element.city.includes(e.target.value))
    } 

    //console.log(city)

    // const restoreState = e => {
    //     setCityList([props.cityList])
    // }

    const handleFilterClick = e => {
        e.preventDefault()
        props.handleFilterClick()
        //setCityValue('')
    }



if (!stateList) {
    return <option>Loading...</option>
}   let selectState = stateList.map(state => {
    return <option>{state.state}</option>
})

//console.log(cityList)

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
                {/* <button onClick={handleFilterClick}>Filter by State</button> */}
            </label>
            <label htmlFor='cities'>
                Find City: <br />
                <input id='cities' type='text' value={cityValue} onChange={handleCityChange} placeholder='Filter Specific City' className='dropdown-form'></input>
            </label>
            <button onClick={handleFilterClick}>Filter by City</button>
        </form>
        <br />
    </div>
  );
}

export default SearchParams;