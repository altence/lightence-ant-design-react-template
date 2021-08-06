import React from 'react';
import L from 'leaflet';
import { Marker, TileLayer } from 'react-leaflet';
import { Popup } from './Popup';
import { doctorsData, polyclinicData } from '../../../constants/map';
import markerDoctor from '../../../assets/icons/marker-doctor.svg';
import markerPolyclinic from '../../../assets/icons/marker-polyclinic.svg';
import * as S from './Map.styles';

export const Map: React.FC = () => {
  return (
    <S.Map center={[42.343574, -83.046792]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {doctorsData.map((marker) => (
        <Marker key={marker.id} icon={MarkerDoctor} position={[marker.gps.latitude, marker.gps.longitude]}>
          <Popup
            isDoctor
            imgUrl={marker.imgUrl}
            name={marker.name}
            specifity={marker.specifity}
            rating={marker.rating}
          />
        </Marker>
      ))}
      {polyclinicData.map((marker) => (
        <Marker key={marker.id} icon={MarkerPolyclinic} position={[marker.gps.latitude, marker.gps.longitude]}>
          <Popup name={marker.name} />
        </Marker>
      ))}
    </S.Map>
  );
};

const MarkerDoctor = new L.Icon({
  iconUrl: markerDoctor,
  iconRetinaUrl: markerDoctor,
  popupAnchor: [-0, -0],
  iconSize: [50, 70],
});

const MarkerPolyclinic = new L.Icon({
  iconUrl: markerPolyclinic,
  iconRetinaUrl: markerPolyclinic,
  popupAnchor: [-0, -0],
  iconSize: [50, 70],
});
