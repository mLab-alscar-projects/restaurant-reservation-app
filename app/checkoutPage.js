import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Pressable} from 'react-native';
import {  useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { UserContext } from '../AppContext';


const PaymentSummaryPage = () => {
  const { userDetails,userData } = useContext(UserContext);
  const router = useRouter();
  const {selectedPeople,selectedDateTime, name, location, timeslot} = useLocalSearchParams ();
  const [showPaystack, setShowPaystack] = useState(false);


 
  // PAYMENT DATA
  const paymentDetails = {
    name: userDetails.name, 
    email: userData,
    dateOfPayment: selectedDateTime,
    numberOfTables: selectedPeople,
    restaurantName: name,
    location: location,
    timeslot: timeslot,
    amount: selectedPeople * 100
  };

  // DETAILS ROW
  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.labelLeft}>{label}:</Text>
      <Text style={styles.valueRight}>{value}</Text>
    </View>
  );



  return (
    <ScrollView style={styles.container}>
      {/* Flower decorations */}
      <Image 
        source={require('../assets/Burger.jpg')} 
        style={[styles.flowerLeft, styles.flower]} 
      />
      <Image 
        source={require('../assets/Burger.jpg')} 
        style={[styles.flowerRight, styles.flower]} 
      />
       
       {/* Data from paymentDetails displayed as a row */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Payment Summary</Text>

        <DetailRow label="Name" value={paymentDetails.name} />
        <DetailRow label="Email" value={paymentDetails.email } />
        <DetailRow label="Date and Time" value={paymentDetails.dateOfPayment} />
        <DetailRow label="Number of People" value={paymentDetails.numberOfTables} />
        <DetailRow label="Restaurant Name" value={paymentDetails.restaurantName} />
        <DetailRow label="Working Hours" value={paymentDetails.timeslot} />
        <DetailRow label="Location" value={paymentDetails.location} />
        <DetailRow label="Total Amount" value={paymentDetails.amount} />
      </View>
      
      {/* Checkout button */}
      <View style={styles.addButtonWrapper}>
        <Pressable style={styles.addButton} onPress={()=>  
          {
            router.push({
              pathname: "./paymentPage",
              params:{setShowPaystack: setShowPaystack, showPaystack: showPaystack, amount : paymentDetails.amount, email : paymentDetails.email  }
            });
            setShowPaystack(true);
          }
          }>
          <Text style={styles.addButtonText}>Pay</Text>
        </Pressable>
      </View>
    </ScrollView>
       
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  },
  labelLeft: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    flex: 1,
  },
  valueRight: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'right',
    flex: 1,
  },
  flower: {
    position: 'absolute',
    width: 100,
    height: 100,
    opacity: 0.6,
  },
  flowerLeft: {
    top: 20,
    left: 20,
    transform: [{ rotate: '45deg' }],
  },
  flowerRight: {
    top: 20,
    right: 20,
    transform: [{ rotate: '-45deg' }],
  },
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
});

export default PaymentSummaryPage;