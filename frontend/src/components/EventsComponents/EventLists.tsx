import { Card } from "../ui/card"

const EventLists = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Event Title</h3>
          <p className="text-blue-900/80">Event Description</p>
        </Card>
      </div>
    </div>
  )
}

export default EventLists
