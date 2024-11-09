import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  MapPin,
  Users,
  Leaf,
  HeartHandshake,
  Trash,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { renderSearchAndFilter } from "./renderSearchAndFilter";

const EventLists = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getStatusRibbon = (status) => {
    if (!status) return null;

    const statusColor =
      status.toLowerCase() === "ongoing"
        ? "from-green-500 to-green-600"
        : status.toLowerCase() === "completed"
        ? "from-blue-500 to-blue-600"
        : status.toLowerCase() === "cancelled"
        ? "from-red-500 to-red-600"
        : "from-yellow-500 to-yellow-600";

    return (
      <div className="absolute -right-[46px] top-[32px] z-10 w-[170px] transform rotate-45">
        <div
          className={`w-full text-center py-1 bg-gradient-to-r ${statusColor} text-white font-bold text-sm uppercase shadow-md`}
        >
          {status}
        </div>
      </div>
    );
  };

  const handleLearnMore = (id) => {
    navigate(`/events/${id}`);
  };

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events", {
          withCredentials: true,
        });
        setEvents(res.data.data);
        setFilteredEvents(res.data.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          navigate("/login");
        } else {
          setError("Failed to fetch events. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    getAllEvents();
  }, [navigate]);

  useEffect(() => {
    let result = [...events];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Location filter
    if (selectedLocation) {
      result = result.filter((event) =>
        event.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Date filter
    if (selectedDate) {
      result = result.filter(
        (event) =>
          new Date(event.date).toDateString() === selectedDate.toDateString()
      );
    }

    // Status filter
    if (selectedStatus) {
      result = result.filter(
        (event) => event.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    setFilteredEvents(result);
  }, [searchQuery, selectedLocation, selectedDate, selectedStatus, events]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedStatus("");
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "environment":
        return <Leaf className="w-4 h-4" />;
      case "healthcare":
        return <HeartHandshake className="w-4 h-4" />;
      case "cleaning":
        return <Trash className="w-4 h-4" />;
      default:
        return <Leaf className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        {renderSearchAndFilter({
          searchQuery,
          setSearchQuery,
          selectedLocation,
          setSelectedLocation,
          selectedDate,
          setSelectedDate,
          selectedStatus,
          setSelectedStatus,
          resetFilters,
          events,
          setFilteredEvents,
        })}
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        {renderSearchAndFilter({
          searchQuery,
          setSearchQuery,
          selectedLocation,
          setSelectedLocation,
          selectedDate,
          setSelectedDate,
          selectedStatus,
          setSelectedStatus,
          resetFilters,
          events,
          setFilteredEvents,
        })}
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {renderSearchAndFilter({
          searchQuery,
          setSearchQuery,
          selectedLocation,
          setSelectedLocation,
          selectedDate,
          setSelectedDate,
          selectedStatus,
          setSelectedStatus,
          resetFilters,
          events,
          setFilteredEvents,
        })}

        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Community Drives Near You
        </h1>
        <p className="text-xl text-green-700 mb-12 text-center max-w-3xl mx-auto">
          Join hands with fellow volunteers and make a positive impact on our
          environment. Every action counts!
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-xl">
                No events found matching your criteria
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <Card
                key={event._id}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-green-200 bg-white group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://imgs.search.brave.com/mH6MfrGC1RPsopHZR1mXN874vZgTIPdLzNpnXdw_qAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5ldmVudGluZ3Zv/bHVudGVlcnMuY29t/L2Nhcm91c2VsL3Zv/bHVudGVlcnM4Lmpw/Zw"
                    alt={event?.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {getStatusRibbon(event?.status)}
                </div>

                <CardContent className="p-6">
                  <Badge
                    className="mb-2 bg-green-100 text-green-800 hover:bg-green-200"
                    variant="secondary"
                  >
                    {getCategoryIcon(event?.category)}
                    <span className="ml-1">{event?.category}</span>
                  </Badge>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-green-700 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-green-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.registeredVolunteers?.length} volunteers registered
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-green-100">
                  <Button
                    onClick={() => handleLearnMore(event._id)}
                    className="w-full bg-blue-600 hover:bg-green-700 text-white"
                  >
                    {event?.status === "ongoing" || event?.status === "upcoming"
                      ? "Learn More"
                      : "Event Completed or Cancelled"}
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventLists;