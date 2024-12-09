import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const restaurants = [
    {
      id: '1',
      name: 'Bella Cucina',
      rating: 4.5,
      distance: 2.3,
      cuisines: ['Italian', 'Mediterranean'],
      timeSlots: '10:00 AM - 9:00 PM',
      coverImage: require('../assets/Burger.jpg'),
      accentColor: '#4A90E2'
    },
    {
      id: '2',
      name: 'Sushi Sensation',
      rating: 4.8,
      distance: 1.5,
      cuisines: ['Japanese', 'Sushi'],
      timeSlots: '11:30 AM - 10:00 PM',
      coverImage: require('../assets/Burger.jpg'),
      accentColor: '#2ECC71'
    },
    {
      id: '3',
      name: 'Spice Route',
      rating: 4.6,
      distance: 3.2,
      cuisines: ['Indian', 'Fusion'],
      timeSlots: '12:00 PM - 11:00 PM',
      coverImage: require('../assets/Burger.jpg'),
      accentColor: '#FF6B6B'
    }
  ];

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={styles.starContainer}>
        {[...Array(fullStars)].map((_, i) => (
          <Ionicons key={`full-${i}`} name="star" size={16} color="#FFD700" />
        ))}
        {halfStar && <Ionicons name="star-half" size={16} color="#FFD700" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Ionicons key={`empty-${i}`} name="star-outline" size={16} color="#FFD700" />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} />
      <StatusBar style="dark" />
      
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Discover Restaurants</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={32} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons 
            name="search" 
            size={20} 
            color="#888" 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Find your perfect dining spot"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {restaurants.map((restaurant) => (
          <TouchableOpacity 
            key={restaurant.id} 
            style={[
              styles.restaurantCard, 
              { borderLeftColor: restaurant.accentColor }
            ]}
          >
            <Image 
              source={require('../assets/Burger.jpg')}
              style={styles.restaurantImage} 
            />
            <View style={styles.restaurantDetails}>
              <View style={styles.restaurantHeader}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                {renderStarRating(restaurant.rating)}
              </View>
              
              <View style={styles.restaurantMetaContainer}>
                <View style={styles.metaItem}>
                  <MaterialCommunityIcons 
                    name="map-marker-distance" 
                    size={16} 
                    color="#666" 
                  />
                  <Text style={styles.metaText}>{restaurant.distance} km</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons 
                    name="time-outline" 
                    size={16} 
                    color="#666" 
                  />
                  <Text style={styles.metaText}>{restaurant.timeSlots}</Text>
                </View>
              </View>
              
              <Text style={styles.cuisineText}>
                {restaurant.cuisines.join(' • ')}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#F7F7F7',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  profileButton: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  restaurantCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
  },
  restaurantImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  restaurantDetails: {
    padding: 15,
  },
  restaurantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    flex: 1,
  },
  starContainer: {
    flexDirection: 'row',
  },
  restaurantMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  cuisineText: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomePage;