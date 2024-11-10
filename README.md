Cause Connect
Cause Connect is a web application that helps users find and connect with volunteer opportunities organized by local NGOs and community initiatives. The app aims to bridge the gap between volunteers and organizations, allowing for easy event discovery, registration, and participation.


Table of Contents
Features
Tech Stack
Getting Started
Prerequisites
Installation
Environment Variables
Running the App
API Endpoints
Folder Structure
Future Improvements
License
Features
Event Discovery: Browse and search for volunteer events in your area.
User Authentication: Sign up, log in, and secure access with JWT authentication.
Event Registration: Register for events, view past events, and receive event updates.
Organizer Dashboard: NGOs and organizations can create, update, and manage events.
Pagination and Loading Effects: Smooth and dynamic pagination for events, with loading indicators for a seamless experience.
Tech Stack
Frontend: React, TypeScript, Tailwind CSS, Daisy UI
Backend: Node.js, Express.js
Database: MongoDB (using MongoDB Atlas)
Authentication: JSON Web Tokens (JWT)
Map Integration: OpenStreetMap for location display
Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB Atlas account and cluster (or a local MongoDB instance)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/cause-connect.git
cd cause-connect
Install dependencies for both frontend and backend:

bash
Copy code
cd backend
npm install
cd ../frontend
npm install
Environment Variables
Create a .env file in the root of the backend folder and add the following variables:

plaintext
Copy code
# MongoDB connection string
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=90d

# Other configurations
PORT=5000
Running the App
Start the backend server:

bash
Copy code
cd backend
npm run dev
Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
Open http://localhost:3000 in your browser to view the app.

API Endpoints
Event Endpoints
GET /api/v1/events: Get all events (with optional pagination).
POST /api/v1/events: Create a new event (organizers only).
GET /api/v1/events/:id: Get event details by ID.
PATCH /api/v1/events/:id: Update an event (organizers only).
DELETE /api/v1/events/:id: Delete an event (organizers only).
User Endpoints
POST /api/v1/users/signup: Sign up a new user.
POST /api/v1/users/login: Log in as a user.
GET /api/v1/users/me: Get current user profile (authentication required).
Registration Endpoints
POST /api/v1/events/:id/register: Register for an event.
More detailed documentation for each endpoint can be found in the API Documentation file.

Folder Structure
plaintext
Copy code
cause-connect/
├── backend/
│   ├── controllers/          # Route handler functions
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions and middlewares
│   ├── app.js                # Main backend application
│   └── server.js             # Server entry point
|
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components (Carousel, Event Card, etc.)
│   │   ├── pages/            # App pages (Home, About, Event Details, etc.)
│   │   ├── hooks/            # Custom hooks
│   │   ├── App.tsx           # Main React component
│   │   └── index.tsx         # React DOM rendering
│   └── public/
│       └── index.html        # Main HTML file
|
└── README.md
Future Improvements
In-app virtual assistant: to suggest event ideas and autofill forms
In-app Messaging: Enable direct communication between volunteers and organizers.
Notifications: Send reminders and updates for upcoming events.
License
This project is licensed under the MIT License. See the LICENSE file for details.

