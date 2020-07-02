
import React from 'react';
import { Link } from 'react-router-dom'
import './Results.scss'
import styled, { withTheme } from 'styled-components';
import { resultBackgroundColor, resultTextColor } from '../../theme';

function Results(props) {

    const Result = styled.h2`
    background: ${resultBackgroundColor};

    color: ${resultTextColor};

  `;

    let cityList = props.cityList

    let resultsList = props.newCityList 

    if (!cityList) {
        return <h1>loading</h1>
    }
        let displayList = cityList.map(item => {

            const onClickMultiTask = () => {
                props.handleClick(item)
            }

            return (
            <Result key={item} className="city-item">
                <Link to={"/city/" + item} onClick={onClickMultiTask} className='city-item-link'><br></br>{item}</Link>
            </Result>
            );
        });

        
            let updatedDisplayList = resultsList.map(item => {
    
                const onClickMultiTask = () => {
                    props.handleClick(item)
                }
    
                return (
                <Result key={item} className="city-item">
                    <Link to={"/city/" + item} onClick={onClickMultiTask} className='city-item-link'><br></br>{item}</Link>
                </Result>
                );
            });

  return (
    <div className='results-container'>
        {resultsList.length > 0 ? updatedDisplayList : displayList}
    </div>
  );
}

export default withTheme(Results);