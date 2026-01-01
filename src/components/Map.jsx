import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesProvider";
import { useGeolocation } from "../hook/useGeolocation";
import { useUrlLocation } from "../hook/useSearchParam";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import style from "./Map.module.css";
import Button from "./Button";

export default function Map() {
  const [MapPosition, setMapPosition] = useState([40, 0]);
  const { cities = [] } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [lat, lng] = useUrlLocation();

  useEffect(
    function () {
      if (lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );
  return (
    <div className={style.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your Position"}
      </Button>
      <MapContainer
        center={MapPosition}
        className={style.map}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeMapPosition position={MapPosition} />
        <DectectClick />
      </MapContainer>
    </div>
  );
}

function ChangeMapPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DectectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: () => navigate(`form`),
  });
}
