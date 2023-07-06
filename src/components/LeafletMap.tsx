import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import coords from '../../data.json';

const defaultLatLng:LatLngTuple = [29.976111, 31.132778];
const zoom= 6;

const LeafletMap:React.FC = () => {

    const coordinates = coords.coords

   return (
    <MapContainer id="mapId"
          center={defaultLatLng}
          zoom={zoom}>
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>

       {coordinates.map(({ lat, lng, text }, index) => (
          <Marker position={[lat, lng]} key={index}>
            <Popup>
              {text}
            </Popup>
          </Marker>
        ))}
   </MapContainer>
   )
}

export default LeafletMap;

