# 🌍 Wanderlust — Full Stack Travel Listing Platform

Wanderlust is a full-stack MERN web application, where users can explore, create, and manage listings for villas, resorts, and restaurants.

The platform provides a seamless experience to discover travel destinations with pricing, location, maps, and user-generated content.

---

## 🌐 Live Demo

👉 https://wanderlust-6a3g.onrender.com/listings

Explore multiple listings with pricing, GST calculation, and location-based browsing.

---

## 💻 Repository

👉 https://github.com/mdqamaraziz/Wanderlust

---

## 📌 Project Overview

Wanderlust simulates a real-world travel marketplace where users can:

- Browse listings across different categories (villas, resorts, restaurants)
- View price breakdown including GST
- Explore locations using maps
- Upload and manage their own listings
- Add and manage reviews

The application follows **MVC architecture** and supports full CRUD operations.

---

## 🛠 Tech Stack

**Frontend**

- React.js / EJS
- Bootstrap / CSS

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB (Mongoose)

**Other Tools**

- Map Integration (Mapbox / Google Maps)
- Cloudinary (Image Uploads)
- MVC Architecture

---

## ✨ Features

- [x] **User Authentication**
  - Signup, Login, Logout functionality

- [x] **Create Listings**
  - Add villas, resorts, restaurants
  - Include:
    - Title / Name
    - Description
    - Price
    - Location
    - Image upload

- [x] **GST Calculation**
  - Displays total price with 18% GST ([project-0tng.onrender.com][1])

- [x] **View Listings**
  - Browse multiple properties with details and pricing

- [x] **Map Integration**
  - View listing locations visually

- [x] **Reviews System**
  - Add reviews
  - Delete reviews

- [x] **Authorization System**
  - Only listing owner can delete/edit listing
  - Only review author can delete review

- [x] **Full CRUD Operations**
  - Listings & reviews management

- [x] **MVC Architecture**
  - Structured backend with models, views, controllers

---

## 🔐 Authentication & Authorization

- Secure user login/signup
- Protected routes for sensitive actions
- Ownership-based access control:
  - Users can only modify their own listings
  - Users can only delete their own reviews

---

## 🗺️ Listings & Pricing

- Listings include:
  - Name
  - Location
  - Price per night
  - GST-inclusive pricing

- Example listings include destinations like Bali, Manali, Paris, and more ([project-0tng.onrender.com][1])

---

## ⚙️ Local Setup

### 1. Clone repository

```bash
git clone https://github.com/mdqamaraziz/Wanderlust.git
cd Wanderlust
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_url
SESSION_SECRET=your_secret_key
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAP_API_KEY=your_map_key
```

---

### 4. Run project

```bash
npm start
```

---

## 📚 Key Learnings

- Building full-stack MERN applications
- Implementing MVC architecture
- Handling authentication & authorization
- Integrating maps and geolocation
- Managing file uploads using Cloudinary
- Designing real-world CRUD systems

---

## ⭐ Future Improvements

- Booking system (like Airbnb reservations)
- Ratings & advanced review system
- Search & filter functionality
- Payment integration
- Wishlist / favorites feature

---

## 👨‍💻 Author

**Md Qamar Aziz**

🔗 GitHub: https://github.com/mdqamaraziz
🔗 LinkedIn: https://www.linkedin.com/in/mdqamaraziz

---
