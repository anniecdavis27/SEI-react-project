//This is the component that holds all of the rendered search items from the search params
//This component holds all of the search parameters
import React from 'react';
import { Link } from 'react-router-dom'

function ResultsContainer(props) {

    let cityList = props.cityList

    //console.log(cityList)

    let displayList = ''

    if (cityList) {
        displayList = cityList.map(item => {
            return (
            <div className="city-item" key={item.city}>
                <p>
                <Link to={"/city/" + item.city}>{item.city}</Link>
                </p>
            </div>
            );
        });
    }
  return (
    <div>
        {displayList}
    </div>
  );
}

export default ResultsContainer;