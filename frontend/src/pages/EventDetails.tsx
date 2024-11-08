import EventDetailsCard from "@/components/EventsComponents/EventDetailsCard";
import Map from "@/components/map/Map";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Users, Calendar, MessageCircle, Bell } from "lucide-react";

const EventDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <EventDetailsCard />

          <Tabs defaultValue="requirements" className="mt-8">
            <TabsList className="bg-blue-50 p-1 rounded-lg">
              <TabsTrigger value="requirements" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Requirements
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </TabsTrigger>
              <TabsTrigger value="updates" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Updates
              </TabsTrigger>
              <TabsTrigger value="discussion" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Discussion
              </TabsTrigger>
            </TabsList>

            <TabsContent value="requirements">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Volunteer Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    • Must be 18 years or older
                  </li>
                  <li className="flex items-center gap-2">
                    • Available for full duration of event
                  </li>
                  <li className="flex items-center gap-2">
                    • Basic first aid knowledge (preferred)
                  </li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="schedule">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Event Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="font-semibold w-24">9:00 AM</div>
                    <div>Registration & Check-in</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold w-24">9:30 AM</div>
                    <div>Orientation & Briefing</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold w-24">10:00 AM</div>
                    <div>Event Activities Begin</div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="updates">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Recent Updates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-900 pl-4 py-2">
                    <p className="text-sm text-gray-500">2 days ago</p>
                    <p className="text-gray-700">Updated meeting point location</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="discussion">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Discussion</h3>
                <textarea 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 mb-4"
                  placeholder="Ask a question or leave a comment..."
                  rows={3}
                />
                <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                  Post Comment
                </button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Map and Additional Info */}
        <div className="lg:w-1/3 space-y-6">
          {/* Map Container */}
          <div className="map-container rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <Map height="300px" width="100%" />
          </div>

          {/* Event Stats */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Event Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registered</span>
                <span className="font-semibold">24/50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Days Left</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Interest Level</span>
                <span className="font-semibold text-green-600">High</span>
              </div>
            </div>
          </Card>

          {/* Similar Events Preview */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Similar Events</h3>
            <div className="space-y-4">
              {/* Add similar events list here */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;