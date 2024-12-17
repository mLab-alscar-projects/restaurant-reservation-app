import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Pressable
} from "react-native";
// import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import GoogleMap from "./mapPage";

const HomePage = () => {
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [RestaurantsData, setRestaurantsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState('');
  const [likedRestaurants, setLikedRestaurants] = useState([]);
  
  // Hooks
  const router = useRouter();

 
  // Functions

  const toggleLike = (restaurantId) => {
    setLikedRestaurants(prevLiked => 
      prevLiked.includes(restaurantId)
        ? prevLiked.filter(id => id !== restaurantId)
        : [...prevLiked, restaurantId]
    );
  };

  const handleShare = (restaurant) => {
    console.log(`Sharing ${restaurant.name}`);
  };

  
    const renderStarRating = (rating) => {
      return (
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <MaterialCommunityIcons
              key={star}
              name={star <= rating ? 'star' : 'star-outline'}
              size={16}
              color={star <= rating ? '#FFD700' : '#CCCCCC'}
            />
          ))}
        </View>
      );
    };

  // Search function
  const handleSearch = (query) => {
    setSearchQuery(query)
  };
  

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get(
        "https://acrid-street-production.up.railway.app/api/v2/fetchRestaurants",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRestaurantsData(response.data.restaurants || []);
   
      //  filtered Coordinates
      const filteredCordinates = response.data.restaurants.map(
        (restaurant) => restaurant.coordinates
      );

      setCoordinates(filteredCordinates);

      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "Failed to fetch restaurants");
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message || "Failed to load restaurants",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // logs for debugging

  // filtering data restaurants based on the name of the restaurant
  const filteredRestaurants = RestaurantsData.filter((restaurant)=>
  restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  
  // Render loading state
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render error state
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load restaurants</Text>
        <TouchableOpacity onPress={fetchRestaurants} style={styles.retryButton}>
          <Text>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} />
      <StatusBar style="dark" />
      <Toast />

      <View style={styles.headerContainer}></View>

      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Discover Restaurants</Text>

          {/* Pressable user profile button */}
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push("/profilePage")}
          >
            <Ionicons name="person-circle-outline" size={32} color="#333" />
          </TouchableOpacity> 
        </View>

        {/* Search bar and map button */}
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
            onChangeText={handleSearch}
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.mapButton}
            onPress={() =>
              router.push({
                pathname: "/mapPage",
                params:{
                  data: JSON.stringify(RestaurantsData,null,2)
                }
              })
            }
          >
            <Ionicons name="map-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>


     {/* Restaurents Container */}
     <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant, index) => (
          <Pressable
            key={index}
            style={[
              styles.restaurantCard,
              { borderLeftColor: restaurant.color },
            ]}
            onPress={() =>
              router.push({
                pathname: "/reservationPage",
                params: { restaurant: JSON.stringify(restaurant) },
              })
            }
          >
            <Image
              source={{uri: restaurant.image}}
              style={styles.restaurantImage}
              contentFit="cover"
            />
            <View style={styles.restaurantDetails}>
              <View style={styles.restaurantHeader}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.actionButtonsContainer}>
                  <TouchableOpacity 
                    style={styles.shareButton}
                    onPress={() => handleShare(restaurant)}
                  >
                    <Ionicons 
                      name="share-social-outline" 
                      size={20} 
                      color="#666" 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.likeButton}
                    onPress={() => toggleLike(restaurant._id)}
                  >
                    <Ionicons 
                      name={likedRestaurants.includes(restaurant._id) ? "heart" : "heart-outline"} 
                      size={20} 
                      color={likedRestaurants.includes(restaurant._id) ? "red" : "#666"} 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {renderStarRating(restaurant.rating || 5)}

              <View style={styles.restaurantMetaContainer}>
                <View style={styles.metaItem}>
                  <MaterialCommunityIcons
                    name="map-marker-distance"
                    size={16}
                    color="#666"
                  />
                  <Text style={styles.metaText}>{restaurant.location}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.metaText}>{restaurant.timeslot}</Text>
                </View>
              </View>

              <View style={styles.additionalMetaContainer}>
                <Text style={styles.metaText}>
                  Tables: {restaurant.tables}
                </Text>
                <Text style={styles.cuisineText}>{restaurant.cuisine}</Text>
              </View>
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.noRestaurantsContainer}>
          <Text style={styles.noRestaurantsText}>No restaurants found</Text>
        </View>
      )}
    </ScrollView>
    </View>
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#F7F7F7",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  profileButton: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: "#000",
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
    color: "#333",
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  restaurantCard: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    width: '100%'
  },
  restaurantImage: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  restaurantDetails: {
    padding: 15,
  },
  restaurantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    flex: 1,
  },
  starContainer: {
    flexDirection: "row",
  },
  restaurantMetaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#666",
  },
  cuisineText: {
    fontSize: 14,
    color: "#888",
  },
  mapButton: {
    marginLeft: 10,
    padding: 5,
  },
  // Add these new styles
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  additionalMetaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  noRestaurantsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noRestaurantsText: {
    fontSize: 18,
    color: "#666",
  },

  restaurantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    marginRight: 10,
    padding: 5,
  },
  likeButton: {
    padding: 5,
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
// End 

export default HomePage;
