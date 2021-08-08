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
import mapStyles from "./mapStyles2";


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


export default function Map () {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCtnOlCbp8TfNQbBQoby2GWEecFKn76_1Q",
    libraries,
  });
  /*const [markers, setMarkers] = React.useState([]); */

  const markers =[
    {
      lat:42.3116937000558, 
      lng:-71.2749703350714,
      name: "Brook Path",
      address: "Brook Path, Wellesley, MA 02481",
      index: 1
    },
    {
      lat: 42.306986350193604, 
      lng: -71.27822246016866,
      name: "Crosstown Trail",
      address: "Crosstown Trail, Wellesley, MA 02481",
      index: 2
    },
    {
      lat: 42.30739442577682, 
      lng: -71.26128635018723,
      name: "Centenial Reservation",
      address: "Centennial Reservation Trail, Wellesley, MA 02481",
      index: 3
    },
    {
      lat: 42.31187788338507,
      lng:  -71.25605368296326,
      name: "Longfellow Pond Trail",
      address: "Longfellow Pond Trail, Wellesley, MA 02481",
      index: 4
    },
    {
      lat: 42.28601927930422, 
      lng:  -71.29096245542354,
      name: "Sudbury Path",
      address: "Sudbury Path, Wellesley, MA 02481",
      index: 4
    },
]
  
  const [selected, setSelected] = React.useState(null);


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);


  

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div  className="font-mono">
      <div className='bg-white flex flex-col justify-center items-center' style={{backgroundColor:"#45e6d3"}}>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
          Trails
        </h1>
      </div>
      <div className='bg-white flex flex-col justify-center items-center'>
        <Locate panTo={panTo} />  
        <Search panTo={panTo} />  
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
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
              url: "/trail.jpg",
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
              <p style={{color:"#1049a3"}} ><Link to={"/" + selected.page}> Learn More </Link></p>

            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
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


