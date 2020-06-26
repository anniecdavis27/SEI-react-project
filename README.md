# SEI-react-project
Cirrus - an Air Pollution tracking app using the AirVisual API.

## API key:
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

## Technologies
HTML <br />
CSS<br />
SCSS<br />
JavaScript<br />
React<br />
    - Hooks<br />
    - Router<br />
    - (Portals, time dependent)<br />
Redux


## Component Map:

https://flic.kr/p/2jfkcDs

## Wireframes:

https://flic.kr/s/aHsmP58TYX

## API statuses: (copied from Imsomnia)

### States:
```
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
```

### Cities: 
```
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
```


###  City Data: 
```
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
```

##  MVP
| Task | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes: Mobile | H | 1 | 40min | 40min |
| Wireframes: Desktop | H | 1 | -- | -- |
| Build out Component Structure | H | 1 | 1h | 1h |
| Build out routing| H | 1.5 | -- | -- |
| Build out .env file for keys | H | .5 | -- | -- |
| Call APIs and parse data | H | 5 | -- | --|
| Build custom dropdown hook | M | 1 | -- | -- |
| Pass data to appropriate Components | H | 4 | -- | -- |
| Dark Mode | L | 2 | -- | -- |
| Modal | L | 1 | -- | -- |
| Styling | H | 10 | -- | -- |
| Total | H | 45 | 44 | 44 |

## Components: 


| Component | Description | 
| --- | :---: |  
| App | This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app | 
| About | This is the about me page, it will link to my portfolio |
| City Info | This component routes to a page that shows all the data for the city selected |
| Modal | This is a modal that will pop up to let user know they are leaving the app when they click the link to my portfolio to demonstrate my understanding of portals |
| Results | This component structures each data item in the results container |
| Results Container | This is the component that holds all of the rendered search items from the search params |
| Search Page | This is the search page that holds the search parameters as well as the results container |
| Search Params | This component holds all of the search parameters |
| useDropdown | Custom hook that sets the dropdown for each of the parameters in Search Params. Not technically a component, but a significant piece of code |


