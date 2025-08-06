🎬 Full Stack Movie Ticket Booking Website (MERN Stack)
A full-featured Movie Ticket Booking Platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project includes user authentication with Clerk, background job handling with Inngest, seat reservation logic, and a powerful admin dashboard for movie and booking management.

✨ Features
User Features
Signup & Login: Multiple authentication options using Clerk (Email, Social logins, Multi-session support).

Movie Exploration: Browse and search for available movies.

Seat Selection: Choose preferred seats for a movie.

Booking Management: Book tickets and view booking details.

Payment Handling: Seats are reserved for 10 minutes if payment fails/cancels; automatically released afterward.

Email Notifications: Get notified on:

New movie additions

Booking confirmation

Movie reminders before showtime

Admin Features
Add new movies with details (title, description, showtime, poster, etc.).

Manage existing movies and bookings.

View and monitor user bookings in real-time.

🛠 Tech Stack
Frontend
React.js (with Hooks & Context API)

TailwindCSS for UI Styling

Backend
Node.js

Express.js

MongoDB (Mongoose ORM)

Authentication
Clerk for seamless authentication (multi-session support)

Background Jobs
Inngest for scheduling and sending emails (new movies, booking confirmations, reminders)

Other Tools
JWT (for backend token validation if required)

Axios (for API calls)

Vercel/Netlify (Frontend Deployment)

Render/Heroku (Backend Deployment)

MongoDB Atlas (Database Hosting)

📂 Project Structure
bash
Copy
Edit
```
movie-ticket-booking/
│
├── client/             # React Frontend
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── pages/      # React Pages
│   │   ├── hooks/      # Custom Hooks
│   │   └── App.js
│
├── server/             # Node/Express Backend
│   ├── models/         # Mongoose Models
│   ├── routes/         # API Routes
│   ├── controllers/    # Business Logic
│   └── server.js
│
└── README.md
```
⚙️ Installation & Setup
Prerequisites
Node.js (v18+ recommended)

MongoDB Atlas account

Clerk project (API keys)

Inngest account (for email jobs)

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/movie-ticket-booking.git
cd movie-ticket-booking
2. Setup Environment Variables
Create .env files for both client and server:

Server (server/.env)
ini
Copy
Edit
PORT=5000
MONGO_URI=<Your MongoDB URI>
CLERK_SECRET_KEY=<Your Clerk Secret Key>
FRONTEND_URL=http://localhost:3000
Client (client/.env)
ini
Copy
Edit
REACT_APP_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
REACT_APP_API_URL=http://localhost:5000
3. Install Dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
4. Run the Application
Backend
bash
Copy
Edit
cd server
npm run dev
Frontend
bash
Copy
Edit
cd client
npm start
🚀 Deployment
Frontend: Deploy on Vercel or Netlify

Backend: Deploy on Render or Heroku

Database: Host on MongoDB Atlas

🖼️ Screenshots (Optional)
(Add screenshots of the homepage, booking flow, and admin dashboard here)

🧑‍💻 Author
Sonu Kumar Sah
Frontend & Full Stack Developer


📜 License
This project is licensed under the MIT License – feel free to use and modify as needed.
