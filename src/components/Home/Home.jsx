import React, { useState, useEffect } from 'react';
import'./home.scss'

function Home() {

    const [aqIPdata, setAqIPdata] = useState({})

    const apiKey = process.env.REACT_APP_API_KEY

    useEffect( () => {
        const aqIPlocationAPI = `https://api.airvisual.com/v2/nearest_city?key=${apiKey}`
        const makeApiCall = async () => {
          const res = await fetch(aqIPlocationAPI)
          const json = await res.json()
          setAqIPdata(json.data)
        }
        makeApiCall()
      }, [])

      //console.log(aqIPdata.current)

      let currentInfo = aqIPdata ? aqIPdata.current: null
      console.log(currentInfo)

      let currentImage = currentInfo ? currentInfo.weather.ic : null
      
    

  return (
    <div className="home">
        <h1 className="page-header">Hello! Welcome to Cirrus.</h1>
        <p>Your local air quality report:</p>
        <div className='data-container'>
            <h2 className='city-state'>City: {aqIPdata.city}, {aqIPdata.state}, {aqIPdata.country}</h2>
            <h2>Current Weather:</h2>
            <img src={`https://www.airvisual.com/images/${currentImage}.png`} alt='weather-icon'></img>
            <p>
                Temp: <br />{currentInfo ? currentInfo.weather.tp : 'loading...'}°C<br /><br />
                Humidity: <br />{currentInfo ? currentInfo.weather.hu : 'loading...'}%<br /><br />
                Atmospheric Pressure (hPa): <br />{currentInfo ? currentInfo.weather.pr : 'loading...'}<br /><br />
                Wind Speed: <br />{currentInfo ? currentInfo.weather.ws : 'loading...'}mph<br /><br />
            </p>
            <h2>Current Pollution:</h2>
            <p>
                AQI (based on US EPA standard): <br />{currentInfo ? currentInfo.pollution.aqius : 'loading...'}<br /><br />
                AQI (based on China MEP standard): <br />{currentInfo ? currentInfo.pollution.aqicn : 'loading...'}<br /><br />
                Main Pollutant (AQI US): <br />{currentInfo ? currentInfo.pollution.mainus : 'loading...'}<br /><br />
                Main Pollutant (AQI China): <br />{currentInfo ? currentInfo.pollution.maincn : 'loading...'}<br /><br />
            </p>
        </div>
        <p>(This site uses your machine's IP address to locate the air quality report for the nearest recorded city)</p>
    </div>
  );
}

export default Home;