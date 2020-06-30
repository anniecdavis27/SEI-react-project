
import React from 'react';
import { Link } from 'react-router-dom'
import './Results.scss'

function Results(props) {

    // let cityList = props.cityList

    // console.log(cityList)
    // const city = props.cityList.filter(element => element.city)[0]

    // console.log(city)
    let cityList = props.cityList

    // const restoreState = props.restoreState

    console.log(cityList)

    if (!cityList) {
        return <h1>loading</h1>
    }
        let displayList = cityList.map(item => {

            const onClickMultiTask = () => {
                props.handleClick(item)
            }

            return (
            <div key={item} className="city-item">
                <Link to={"/city/" + item} onClick={onClickMultiTask} className='city-item-link'><br></br>{item}</Link>
            </div>
            );
        });
    

    console.log(displayList)

  return (
    <div className='results-container'>
        {displayList}
    </div>
  );
}

export default Results;