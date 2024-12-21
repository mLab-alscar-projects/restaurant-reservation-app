# Restaurant Reservation Platform: (Alscar Tables)
A comprehensive platform for managing restaurant reservations with user-facing features and an administrative dashboard.

# Overview
The Restaurant Reservation Platform is a full-stack application that connects diners with restaurants, enabling seamless reservation management and restaurant administration. The platform features a user-friendly interface for customers to make reservations and a powerful dashboard for restaurant managers.
This app consist of User side, with integrated frontend and backend. Please note that the project is running on (Expo 52.2) it might not run on older versions of expo compatible
in both ios and android devices

# Contributers
- Nhlakanipho Radebe
- Oscar Poco

# Technical Architecture (Tech Stack)

## Frontend
- Expo React Native for the user interface (Expo 52.2) 

## BackEnd
- Axios   # Connects backend endpoints to front end
- Node.js  # Run time environment to handle api requests
- Express  # Provides http requests 
- Cors # uthorized resource sharing with external third parties
- validator # Validates information from backend
- react native dontenv # protects sensitive data 
- bcrypt # hashes sensitive data

## Database
- Mongo # Database.


# Features
## User Interface
- Designed a user-friendly interface for both the reservation platform and the admin dashboard,The app includes the following features:

- Authentication and Authorization:
  - Implement user authentication and authorization to secure the admin dashboard.
  - Provide role-based access control to restrict access to specific features based on user roles.

- Include search functionality for users to find restaurants based on:
   - Location

- Display restaurant details such as:
   - Name
   - Location
   - Cuisine
   - Available reservation slots

- Reservation Features:
  - Allow users to select a restaurant and choose a date and time for their reservation.
  - Provide a calendar view to display available reservation slots.
  - Enable users to view and manage their reservations, including editing or cancelling them.

- Feedback and Reviews
  - Allow users to leave feedback and reviews for restaurants.
  - Display restaurant ratings and reviews to help users make informed decisions.

- Payment Integration:
   - Integrate a secure payment gateway for online reservations.
   - Ensure compliance with relevant regulations for payment security.



# Setup and Installations
1. Clone the Repository
    ``` bash

    git clone: https://github.com/mLab-alscar-projects/restaurant-reservation-app.git

2. Install neccessay dependencies
    ``` bash

    npm install
    
3. Start app
    ``` bash

    npx expo start

3. Scan the provided QR Code in your Terminal, this will enable built the app based on the provided operating system.


# App Layout 



### Project Structure
#### Front End Project Structure

     ``` bash
      /app
      ├── _layout.js       # Main layout file
      ├── checkoutPage.js    # Payment Summary
      └── homePage.js     # HomePage
      └── index.js    # Main Page (rendered page)
      └── loginPage.js     # Login Page
      └── mapPage.js     # google Map
      └── paymentPage.js     # Payment Page
      └── profilePage.js     # Profile Page
      └── registerPage.js     # register Page
      └── reservationPage.js     # reservation Page
      └── resetPage.js     # Password Reset page
      /assets
      ├── assests      # Pictures
  
      /Components
      ├── Components      # All Pop up Modals
      └── formmodal.js    # formModal (Popup)
      └── policiesmodal.js    # policiesModal (Popup)
      └── profilemodal.js    # profileModal (Popup)
      └── reviewForm.js    # reviewModalForm (Popup)
      └── reviewsModal.js    # reviewsModal (Popup)
      └── splash.js    # splashModal (Popup)
      └── SplashScreen.js    # splashModal (Popup)
      └── toggles.js    # toggles (date/time/people count) (Popup)
  
      ├── StylesSheet      # all styling limited to screens
      └── styles.js    
  
      ├── App.js  # Main app entry file
      └── AppContext.js    # Handles app states limited to screens
      └── app.json  
      └── packages.json   # installed packages

## BackEnd Project file structure
    
     ``` bash
      /BackEnd
      ├── controllers.js
      ├── Middleware
      └── Models
      └── node_modules
      └── routes
      └── utils
      └── database.js
      └── packages.json
      └── server.js


# Design and Planning
- To see the projects planning and User Interface design please feel free to visit the provided link below: 
  https://www.figma.com/design/0aCptNX42sHpO0gMLrJA2N/Untitled?node-id=0-1&p=f&t=f56gpA7pfeEcg55D-0

# How to Contribute

- If you wish to contribute to this project, please follow these steps:

- Fork the repository.

- Create a new branch (feature/your-feature-name).

- Commit your changes.

- Push to the branch.

- Open a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.




   
  
