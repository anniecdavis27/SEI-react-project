import React, {useState, useEffect} from 'react';
import './CityInfo.scss'

function CityInfo(props) {

    const city = props.city
    const state = props.state

    const [cityInfo, setCityInfo] = useState({})

    useEffect( () => {
        const aqCityLocationAPI = `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${process.env.REACT_APP_API_KEY}`
        const makeApiCall = async () => {
          const res = await fetch(aqCityLocationAPI)
          const json = await res.json()
          setCityInfo(json.data)
        }
        makeApiCall()
      }, [city, state])

      console.log(cityInfo)

      let currentInfo = cityInfo ? cityInfo.current: null

      let currentImage = currentInfo ? currentInfo.weather.ic : null


  return (
    <div className='city-info'>
       <div className='data-container'>
            <h2 className='city-state'>{cityInfo.city}, {cityInfo.state}, {cityInfo.country}</h2>
            <img src={`https://www.airvisual.com/images/${currentImage}.png`} alt='weather-icon'></img>
            <div className='inner-container'>
                <div>
                    <h2 className='info-content'>Current Weather:</h2>
                    <p className='info-content'>
                        Temp: <br />{currentInfo ? currentInfo.weather.tp : 'loading...'}°C<br /><br />
                        Humidity: <br />{currentInfo ? currentInfo.weather.hu : 'loading...'}%<br /><br />
                        Atmospheric Pressure (hPa): <br />{currentInfo ? currentInfo.weather.pr : 'loading...'}<br /><br />
                        Wind Speed: <br />{currentInfo ? currentInfo.weather.ws : 'loading...'}mph<br /><br />
                    </p>
                </div>
                <div>
                    <h2 className='info-content'>Current Pollution:</h2>
                    <p className='info-content'>
                        AQI (based on US EPA standard): <br />{currentInfo ? currentInfo.pollution.aqius : 'loading...'}<br /><br />
                        AQI (based on China MEP standard): <br />{currentInfo ? currentInfo.pollution.aqicn : 'loading...'}<br /><br />
                        Main Pollutant (AQI US): <br />{currentInfo ? currentInfo.pollution.mainus : 'loading...'}<br /><br />
                        Main Pollutant (AQI China): <br />{currentInfo ? currentInfo.pollution.maincn : 'loading...'}<br /><br />
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CityInfo;