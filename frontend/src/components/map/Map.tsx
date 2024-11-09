// import React, { useEffect, useRef } from "react";
// import leaflet from "leaflet";
// import uselocalStorage from "../hooks/useLocalStorage";
// import useGeolocation from "../hooks/useGeolocation";

// interface MapProps {
//   height: string;
//   width: string;
// }

// const Map: React.FC<MapProps> = ({ height, width }) => {
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const userMarkerRef = useRef<leaflet.Marker | null>(null);
//   const mapInstance = useRef<leaflet.Map | null>(null); // Add a ref to store the map instance

//   const [userPosition, setUserPosition] = uselocalStorage("USER_MARKER", {
//     latitude: 0,
//     longitude: 0,
//   });

//   const location = useGeolocation();

//   useEffect(() => {
//     if (mapRef.current && !mapInstance.current) {
//       // Initialize map only if it's not already initialized
//       mapInstance.current = leaflet
//         .map(mapRef.current)
//         .setView([userPosition.latitude, userPosition.longitude], 13);

//       leaflet
//         .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           maxZoom: 19,
//           attribution:
//             '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         })
//         .addTo(mapInstance.current); // Use the map instance to add the tile layer
//     }
//   }, []);

//   useEffect(() => {
//     setUserPosition({ ...userPosition });

//     if (userMarkerRef.current) {
//       mapInstance.current?.removeLayer(userMarkerRef.current!);
//     }

//     userMarkerRef.current = leaflet
//       .marker([location.latitude, location.longitude])
//       .addTo(mapInstance.current!)
//       .bindPopup("You are here!");

//     mapInstance.current?.setView([location.latitude, location.longitude]);
//   }, [location, userPosition.latitude, userPosition.longitude]);

//   return (
//     <div 
//       id="map" 
//       ref={mapRef} 
//       style={{ 
//         height,
//         width,
//         position: "relative",
//         zIndex: 1,
//       }}
//     />
//   );
// };

// export default Map;


// src/components/Map.tsx
import React, { useEffect, useRef, useState } from "react";
import leaflet from "leaflet";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

interface MapProps {
  height: string;
  width: string;
}

interface Event {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ height, width }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const userMarkerRef = useRef<leaflet.Marker | null>(null);
  const mapInstance = useRef<leaflet.Map | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const location = useGeolocation();

  const blueIcon = leaflet.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  const redIcon = leaflet.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  useEffect(() => {
    // Initialize the map only once
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = leaflet
        .map(mapRef.current)
        .setView([userPosition.latitude, userPosition.longitude], 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapInstance.current);
    }
  }, [userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    setUserPosition({ latitude: location.latitude, longitude: location.longitude });

    if (userMarkerRef.current) {
      mapInstance.current?.removeLayer(userMarkerRef.current);
    }

    userMarkerRef.current = leaflet
      .marker([location.latitude, location.longitude], { icon: blueIcon })
      .addTo(mapInstance.current!)
      .bindPopup("You are here!");

    mapInstance.current?.setView([location.latitude, location.longitude], 13);
  }, [location, setUserPosition]);

  // Fetch events from backend and add red markers for each event
  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events", {
          withCredentials: true,
        });
        setEvents(res.data.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    getAllEvents();
  }, []);

  useEffect(() => {
    // Add markers for fetched events
    events.forEach(event => {
      leaflet
        .marker([event.latitude, event.longitude], { icon: redIcon })
        .addTo(mapInstance.current!)
        .bindPopup(event.name);
    });
  }, [events]);

  return (
    <div 
      id="map" 
      ref={mapRef} 
      style={{ 
        height,
        width,
        position: "relative",
        zIndex: 1,
      }}
    />
  );
};

export default Map;
