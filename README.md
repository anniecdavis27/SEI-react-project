# Cirrus
An Air Pollution tracking app using the AirVisual API.

## API key:
ts: timestamp<br />
aqius: AQI value based on USA EPA standard<br />
aqicn: AQI value based on China MEP standard<br />
tp: temperature in Celcius<br />
tp_min: minimum temperature<br />
pr: atmospheric pressure in hPa<br />
hu: humidity<br />
ws: wind speed<br />
wd: wind direction<br />
ic: weather icon code<br />
mainus: main pollutant for US AQI<br />
maincn: main pollutant for Chinese AQI

## Technologies
HTML <br />
CSS<br />
JavaScript<br />
React<br />
    - Hooks<br />
    - Router<br />
    - Portals<br />

## Component Map:

https://flic.kr/p/2jhpSxQ

## Wireframes:

https://flic.kr/s/aHsmP58TYX

## API statuses:

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
| Wireframes | H | 1 | 40min | 40min |
| Build out Component Structure | H | 1 | 1h | 1h |
| Build out routing| H | 1.5 | 1 | 1 |
| Build out .env file for keys | H | .5 | .25 | .25 |
| Call APIs and parse data | H | 5 | 15 | 15 |
| Pass data to appropriate Components | H | 4 | 5 | 5 |
| Dark Mode | L | 2 | 6 | 6 |
| Modal | L | 1 | 1.5 | 1.5 |
| Styling | H | 10 | 5 | 5 |
| Total | H | 45 | 44 | 34.75 |

## Components: 


| Component | Description | 
| --- | :---: |  
| App | This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app | 
| About | This is the about me page, it will link to my portfolio |
| City Info | This component routes to a page that shows all the data for the city selected |
| Modal | This is a modal that will pop up to let user know they are leaving the app when they click the link to my portfolio to demonstrate my understanding of portals |
| Results | This component structures each data item in the results container |
| Search Page | This is the search page that holds the search parameters as well as the results container |
| Search Params | This component holds all of the search parameters |
| Theme Context | Sets the context for Dark Mode |
| Header | Holds all the code for the animated nav bar |
| Footer | Self explanatory |


## Code Snippets:

All of the Code from Dark Mode

#### Portals

```
const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

```

#### Dark Mode

```
const [themeState, setThemeState] = useState({
        mode: 'light'
    });

    const Wrapper = styled.div`
        background-color: ${backgroundColor};
        color: ${textColor};
        border: ${textColor};
    `;

    const toggle = () => {
        const mode = (themeState.mode === 'light' ? `dark` : `light`);
        setThemeState({ mode: mode });
    };
    ```