import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
}
from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} 
from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";


import { Link } from 'react-router-dom';

const libraries = ["places"];
const mapContainerStyle = {
  height: "96vh",
  width: "80vw",
  left: "8vw",
  right: "8vw",
  top: "0",
  bottom: "5vh",
  padding: "5vh",
  border: "10px solid #000000",
  borderRadius: "10px",
};



const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 42.313075, 
  lng: -71.273923,
};


export default function Center () {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCtnOlCbp8TfNQbBQoby2GWEecFKn76_1Q",
    libraries,
  });
  /*const [markers, setMarkers] = React.useState([]); */

  const markers =[
    {
      lat:42.310375964837874,
      lng:-71.27618590202951,
      name: "Capezio",
      page: "Capezio",
      address: "330 Washington St, Wellesley, MA 02481",
      type: "retail",
      index: 1
    },
    {
      lat: 42.31120165047687, 
      lng: -71.2753824410739,
      name: "TeamMates Fitness Pilates and Personal Training Studio",
      page: "TeamMates_Fitness_Pilates_and_Personal_Training_Studio",
      address: "316 Washington St, Wellesley Hills, MA 02481",
      type: "sports",
      index: 2
    },
    {
      lat: 42.31138177390486,
      lng: -71.2752333508035,
      name: "Singh's Cafe",
      page: "Singhs_Cafe",
      address: "312 Washington St, Wellesley Hills, MA 02481",
      type: "food",
      index: 3
    },
    {
      lat: 42.31178872545044,
      lng:  -71.27579921267143,
      name: "Holy Spirit Catholic Community",
      page: "Holy_Spirit_Catholic_Community",
      address: "309 Washington St, Wellesley Hills, MA 02481",
      type: "church",
      index: 4
    },
    {
      lat: 42.312028356604394,
      lng: -71.27458033006664,
      name: "Green's Hardware and Paint Inc",
      page: "Greens_Hardware_and_Paint_Inc",
      address: "308 Washington St, Wellesley Hills, MA 02481",
      type: "utility",
      index: 5
    },
    {
      lat: 42.311955235248384, 
      lng: -71.27582112413856,
      name: "Wellesley Hills Center for Early Education",
      page: "Wellesley_Hills_Center_for_Early_Education",
      address: "309 Washington St, Wellesley, MA 02481",
      type: "school",
      index: 6
    },
    {
      lat: 42.31219346903132, 
      lng: -71.27445593168925,
      name: "Maugus Restaurant",
      page: "Maugus_Restaurant",
      address: "300 Washington St, Wellesley, MA 02481",
      type: "food",
      index: 7
    },
    {
      lat: 42.312359784614785, 
      lng: -71.27430577087637,
      name: "Comella's Restaurants",
      page: "Comellas_Restaurants",
      address: "288 Washington St, Wellesley, MA 02481",
      type: "food",
      index: 8
    },
    {
      lat: 42.3126903413349,
      lng: -71.27382666916154,
      name: "Middlesex Savings Bank",
      page: "Middlesex_Savings_Bank",
      address: "278 Washington St, Wellesley, MA 02481",
      type: "bank",
      index: 9
    },
    {
      lat: 42.31282323202849, 
      lng: -71.27371133417607,
      name: "Loyal Companion",
      page: "Loyal_Companion",
      address: "276 Washington St, Wellesley, MA 02481",
      type: "pets",
      index: 10
    },
    {
      lat: 42.3129105033761, 
      lng: -71.27365232557577,
      name: "Quebrada Baking Company",
      page: "Quebrada_Baking_Company",
      address: "272 Washington St, Wellesley, MA 02481",
      type: "food",
      index: 11
    },
    {
      lat: 42.31345197971681, 
      lng: -71.27396614401088,
      name: "Nabina's Threading and Spa",
      page: "Nabinas_Threading_and_Spa",
      address: "265 Washington St, Wellesley Hills, MA 02481",
      type: "fashion",
      index: 12
    },
    {
      lat: 42.3131088469001, 
      lng: -71.273429702239,
      name: "Ideal Barber Shop",
      page: "Ideal_Barber_Shop",
      address: "262 Washington St, Wellesley, MA 02481",
      type: "fashion",
      index: 13
    },
    {
      lat: 42.31296008931556, 
      lng: -71.27354235501849,
      name: "Subway",
      page: "Subway",
      address: "268 Washington St, Wellesley, MA 02481",
      type: "food",
      index: 14
    },
    {
      lat: 42.31351580393651, 
      lng: -71.27368157701618,
      name: "Coconut Thai Cafe",
      page: "Coconut_Thai_Cafe",
      address: "257 Washington St, Wellesley, MA 02481",
      type: "food",
      index: 15
    },
    {
      lat: 42.313024013831985,
      lng:  -71.27464646185275,
      name: "Nails Studio",
      page: "Nails_Studio",
      address: "451 Worcester St, Wellesley, MA 02481",
      type: "fashion",
      index: 16
    },
    {
      lat: 42.3131479265818, 
      lng: -71.27535129695266,
      name: "The Cat's Hospital",
      page: "The_Cats_Hospital",
      address: "459 Worcester St, Wellesley Hills, MA 02481",
      type: "hospital",
      index: 17
    },
    {
      lat: 42.31345691685386,
      lng:  -71.27260815323777,
      name: "Universal Pediatric Association",
      page: "Universal_Pediatric_Association",
      address: "422 Worcester St # 105, Wellesley, MA 02481",
      type: "hospital",
      index: 18
    }
  ]
  console.log(markers) 
  
  const [selected, setSelected] = React.useState(null);


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);


  

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div  className="font-mono">
      <div className='bg-white flex flex-col justify-center items-center'  style={{backgroundColor: "#3398d6"}}>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
          Wellesley Center
        </h1>
      </div>
      <div className='bg-white flex flex-col justify-center items-center'  >
        <Locate panTo={panTo} />  
        <Search panTo={panTo} />  
      </div>
      <div style={{padding:"4vh"}}>
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          minzoom={12}
          center={center}
          options={options}
          /*onClick={onMapClick} */
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              label={marker.name}
              zIndex={marker.index}
              icon={{
                url: "/" + marker.type +".png",
                labelOrigin: { x: 12, y: -10},
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}


          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div className="font-mono">
                <h1 className="lg:text-2xl md:text-2xl sm:text-2xl text-2xl font-black"><b><Link src="">
                  {selected.name}
                </Link></b></h1>
                
                <p> {selected.address}</p>
                <p style={{color:"#1049a3"}} ><Link to={"/shops/" + selected.page}> Learn More </Link></p>

              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: 42.313075, 
              lng: -71.273923,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });


  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };



  return (
    <div className="search"  >
      <div>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '7vh', padding:"2vh",   border: "5px solid #000000", margin: "2vh"
            }}
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search a location"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </div>

  );
};


