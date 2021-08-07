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
  height: "60vh",
  width: "50vw",
  left: "25vw",
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


export default function Hero () {

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
      address: "330 Washington St, Wellesley, MA 02481",
      type: "retail"
    },
    {
      lat: 42.31120165047687, 
      lng: -71.2753824410739,
      name: "TeamMates Fitness Pilates & Personal Training Studio",
      address: "316 Washington St, Wellesley Hills, MA 02481",
      type: "sports",
    },
    {
      lat: 42.31138177390486,
      lng: -71.2752333508035,
      name: "Singh's Cafe",
      address: "312 Washington St, Wellesley Hills, MA 02481",
      type: "food"
    },
    {
      lat: 42.31178872545044,
      lng:  -71.27579921267143,
      name: "Holy Spirit Catholic Community",
      address: "309 Washington St, Wellesley Hills, MA 02481",
      type: "church"
    },
    {
      lat: 42.312028356604394,
      lng: -71.27458033006664,
      name: "Green's Hardware & Paint Inc",
      address: "308 Washington St, Wellesley Hills, MA 02481",
      type: "utility"
    },
    {
      lat: 42.311955235248384, 
      lng: -71.27582112413856,
      name: "Wellesley Hills Center for Early Education",
      address: "309 Washington St, Wellesley, MA 02481",
      type: "school"
    },
    {
      lat: 42.31219346903132, 
      lng: -71.27445593168925,
      name: "Maugus Restaurant",
      address: "300 Washington St, Wellesley, MA 02481",
      type: "food"
    },
    {
      lat: 42.312359784614785, 
      lng: -71.27430577087637,
      name: "Comella's Restaurants Wellesley Hills",
      address: "288 Washington St, Wellesley, MA 02481",
      type: "food"
    },
    {
      lat: 42.3126903413349,
      lng: -71.27382666916154,
      name: "Middlesex Savings Bank",
      address: "278 Washington St, Wellesley, MA 02481",
      type: "bank"
    },
    {
      lat: 42.31282323202849, 
      lng: -71.27371133417607,
      name: "Loyal Companion",
      address: "276 Washington St, Wellesley, MA 02481",
      type: "pets"
    },
    {
      lat: 42.3129105033761, 
      lng: -71.27365232557577,
      name: "Quebrada Baking Company",
      address: "272 Washington St, Wellesley, MA 02481",
      type: "food"
    },
    {
      lat: 42.31345197971681, 
      lng: -71.27396614401088,
      name: "Nabina's Threading and Spa",
      address: "265 Washington St, Wellesley Hills, MA 02481",
      type: "fashion"
    },
    {
      lat: 42.3131088469001, 
      lng: -71.273429702239,
      name: "Ideal Barber Shop",
      address: "262 Washington St, Wellesley, MA 02481",
      type: "fashion"
    },
    {
      lat: 42.31296008931556, 
      lng: -71.27354235501849,
      name: "Subway",
      address: "268 Washington St, Wellesley, MA 02481",
      type: "food"
    },
    {
      lat: 42.31351580393651, 
      lng: -71.27368157701618,
      name: "Coconut Thai Cafe Wellesley",
      address: "257 Washington St, Wellesley, MA 02481",
      type: "food"
    },
    {
      lat: 42.313024013831985,
      lng:  -71.27464646185275,
      name: "Nails Studio",
      address: "451 Worcester St, Wellesley, MA 02481",
      type: "fashion"
    },
    {
      lat: 42.3131479265818, 
      lng: -71.27535129695266,
      name: "The Cat's Hospital, LLC",
      address: "459 Worcester St, Wellesley Hills, MA 02481",
      type: "hospital"
    },
    {
      lat: 42.31345691685386,
      lng:  -71.27260815323777,
      name: "Universal pediatric Association At Newton Wellesley",
      address: "422 Worcester St # 105, Wellesley, MA 02481",
      type: "hospital"
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
    <div>
      <div className='bg-white flex flex-col justify-center items-center'>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
          Rediscover Wellesley
        </h1>
        <Locate panTo={panTo} />  
        <Search panTo={panTo} />  
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={18}
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
            icon={{
              url: "/" + marker.type +".png",
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
            <div>
              <h2><b><Link src="">
                {selected.name}
              </Link></b></h2>
              
              <p> {selected.address}</p>
              <p> huh: {selected.lat}</p>

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
    <div className="search">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your location"
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


