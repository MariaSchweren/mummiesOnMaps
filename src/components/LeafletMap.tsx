import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, CircleMarker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import coords from '../../data.json';

const defaultLatLng:LatLngTuple = [29.976111, 31.132778];
const zoom= 6;

const multiPolygon = [
  [
    [25.740833,32.601944],
    [25.728333, 32.593056],
    [25.72, 32.600833],
    [25.735278, 32.620556],
  ],

]
const polygon=[
 [ [27.75, 30.75,],
    [27.3, 30.866666666666667],
    [27.3125, 31.092222],
  ],
]
const polygon2=[
  [  [29.274167, 30.898889],
     [29.233333,30.966667],
     [29.216667, 31.033333],
     [29.433333, 31.216667],
     [29.570278,31.231111],
     [29.75, 31.25],
     [29.816667, 31.216667],
     [29.873889, 31.216944],
   ],
 ]

 const polygon3=[
  [  [29.816667, 31.216667],
     [29.873889, 31.216944],
     [29.9,31.2],
     [29.932778,31.161111],
     [29.9775,31.134167],
     [30.031944,31.075],
   ],
 ]
 
 const polygon4=[
  [  [26.566667, 31.833333],
     [25.913611,31.483333],
     [26.174913,31.907859],
     [26.13764,31.9854],
     [25.229999999999997,32.59],
     [26.016767,32.283481],
     
   ],
 ]

 const Polyline1=[
  [ [26.211972,32.135694],
    [26.016767,32.283481],
  ],
 ]

 const Polyline2=[
  [ [25.127472,32.798639],
    [25.72,32.600833],
  ],
 ]


const purpleOptions = { color: 'lime' };
const pinkOptions = { color: 'red' };
const bleOptions = { color: 'blue'};
const blaOptions = { color: 'pink'};
const blubOptions = {color: 'yellow'};
const lineOptions = {color: 'lime'};
const redOptions = { color: 'red' };


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
       <CircleMarker center={[25.720556,32.610278]} pathOptions={redOptions} radius={20}>
       <Popup>Theben</Popup>
      </CircleMarker>

      <CircleMarker center={[31.2135, 29.927661]} pathOptions={redOptions} radius={20}>
       <Popup>Alexandria</Popup>
      </CircleMarker>

      <CircleMarker center={[29.85, 31.25]} pathOptions={redOptions} radius={20}>
       <Popup>Memphis</Popup>
      </CircleMarker>

      <CircleMarker center={[29.083333, 30.933333]} pathOptions={redOptions} radius={20}>
       <Popup>Herakleopolis Magna</Popup>
      </CircleMarker>

      <CircleMarker center={[27.661667, 30.905556]} pathOptions={redOptions} radius={20}>
       <Popup>Amarna <br /> Achet-Aton</Popup>
      </CircleMarker>
      
      <CircleMarker center={[30.056111, 31.239444]} pathOptions={redOptions} radius={20}>
       <Popup>Kairo</Popup>
      </CircleMarker>

      <CircleMarker center={[29.570278, 31.231111]} pathOptions={redOptions} radius={20}>
       <Popup>El-Lisht</Popup>
      </CircleMarker>

      <CircleMarker center={[26.329884, 31.883698]} pathOptions={redOptions} radius={20}>
       <Popup>Tjeni</Popup>
      </CircleMarker>


    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
    <Polygon pathOptions={pinkOptions} positions={polygon} />
    <Polygon pathOptions={bleOptions} positions={polygon2} />
    <Polygon pathOptions={blaOptions} positions={polygon3} />
    <Polygon pathOptions={blubOptions} positions={polygon4} />
    <Polyline pathOptions={lineOptions} positions={Polyline1} />
    <Polyline pathOptions={lineOptions} positions={Polyline2} />
   </MapContainer>
   )
}

export default LeafletMap;

