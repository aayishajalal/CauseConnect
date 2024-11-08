import EventHero from "@/components/EventsComponents/EventHero";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search for community drives near you"
              className="pl-12 h-12 w-full rounded-full border-2 focus:border-primary shadow-sm bg-white/50 backdrop-blur-sm"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="h-12 px-6 rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50 transition-colors">
              Filters
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="font-semibold">Select filters</DropdownMenuLabel>
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
      <EventHero />
    </div>
  );
};

export default Events;
