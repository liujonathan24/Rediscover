import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import React from "react";
import 'leaflet/dist/leaflet.css';
import mapStyles from "./mapStyles";


const position = [42.313075, -71.27392]
const mapContainerStyle = {
    height: "60vh",
    width: "50vw",
    left: "25vw",
    right: "25vw",
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

export default class Map extends React.Component { 
    render() {
        return (
            <MapContainer options={options} center={position} zoom={25} scrollWheelZoom={false} style={mapContainerStyle}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}