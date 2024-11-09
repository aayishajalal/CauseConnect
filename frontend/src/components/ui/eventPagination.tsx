// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Define the Event type
// interface Event {
//   _id: string;
//   title: string;
//   description: string;
//   date: string;
//   location: string;
//   organizer: {
//     username: string;
//     email: string;
//   };
// }

// // Define the API response type
// interface EventApiResponse {
//   status: string;
//   results: number;
//   data: Event[];
// }

// const EventsStack: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const limit = 5; // Number of events per page

//   // Fetch events from the backend with pagination
//   const fetchEvents = async (page: number) => {
//     try {
//       const response = await axios.get<EventApiResponse>(`/api/v1/events`, {
//         params: { page, limit },
//       });

//       const newEvents = response.data.data;

//       // Append new events to existing list
//       setEvents((prevEvents) => [...prevEvents, ...newEvents]);
//       setHasMore(newEvents.length === limit); // Check if there are more events
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   // Initial load and page update
//   useEffect(() => {
//     fetchEvents(page);
//   }, [page]);

//   // Load more events on button click
//   const loadMoreEvents = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 space-y-6">
//       {/* Stack of events */}
//       {events.map((event, index) => (
//         <div
//           key={event._id}
//           className="w-full max-w-md p-4 bg-white shadow-md rounded-md transition-transform transform hover:scale-105"
//           style={{
//             position: "relative",
//             bottom: `${index * 20}px`, // Offset each card slightly to create a stacked effect
//             zIndex: `${events.length - index}`,
//           }}
//         >
//           <h3 className="text-xl font-semibold text-blue-800">{event.title}</h3>
//           <p className="text-sm text-gray-600 mb-2">
//             {new Date(event.date).toLocaleDateString()} - {event.location}
//           </p>
//           <p className="text-gray-700">{event.description}</p>
//           <p className="text-sm text-gray-500 mt-2">
//             Organized by: {event.organizer.username} ({event.organizer.email})
//           </p>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {hasMore && (
//         <button
//           onClick={loadMoreEvents}
//           className="mt-4 px-6 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default EventsStack;
