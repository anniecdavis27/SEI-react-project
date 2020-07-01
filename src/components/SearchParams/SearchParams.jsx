import React, {useState} from 'react';
import './SearchParams.scss'
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from '../../theme';

function SearchParams(props) {

    const Button = styled.button`
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
  `;

    const [state, setState] = useState('California')
    const [cityValue, setCityValue] = useState('')

    const stateList = props.stateList

    const handleStateChange = e => {
        setState(e.target.value)
        props.handleStateChange(e.target.value)
    }

    const handleCityChange = e => {
        setCityValue(e.target.value)
        props.handleCityChange(e.target.value)
    } 

    const handleFilterClick = e => {
        e.preventDefault()
        props.handleFilterClick()
        setCityValue('')
    }



    if (!stateList) {
        return <option>Loading...</option>
    }   let selectState = stateList.map(state => {
        return <option>{state.state}</option>
    })


  return (
    <div>
        <form>
            <label htmlFor='states'>
                Select a State:
                <select value={state} onChange={handleStateChange} className='dropdown-form'>
                    {stateList ? selectState : null}
                </select>
                <Button onClick={handleFilterClick}>Show Cities</Button>
            </label>
            <label htmlFor='cities'>
                Find City: <br />
                <input id='cities' type='text' value={cityValue} onChange={handleCityChange} placeholder='Filter Specific City' className='dropdown-form'></input>
            </label>
            <Button onClick={handleFilterClick}>Filter Cities</Button>
        </form>
        <br />
    </div>
  );
}

export default withTheme(SearchParams);