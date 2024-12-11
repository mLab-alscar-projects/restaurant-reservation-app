import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions,Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';



const PaymentSummaryPage = () => {
  // Hooks
  const router = useRouter();
  const {selectedValue} = useLocalSearchParams ();
  {console.log("value",selectedValue)}

  // Sample data - in a real app, this would come from props or state
  const paymentDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    dateOfPayment: "2024-12-09",
    time: "19:30",
    numberOfTables: selectedValue,
    restaurantName: "Sunset Bistro",
    amount:selectedValue * 200
  };

  const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.labelLeft}>{label}:</Text>
      <Text style={styles.valueRight}>{value}</Text>
    </View>
  );


  // Beginning of rendered Components
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
        <DetailRow label="Email" value={paymentDetails.email} />
        <DetailRow label="Date of Payment" value={paymentDetails.dateOfPayment} />
        <DetailRow label="Time" value={paymentDetails.time} />
        <DetailRow label="Number of Tables" value={paymentDetails.numberOfTables} />
        <DetailRow label="Restaurant Name" value={paymentDetails.restaurantName} />
        <DetailRow label="Total Amount" value={paymentDetails.amount} />
      </View>
      
      {/* Checkout button */}
      <View style={styles.addButtonWrapper}>
        <Pressable style={styles.addButton} onPress={()=>  router.push("/paymentPage")}>
          <Text style={styles.addButtonText}>Pay</Text>
        </Pressable>
      </View>
    </ScrollView>
       
  );
};
// End of Rendered Components



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