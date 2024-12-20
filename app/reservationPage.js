import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Pressable, 
  Image, 
  Dimensions, 
  ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';
import { useLocalSearchParams  } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// ICONS
import ReservationPicker from '../Components/toggles.js';



// SCREEN DIMENSIONS
const { width } = Dimensions.get('window');

const ReservationPage = () => {

// States
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [selectedPeople, setSelectedPeople] = useState(2);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { restaurant } = useLocalSearchParams ();
  const restaurantData = restaurant ? JSON.parse(restaurant) : null;
  

  // FETCH MENU
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
  
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log("Token:", token);
  
        const response = await axios.get(
          `https://acrid-street-production.up.railway.app/api/v2/restaurants/${restaurantData._id}/menu`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("restaurantId",restaurantData._id)
        await AsyncStorage.setItem('restaurantId', restaurantData._id)
        
        setMenuData(response.data.menuItems);
      } catch (error) {
        console.error("ERROR FETCHING MENU:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (restaurantData) {
      fetchMenu();
    }
  }, []);


  // Function to navigate
  const handleCheckout= ()=>{
      router.push({
        pathname: "./checkoutPage",
        params:{selectedPeople,selectedDateTime, name: restaurantData.name, location: restaurantData.location, timeslot: restaurantData.timeslot}
      })
  }
  
 
  // RENDER LOADING INDICATOR
  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: '#f4f7fa' }]}>
        <ActivityIndicator 
          size="large" 
          color={restaurantData.color || '#000'}
        />
      </View>
    );
  }
  
// Beginning of rendered Components
  return (  
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={[styles.header, {backgroundColor: restaurantData.color}]}>
        <Text style={styles.headerTitle}>{restaurantData.name}</Text>
      </View>


      {/* DATE TIME PEOPLE COMPONENT FROM UTILS WITH PROPS PASSED*/}
      <View style={styles.dateTimeContainer}>
      <ReservationPicker
        selectedDateTime={selectedDateTime}
        setSelectedDateTime={setSelectedDateTime}
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
        accentColor={restaurantData.color} 
      />
      </View>




      {/* MENU LIST */}
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View style={styles.imageCover}>
              <Image source={{uri: item.image}} style={styles.menuImage} />
            </View>
            <View style={styles.menuDetails}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
              <Text style={[styles.menuPrice, {color: item.isActive ? '#2ecc71' : '#e74b4b'}]}>{item.isActive ? 'Avilable' : 'Out of stock'}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.menuList}
      />


      {/* ADD MORE MENU BUTTON */}
      <View style={styles.addButtonWrapper}>
        <Pressable style={[styles.addButton, {backgroundColor: restaurantData.color}]} onPress={handleCheckout}>
          <Text style={styles.addButtonText}>Reserve</Text>
        </Pressable>
      </View>
    </View>
  );
};
// END



// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fa',
  },

  loadingContainer: 
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // HEADER STYLES
  header: {
    backgroundColor: '#2ecc71',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  // MENU LIST STYLES
  menuList: {
    padding: 20,
  },

  menuCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },

  imageCover: {
    width: 150,
    height: 100,
  },
  
  menuImage: {
    width: '100%',
    height: '100%',
  },

  menuDetails: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },

  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  menuPrice: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },

  actionButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    gap: 5,
  },

  editButton: 
  {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteButton: 
  {
    backgroundColor: '#e74c3c',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ADD BUTTON STYLES
  addButtonWrapper: 
  {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  addButton: 
  {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    gap: 5,
    width: '100%',
  },

  addButtonText: 
  {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  dateTimeContainer:
  {
    paddingBottom: 10
  }
});

export default ReservationPage;