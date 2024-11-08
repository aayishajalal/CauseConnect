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
import EventLists from "@/components/EventsComponents/EventLists";

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <EventHero />
      <EventLists  />
    </div>
  );
};

export default Events;
