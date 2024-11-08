
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';

interface Opportunity {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

const MapDisplay: React.FC = () => {
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [searchLocation, setSearchLocation] = useState<string>(''); // For user input location

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  useEffect(() => {
    // Get user's current location (geolocation API)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        setUserLocation(userLatLng);

        // Fetch volunteering opportunities based on user's location
        fetchVolunteeringOpportunities(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);

  const fetchVolunteeringOpportunities = async (lat: number, lng: number) => {
    try {
      // Example API call to fetch volunteering opportunities near the user's location
      const response = await fetch(`https://api.example.com/volunteer?lat=${lat}&lng=${lng}`);
      const data = await response.json();
      setOpportunities(data.opportunities); // Assuming the API returns an array of opportunities
    } catch (error) {
      console.error('Error fetching volunteering opportunities:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value);
  };

  const handleSearch = () => {
    // Here, you'd integrate with a geocoding API (Google Maps API or similar) to convert the address into coordinates
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchLocation }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results) {
        const newLatLng = results[0].geometry.location;
        setUserLocation(newLatLng);

        // Fetch opportunities for the new location
        fetchVolunteeringOpportunities(newLatLng.lat(), newLatLng.lng());
      }
    });
  };

  return isLoaded ? (
    <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Find Nearby Volunteering Opportunities</h2>
        <input
          type="text"
          placeholder="Enter your location"
          value={searchLocation}
          onChange={handleSearchChange}
          className="p-2 w-full sm:w-80 rounded-md border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="mt-4 px-6 py-2 bg-yellow-400 text-blue-900 rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Search
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            center={userLocation || { lat: 40.7128, lng: -74.0060 }} // Default to NYC if no location
            zoom={12}
          >
            {/* Add marker for user location */}
            {userLocation && <Marker position={userLocation} />}
            
            {/* Add markers for volunteering opportunities */}
            {opportunities.map((opportunity) => (
              <Marker
                key={opportunity.id}
                position={{ lat: opportunity.lat, lng: opportunity.lng }}
                title={opportunity.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  ) : (
    <div>Loading map...</div>
  );
};

export default MapDisplay;
