import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const FoodReviewForm = ({ isReviewFormVisible, setIsReviewFormVisible }) => {
  const [heading, setHeading] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [starScale] = useState(new Animated.Value(1));
  const [slideAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isReviewFormVisible) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isReviewFormVisible]);

  const animateStar = () => {
    Animated.sequence([
      Animated.timing(starScale, {
        toValue: 1.2,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(starScale, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
    animateStar();
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const userId = await AsyncStorage.getItem("userID");
      const restaurantId = await AsyncStorage.getItem("restaurantId");
  
      console.log(`Token: ${token}`);
      console.log(`UserId: ${userId}`);
      console.log(`RestaurantId: ${restaurantId}`);
  
      // Validate required data
      if (!token || !userId || !restaurantId) {
        throw new Error("Missing token, userId, or restaurantId");
      }
  
      // Prepare the review object
      const reviewData = {
        heading,
        rating,
        message,
        userId, // Retrieved from AsyncStorage
        restaurantId, // Retrieved from AsyncStorage
      };
  
      // Send the POST request with the review data
      const response = await axios.post(
        "https://lumpy-clover-production.up.railway.app/api/reviews", 
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Review Submitted Successfully:", response.data);
  
      // Reset the form
      setHeading('');
      setRating(0);
      setMessage('');
      setIsReviewFormVisible(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  

  const handleClose = () => {
    setIsReviewFormVisible(false);
  };

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').height, 0],
  });

  return (
    <Modal
      visible={isReviewFormVisible}
      transparent={true}
      onRequestClose={handleClose}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <Animated.View 
              style={[
                styles.modalContent,
                {
                  transform: [{ translateY }]
                }
              ]}
            >
              <View style={styles.modalHeader}>
                <MaterialIcons 
                  name="restaurant-menu" 
                  size={32} 
                  color="#FF6B6B" 
                />
                <TouchableOpacity 
                  style={styles.closeButton} 
                  onPress={handleClose}
                >
                  <MaterialIcons name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Share Your Dining Experience</Text>
              <Text style={styles.subtitle}>Let others know what you think!</Text>
              
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.headingInput}
                  placeholder="Give your review a title"
                  value={heading}
                  onChangeText={setHeading}
                  placeholderTextColor="#999"
                />

                <View style={styles.starsContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => handleStarPress(star)}
                    >
                      <Animated.View
                        style={{
                          transform: [
                            { scale: rating >= star ? starScale : 1 }
                          ]
                        }}
                      >
                        <MaterialIcons
                          name={rating >= star ? 'star' : 'star-border'}
                          size={36}
                          color={rating >= star ? '#FFD700' : '#DDD'}
                        />
                      </Animated.View>
                    </TouchableOpacity>
                  ))}
                </View>

                <TextInput
                  style={styles.messageInput}
                  placeholder="Tell us about the food, service, ambiance..."
                  value={message}
                  onChangeText={setMessage}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor="#999"
                />

                <TouchableOpacity 
                  style={styles.submitButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  formContainer: {
    gap: 20,
  },
  headingInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  messageInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodReviewForm;