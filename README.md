# 🍽️ Restaurant Reservation Platform (Alscar Tables)
A comprehensive platform for managing restaurant reservations with user-facing features and an administrative dashboard.

## 📋 Overview
The Restaurant Reservation Platform is a full-stack application that connects diners with restaurants, enabling seamless reservation management and restaurant administration. The platform features a user-friendly interface for customers to make reservations and a powerful dashboard for restaurant managers.

> ⚠️ Note: This project runs on Expo 52.2 and might not be compatible with older versions of Expo on iOS and Android devices.

## 👥 Contributors
- Nhlakanipho Radebe
- Oscar Poco

## 🏗️ Technical Architecture (Tech Stack)

### 🎨 Frontend
- Expo React Native for the user interface (Expo 52.2) 

### ⚙️ Backend
- Axios - Connects backend endpoints to frontend
- Node.js - Runtime environment to handle API requests
- Express - Provides HTTP requests 
- Cors - Authorized resource sharing with external third parties
- Validator - Validates information from backend
- React Native dotenv - Protects sensitive data 
- Bcrypt - Hashes sensitive data

### 🗄️ Database
- MongoDB

## ✨ Features

### 🎯 User Interface
The app includes the following features:

### 🔐 Authentication and Authorization
- User authentication and authorization for admin dashboard security
- Role-based access control for feature restriction

### 🔍 Search Functionality
- Location-based restaurant search

### 📝 Restaurant Details
- Name
- Location
- Cuisine
- Available reservation slots

### 📅 Reservation Features
- Restaurant and date/time selection
- Calendar view for available slots
- Reservation management (edit/cancel)

### ⭐ Feedback and Reviews
- User feedback and review system
- Restaurant ratings display

### 💳 Payment Integration
- Secure payment gateway
- Regulatory compliance for payments

## 🚀 Setup and Installation

1. Clone the Repository
```bash
git clone https://github.com/mLab-alscar-projects/restaurant-reservation-app.git
```

2. Install Dependencies
```bash
npm install
```

3. Start the App
```bash
npx expo start
```

4. Scan the QR code in your terminal to build the app for your operating system

## 📁 Project Structure

### Frontend Structure
```
/app
├── _layout.js          # Main layout file
├── checkoutPage.js     # Payment Summary
├── homePage.js         # HomePage
├── index.js           # Main Page (rendered page)
├── loginPage.js       # Login Page
├── mapPage.js         # Google Map
├── paymentPage.js     # Payment Page
├── profilePage.js     # Profile Page
├── registerPage.js    # Register Page
├── reservationPage.js # Reservation Page
└── resetPage.js       # Password Reset page

/assets
└── assets            # Pictures

/Components
├── formmodal.js      # Form Modal (Popup)
├── policiesmodal.js  # Policies Modal (Popup)
├── profilemodal.js   # Profile Modal (Popup)
├── reviewForm.js     # Review Modal Form (Popup)
├── reviewsModal.js   # Reviews Modal (Popup)
├── splash.js         # Splash Modal (Popup)
├── SplashScreen.js   # Splash Modal (Popup)
└── toggles.js        # Toggles (date/time/people count)

/StyleSheet
└── styles.js         # All styling

├── App.js            # Main app entry file
├── AppContext.js     # App state management
└── app.json
```

### Backend Structure
```
/Backend
├── controllers.js
├── Middleware/
├── Models/
├── node_modules/
├── routes/
├── utils/
├── database.js
├── package.json
└── server.js
```

## 🎨 Design and Planning
View our project planning and UI design on [Figma](https://www.figma.com/design/0aCptNX42sHpO0gMLrJA2N/Untitled?node-id=0-1&p=f&t=f56gpA7pfeEcg55D-0)



Documentation: Please follow the link for the apps documentation: https://docs.google.com/document/d/1jj8k0lam6liPqKIZdEp5yd-Oc3-ZGfRc5oJtkAxrWnM/edit?usp=sharing

## 🤝 How to Contribute
If you wish to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

   
  
