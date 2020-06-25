# SEI-react-project
Cirrus - an Air Pollution tracking app using the AirVisual API.

API key:
ts: timestamp
aqius: AQI value based on USA EPA standard
aqicn: AQI value based on China MEP standard
tp: temperature in Celcius
tp_min: minimum temperature
pr: atmospheric pressure in hPa
hu: humidity
ws: wind speed
wd: wind direction
ic: weather icon code
mainus: main pollutant for US AQI
maincn: main pollutant for Chinese AQI

Technologies to be used
HTML
CSS
JavaScript
React
    - Hooks
    - Router
    - (Portals, time dependent)
Redux

Component Map:

https://flic.kr/p/2jfkcDs

API statuses: (copied from Imsomnia)

States:

{
  "status": "success",
  "data": [
    {
      "state": "Alabama"
    },
    {
      "state": "Alaska"
    },
    {
      "state": "Arizona"
    }, ...

    Cities: 

    {
  "status": "success",
  "data": [
    {
      "city": "Acalanes Ridge"
    },
    {
      "city": "Acton"
    },
    {
      "city": "Alameda"
    }, ...

    City Data: 

    {
  "status": "success",
  "data": {
    "city": "Los Angeles",
    "state": "California",
    "country": "USA",
    "location": {
      "type": "Point",
      "coordinates": [
        -118.2417,
        34.0669
      ]
    },
    "current": {
      "weather": {
        "ts": "2020-06-25T20:00:00.000Z",
        "tp": 24,
        "pr": 1011,
        "hu": 64,
        "ws": 2.6,
        "wd": 270,
        "ic": "01d"
      },
      "pollution": {
        "ts": "2020-06-25T20:00:00.000Z",
        "aqius": 83,
        "mainus": "p2",
        "aqicn": 39,
        "maincn": "p2"
      }
    }
  }
} ...
