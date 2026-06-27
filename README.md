# Movie Booking Backend

This is the backend API for the Movie Ticket Booking application. Built using Node.js, Express, and MongoDB.

## Features

- **Authentication**: JWT-based authentication (Register, Login, Profile)
- **Movies**: Browse and search movies
- **Theaters & Shows**: Manage theaters, filter by town, view showtimes
- **Bookings**: Book tickets and check seat availability

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database URI

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables. Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the server:
   ```bash
   npm start
   ```
