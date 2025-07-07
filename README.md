# 🛍️ ShopSavvy – Smart Price Tracker & Alert App

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-MERN-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> 📉 **Track product prices, get alerts on drops or restocks, and shop smarter with real-time monitoring.**

---

## 📌 Overview

**ShopSavvy** is a full-stack price tracking and notification app that allows users to monitor products from eCommerce websites. Users receive alerts via email when product prices drop or come back in stock. It uses Puppeteer to scrape live data and MongoDB to store it, providing real-time insights and alerts through a modern UI.

---
## 🌐 Live Demo

🛒 Explore the live version here:  
👉 [https://shopsavvy-frontend.netlify.app](https://shopsavvy-frontend.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/71df3341-cacf-470d-8699-4bfa620f99d4/deploy-status)](https://app.netlify.com/sites/shopsavvy-frontend/deploys)
---

## 🚀 Features

- 🔍 Track product prices from major eCommerce sites
- 📬 Get email alerts on price drops and stock updates
- 📈 View price history through dynamic charts
- 🧠 Smart scraper using Puppeteer + Cheerio
- 💾 MongoDB for data persistence
- ✨ Clean React UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Frontend        | Backend           | Database        | Tools & Libraries               |
|-----------------|-------------------|------------------|----------------------------------|
| React (Vite)    | Node.js + Express | MongoDB Atlas    | Puppeteer, Cheerio, Axios        |
| Tailwind CSS    | Nodemailer        | Mongoose         | Chart.js, BrightData, JWT        |

---

## 📸 Screenshots

### 🔹 Home Page  
![Home](./client/src/assets/screenshots/home.png)

### 🔹 Add Product Tracker  
![Track](./client/src/assets/screenshots/AddProduct.png)

### 🔹 Price History Chart  
![Chart](./client/src/assets/screenshots/addproduct1.png)

### 🔹 Explore Deals 
![Deals](./client/src/assets/screenshots/topdeal1.png)
### 🔹 Explore Deals 
![Deals](./client/src/assets/screenshots/topdeal2.png)

>

---

## 📁 Folder Structure

ShopSavvy/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
├── client/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
├── .env (ignored)
├── README.md
└── package.json



## 🧪 Environment Variables

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=mongodb+srv://Bommishetti:Meghana@cluster0.ec5afln.mongodb.net/shopsavvy?retryWrites=true&w=majority
EMAIL_USER=meghanabommishetti@gmail.com
JWT_SECRET=meghana123


🙋‍♀️ Author
Meghana Bommishetti
GitHub: @meghana5226
Email: bommishettimeghana@gmail.com
