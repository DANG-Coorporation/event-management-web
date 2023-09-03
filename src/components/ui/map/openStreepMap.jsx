import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import MarkerMap from "./markerMap";
export default function OpenStreetMapLoader() {
  const lat = useSelector(
    (state) => state.createEvent.data.address.coordinate.lat
  );
  const long = useSelector(
    (state) => state.createEvent.data.address.coordinate.long
  );
  const address = useSelector((state) => state.createEvent.data.address);
  // console.log("debug-map", address);
  const mapDimensions = { width: "400px", height: "300px" };
  const center = {
    lat: lat,
    lng: long,
  };

  const Recenter = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  return (
    <>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={16}
        scrollWheelZoom={false}
        style={mapDimensions}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerMap lat={lat} long={long} />
        <Recenter lat={lat} lng={long} />
      </MapContainer>
    </>
  );
}
