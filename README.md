# 🌍 Thrill_Wanderer
**Thrill_Wanderer** is a full-stack travel booking web application that allows users to explore and book various travel packages. It features a **React-based frontend** for users and a **PHP-based admin panel** with REST APIs for managing packages, bookings, and users. The platform uses a **MySQL database** and runs locally via **XAMPP**.
---
## 📂 Project Structure
├── Backend/ # Admin panel + all PHP APIs
├── public/ # Public assets for React
├── src/ # React source code (components, pages, logic)
├── minor_project.sql # SQL dump for MySQL database setup
├── package.json # React project configuration
├── package-lock.json # NPM package lock file
├── .gitignore # Files to ignore in Git
├── README.md # Project documentation (this file)
---
## 🚀 Features
- 🧳 Browse and book exciting travel packages
- 📅 View trip details, pricing, and availability
- 👤 User-friendly frontend interface built with React
- 🔐 Admin panel for managing packages, users, and bookings (PHP)
- 🔄 API integration between frontend and backend using core PHP
- 💾 MySQL-based relational data storage
---
## 🧰 Tech Stack
| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React (JavaScript)     |
| Backend     | PHP (Core PHP APIs)    |
| Admin Panel | PHP (within `Backend/`)|
| Database    | MySQL                  |
| Server      | Apache (via XAMPP)     |
---
## ⚙️ Local Setup Guide
### 1️⃣ Clone the Repository
git clone https://github.com/your-username/thrill_wanderer.git
2️⃣ Backend Setup (PHP + MySQL)
Move the Backend folder to C:/xampp/htdocs/Backend
Open XAMPP Control Panel and start Apache and MySQL
Go to http://localhost/phpmyadmin
Import the minor_project.sql file to create the database
cd thrill_wanderer
npm install
npm start
React app will run at http://localhost:3000
Ensure your API URLs in the React frontend point to:
http://localhost/Backend/api/your-api.php
 Database
The SQL dump minor_project.sql contains all required tables and dummy data.
Import it in phpMyAdmin to get started instantly.

✈️ Future Enhancements
Online payment integration (e.g., Razorpay, Stripe)
Real-time booking availability
User login & booking history
Reviews and ratings for packages

📌 Maintained by: Mitanshi21
---

Let me know if you want this converted to Gujarati, Hindi, or want to add deployment instructions for live hosting.


