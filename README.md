# 🎬 Netflix Clone using React

A sleek **Netflix-inspired web app** built using **React**, developed during my React learning journey.  
It replicates the classic **Netflix homepage**, showcasing trending movies and shows using **The Movie Database (TMDb) API**.

> ⚠️ This is a **frontend-only** clone. Video playback is not available — the app fetches and displays movie posters and data using the API.

---

## 🚀 Tech Stack

- **Frontend:** React, JSX, CSS
- **API:** [TMDb (The Movie Database)](https://www.themoviedb.org/documentation/api)

---

## 📌 Features

- 🎥 Netflix-style layout and UI
- 🔄 Dynamic movie sections (Trending, Originals, Top Rated, etc.)
- 📡 Fetches data from TMDb API
- 🖼️ Loads movie posters and backdrops dynamically
- ⚙️ Reusable components with clean structure
- 💻 Fully responsive design

---

## 🔧 Configuration

This project uses the [TMDb API](https://www.themoviedb.org/documentation/api). Here's the configuration used:

```js
export const baseURL = "https://api.themoviedb.org/3";
export const API_KEY = "14162dbdbb83185cf9f3df077f604f6a";
export const imageUrl = "https://image.tmdb.org/t/p/original/";
