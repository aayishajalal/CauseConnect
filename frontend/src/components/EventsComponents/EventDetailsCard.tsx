import { Calendar, MapPin, Users, Heart, Share2, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EventDetailsCard = () => {
  return (
    <Card className="max-w-2xl p-6 mb-8 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl space-y-6 transition-all duration-300 hover:shadow-2xl">
      {/* Image Section with Overlay */}
      <div className="relative group">
        <img 
          src="https://workai.com/page/uploads/2021/10/GITEX-GLOBAL-x-Ai-Everything-worlds-biggest-and-most-collaborative-tech-event-of-2021-set-to-drive-international-transformation-2-edited.jpg" 
          alt="Event" 
          className="w-full h-56 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.02]" 
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
            <Heart className="w-4 h-4 text-blue-900" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
            <Share2 className="w-4 h-4 text-blue-900" />
          </Button>
        </div>
      </div>

      {/* Title Section */}
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-blue-900">
          Upcoming
        </div>
        <h1 className="text-2xl font-bold text-blue-900">Google Summer of Code Workshop</h1>
        <p className="text-sm text-blue-900/70 font-medium">Organized by Madhav Dhatrak</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-yellow-100/50 rounded-lg">
          <Calendar className="w-5 h-5 text-blue-900 mb-1" />
          <p className="text-sm font-semibold text-blue-900">11-8-2024</p>
        </div>
        <div className="p-3 bg-yellow-100/50 rounded-lg">
          <MapPin className="w-5 h-5 text-blue-900 mb-1" />
          <p className="text-sm font-semibold text-blue-900">Nashik, India</p>
        </div>
        <div className="p-3 bg-yellow-100/50 rounded-lg">
          <Users className="w-5 h-5 text-blue-900 mb-1" />
          <p className="text-sm font-semibold text-blue-900">30/200 Volunteers</p>
        </div>
      </div>

      {/* Description Sections */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-blue-900 mb-2">Event Description</h2>
          <p className="text-sm text-blue-900/70 leading-relaxed">
            Google matches mentors and programmers from universities to work on important 
            open-source projects that create value for its users all over the world...
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-bold text-blue-900 mb-2">Impact</h2>
          <p className="text-sm text-blue-900/70 leading-relaxed">
            Keep an elaborate proposal so remember that the number of pages/words doesn't matter...
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-2">
        <Button className="flex-1 h-10 rounded-full bg-blue-900 text-base font-semibold text-yellow-400 hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
          Volunteer Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="flex-1 h-10 rounded-full border-2 border-blue-900 text-base font-semibold text-blue-900 hover:bg-blue-900 hover:text-yellow-400 transition-all duration-300">
          Contact Organizer
        </Button>
      </div>
    </Card>
  );
};

export default EventDetailsCard;