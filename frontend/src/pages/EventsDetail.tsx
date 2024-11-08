import EventDetailsCard from "@/components/EventsComponents/EventDetailsCard";

import Map from "@/components/map/Map";


const EventDetails = () => {
  return (
    <div className="flex gap-3 justify-evenly items-center">
     <EventDetailsCard />
     <Map />
    </div>
  );
};

export default EventDetails;
