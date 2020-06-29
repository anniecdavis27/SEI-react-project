
import React from 'react';
import { Link } from 'react-router-dom'

function Results(props) {

    // let cityList = props.cityList

    // console.log(cityList)
    // const city = props.cityList.filter(element => element.city)[0]

    // console.log(city)
    let cityList = props.cityList

    // const handleClick = e =>

    //console.log(cityList)

    let displayList = ''

    if (cityList) {
        displayList = cityList.map(item => {
            return (
            <div className="city-item" key={item.city}>
                <p>
                <Link to={"SEI-react-project/city/" + item.city} onClick={() => props.handleClick(item.city)}>{item.city}</Link>
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

export default Results;