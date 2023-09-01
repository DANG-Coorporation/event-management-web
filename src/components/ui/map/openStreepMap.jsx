import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import MarkerMap from "./markerMap";
import { useEffect, useState } from "react";
export default function OpenStreetMapLoader() {
  const lat = useSelector((state) => state.createEvent.address.coordinate.lat);
  const long = useSelector(
    (state) => state.createEvent.address.coordinate.long
  );
  const address = useSelector((state) => state.createEvent.address);
  console.log("debug-map", address);
  const mapDimensions = { width: "400px", height: "300px" };
  const center = {
    lat: lat,
    lng: long,
  };
  const [latlong, setLatLong] = useState([[lat, long]]);

  useEffect(() => {
    setLatLong([[lat, long]]);
  }, [lat, long]);
  const Recenter = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  return (
    <>
      {/* <Helmet>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
          integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
          crossorigin=''
        />
      </Helmet> */}

      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        scrollWheelZoom={true}
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
