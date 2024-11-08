import EventDetailsCard from "@/components/EventsComponents/EventDetailsCard";

import Map from "@/components/map/Map";

const EventDetails = () => {
  return (
    <div className="flex gap-3 justify-evenly items-center">
      <EventDetailsCard />

      <div
        className="map-container"
        style={{
          height: "300px",
          width: "50%",
          margin: "0 50px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Map height="100%" width="100%" />
      </div>
    </div>
  );
};

export default EventDetails;
