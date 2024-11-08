import React from 'react'

const EventDetailsCard = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 space-y-6 mb-5">
      <img src="https://workai.com/page/uploads/2021/10/GITEX-GLOBAL-x-Ai-Everything-worlds-biggest-and-most-collaborative-tech-event-of-2021-set-to-drive-international-transformation-2-edited.jpg" alt="Event" className="w-full h-64 object-cover rounded-lg" />

      <div className="mt-4">
        <h1 className="text-3xl font-semibold text-gray-800">Google Summer of Code Workshop</h1>
        <p className="text-sm text-gray-500 mt-1">Organized by Madhav Dhatrak</p>
      </div>

     
      <div
        className="mt-4 inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-blue-500"
      >
        Upcoming
      </div>

     
      <div className="mt-4 flex justify-between text-gray-600">
        <p><span className="font-semibold">Date:</span>11-8-2024</p>
        <p><span className="font-semibold">Location:</span>Nashik India</p>
      </div>

      
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Event Description</h2>
        <p className="text-gray-600 mt-2">Google matches mentors and programmers from universities to work on important open-source projects that create value for its users all over the world. It started first in 2005 and it’s a very good opportunity for students to utilize their summer breaks learning and getting involved with open source projects. Google organizes this every year from May to September for Medium Size Projects and May to November for Large Size Projects (nearly about three to six months of the program based on the size of the project) where students work with the organizations and projects of their own choice. They contribute to a wide range of projects like Cloud, Graphics, Programming Languages, Operating Systems, Robotics, Science, Security, Medicine, and many more. </p>
      </div>

      
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Impact</h2>
        <p className="text-gray-600 mt-2">Keep an elaborate proposal so remember that the number of pages/words doesn’t matter. Try to add technical details in your proposal and if you had ever contributed to any other organization or open-source project then do mention them in your proposal.</p>
      </div>

      
      <div className="mt-6 flex justify-between items-center">
        <p className="text-gray-800 font-semibold">
          Required Volunteers: 200
        </p>
        <p className="text-gray-800 font-semibold">
          Registered Volunteers: 30
        </p>
      </div>
    </div>
  )
}

export default EventDetailsCard