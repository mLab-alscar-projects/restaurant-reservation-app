import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Reviews = ({ reviews, setReviews, restaurantData }) => {
  const closeModal = () => setReviews(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Added error state
  const [reviewsData, setReviewsData] = useState([]);

  const Data = restaurantData;

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      if (!Data?._id) {
        throw new Error('Restaurant ID is required');
      }

      const response = await axios.get(
        `https://lumpy-clover-production.up.railway.app/api/reviews/restaurant/${Data._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviewsData(response.data);
      console.log(response.data)
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch reviews';
      setError(errorMessage);
      console.error('Error fetching reviews:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewHeading}>{item.heading}</Text>
      <Text style={styles.reviewRating}>Rating: {item.rating}/5</Text>
      <Text style={styles.reviewText}>{item.message}</Text>
      <Text style={styles.reviewDate}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <Modal
      visible={reviews}
      transparent={true}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Reviews</Text>
          
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : !reviewsData?.reviews?.length ? (
            <Text style={styles.noReviewsText}>No reviews yet</Text>
          ) : (
            <FlatList
              data={reviewsData.reviews}
              renderItem={renderReviewItem}
              keyExtractor={(item) => item._id}
              style={styles.reviewsList}
            />
          )}

          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  reviewsList: {
    maxHeight: '80%',
  },
  reviewItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reviewAuthor: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewRating: {
    color: '#666',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  noReviewsText: {
    textAlign: 'center',
    margin: 10,
    color: '#666',
  },
  reviewHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: '#888',
  },
  reviewItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});

export default Reviews;