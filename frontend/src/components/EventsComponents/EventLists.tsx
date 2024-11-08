// @ts-nocheck

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import axios from "axios";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  MapPin,
  Users,
  Leaf,
  HeartHandshake,
  Trash,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventLists = () => {
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events", {
          withCredentials: true,
        });
        setEvents(res.data.data);
        console.log(events);
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
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-4xl font-semibold ">
          No events found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-2xl mx-auto mb-12 mt-10">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Search for community drives near you"
                className="pl-12 h-12 w-full rounded-full border-2 focus:border-primary shadow-sm bg-white/50 backdrop-blur-sm"
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="h-12 px-6 rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-colors">
                Filters
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-semibold">
                  Select filters
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                  Location
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                  Date
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                  Status
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Community Drives Near You
        </h1>
        <p className="text-xl text-green-700 mb-12 text-center max-w-3xl mx-auto">
          Join hands with fellow volunteers and make a positive impact on our
          environment. Every action counts!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
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
                <Button className="w-full bg-blue-600 hover:bg-green-700 text-white">
                  {event?.status === "ongoing" || event?.status === "upcoming"
                    ? "Learn More"
                    : "Event Completed or Cancelled"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventLists;
