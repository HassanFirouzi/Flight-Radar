# ✈️ Flight Radar

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet)
![React Leaflet](https://img.shields.io/badge/React_Leaflet-199900?logo=leaflet)
![Lucide React](https://img.shields.io/badge/Lucide_React-F56565)
![React Paginate](https://img.shields.io/badge/React_Paginate-0088CC)

---

**Flight Radar** is a modern Flight Radar application built with **React** that allows users to monitor live aircraft around the world. Users can browse active flights in a paginated list, inspect detailed flight information, and visualize flight routes on an interactive map.

The application displays aircraft positions in real time along with departure and arrival airports, making it easy to track where each flight is coming from and where it is headed.

---

## ✨ Features

- 🌍 Display live flights on an interactive map
- ✈️ View detailed information for each aircraft
- 📍 Show departure and arrival airport locations
- 🛫 Visualize the flight route between airports
- 📋 Browse all active flights in a paginated table
- ⚡ Global state management with Redux Toolkit
- 🔄 Seamless navigation using React Router
- 📡 Fetch live flight data from Flight Radar API
- 🎨 Modern and responsive UI built with Tailwind CSS
- 🧩 Reusable component architecture

---

## 🛠️ Technologies Used

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Redux Toolkit
- React Redux
- Axios
- Leaflet
- React Leaflet
- Lucide React
- React Paginate

---

## 📁 Project Structure

```text
src
│
├── components
│   ├── header
│   ├── loader
│   ├── error
│   └── modal
│
├── pages
│   ├── map
│   └── list
│
├── redux
│   ├── actions
│   ├── slices
│   └── store.js
│
├── utils
│
├── App.jsx
└── index.css
```

---

### 🗺️ Map View

- Live aircraft positions
- Flight route visualization
- Departure & arrival airport markers
- Detailed flight information panel

### 📋 Flight List

- Paginated flight table
- Aircraft speed
- Altitude
- Heading
- Latitude & longitude
- Quick access to flight details

---

## 🔌 API

Flight data is provided by the **Flight Radar API** available on RapidAPI.

https://rapidapi.com/apidojo/api/flight-radar1

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your RapidAPI key:

```env
VITE_RAPID_API_KEY=YOUR_API_KEY
```

---

## 💡 What You Can Do

- Explore live flights around the world
- Switch between **Map** and **List** views
- Track an aircraft's departure and destination
- Display the complete route on the map
- View aircraft specifications and flight status
- Check scheduled, estimated, and actual flight times

---

## Preview

![Screen Gif](FlightRadar.gif)
