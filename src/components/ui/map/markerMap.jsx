import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import pinMap from "../../../assets/map/location-sign.png";
import { useSelector } from "react-redux";

export default function MarkerMap() {
  const lat = useSelector((state) => state.createEvent.address.coordinate.lat);
  const long = useSelector(
    (state) => state.createEvent.address.coordinate.long
  );
  const center = {
    lat: lat,
    lng: long,
  };
  let DefaultIcon = L.icon({
    iconUrl: pinMap,
    iconSize: [32, 32], // Set the size of your custom icon
    iconAnchor: [16, 32], // Anchor point of the icon (centered, bottom)
    popupAnchor: [0, -32], // Anchor point for popups (top, centered)
  });

  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  useEffect(() => {
    setPosition({
      lat: lat,
      lng: long,
    });
  }, [lat, long]);

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  const Recenter = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  return (
    <>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={DefaultIcon}
      >
        {/* <Recenter lat={lat} lng={long} /> */}
        {/* <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? "Marker is draggable"
              : "Click here to make marker draggable"}
          </span>
        </Popup> */}
      </Marker>
    </>
  );
}
