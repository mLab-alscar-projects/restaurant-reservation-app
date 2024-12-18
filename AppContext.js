// app/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ name: '', phoneNumber: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem('userToken');

      if (!token) {
        setError('Token not found. Please log in.');
        setLoading(false);
        return;
      }

      // Send GET request to fetch user details
      const response = await fetch('https://lumpy-clover-production.up.railway.app/api/get-profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to fetch user details');
        setLoading(false);
        return;
      }

      // Set user details in state
      setUserDetails({
        name: data.user.name,
        phoneNumber: data.user.phoneNumber,
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ userDetails, loading, error, fetchUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
