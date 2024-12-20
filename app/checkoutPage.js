import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { UserContext } from "../AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import FoodReviewForm from "../Components/reviewForm";

const PaymentSummaryPage = () => {
  const { userDetails, userData } = useContext(UserContext);
  const router = useRouter();
  const { selectedPeople, selectedDateTime, name, location, timeslot } = useLocalSearchParams();
  const [showPaystack, setShowPaystack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 



  const submitPaymentDetails = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");
      const userId = await AsyncStorage.getItem("userID"); 
      const restaurantId = await AsyncStorage.getItem("restaurantId"); // Fetch restaurantId from AsyncStorage

      console.log(`Token: ${token}`);
      console.log(`UserId: ${userId}`);
      console.log(`RestaurantId: ${restaurantId}`);

      if (!token || !userId || !restaurantId) {
        throw new Error("Missing token, userId, or restaurantId");
      }

      const paymentDetails = {
        userId: userId, 
        restaurantId: restaurantId, 
        name: userDetails.name,
        email: userData,
        dateOfPayment: selectedDateTime,
        numberOfTables: selectedPeople,
        restaurantName: name,
        location: location,
        timeslot: timeslot,
        amount: selectedPeople * 600,
      };

      const response = await axios.post(
        "https://lumpy-clover-production.up.railway.app/api/reservations", // Replace with your actual endpoint
        paymentDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Payment submitted successfully:", response.data);

      // Handle success (optional)
      // Toast.show({
      //   type: "success",
      //   text1: "Success",
      //   text2: "Payment details submitted successfully",
      // });

      setError(null); // Reset error state
    } catch (error) {
      console.error("Error submitting payment:", error);
      setError(error.message || "Failed to submit payment details");
      // Toast.show({
      //   type: "error",
      //   text1: "Error",
      //   text2: error.message || "Failed to submit payment details",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  // PAYMENT DATA
  const paymentDetails = {
    userId: "",
    restaurantId: "",
    name: userDetails.name,
    email: userData,
    dateOfPayment: selectedDateTime,
    numberOfTables: selectedPeople,
    restaurantName: name,
    location: location,
    timeslot: timeslot,
    amount: selectedPeople * 100,
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
        source={require("../assets/Burger.jpg")}
        style={[styles.flowerLeft, styles.flower]}
      />
      <Image
        source={require("../assets/Burger.jpg")}
        style={[styles.flowerRight, styles.flower]}
      />

      {/* Data from paymentDetails displayed as a row */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Payment Summary</Text>

        <DetailRow label="Name" value={paymentDetails.name} />
        <DetailRow label="Email" value={paymentDetails.email} />
        <DetailRow label="Date and Time" value={paymentDetails.dateOfPayment} />
        <DetailRow
          label="Number of People"
          value={paymentDetails.numberOfTables}
        />
        <DetailRow
          label="Restaurant Name"
          value={paymentDetails.restaurantName}
        />
        <DetailRow label="Working Hours" value={paymentDetails.timeslot} />
        <DetailRow label="Location" value={paymentDetails.location} />
        <DetailRow label="Total Amount" value={paymentDetails.amount} />
      </View>

      {/* Checkout button */}
      <View style={styles.addButtonWrapper}>
        <Pressable
          style={styles.addButton}
          onPress={async () => {
            try {
              // Call the function to submit payment details
              await submitPaymentDetails();

              // Proceed with navigation after payment details are submitted
              router.push({
                pathname: "./paymentPage",
                params: {
                  setShowPaystack: setShowPaystack,
                  showPaystack: showPaystack,
                  amount: paymentDetails.amount,
                  email: paymentDetails.email,
                },
              });

              setShowPaystack(true);
            } catch (error) {
              console.error("Error submitting payment details:", error);
            }
          }}
        >     
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
    backgroundColor: "#F5F5F5",
  },
  contentContainer: {
    padding: 20,
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },
  labelLeft: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
    flex: 1,
  },
  valueRight: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    textAlign: "right",
    flex: 1,
  },
  flower: {
    position: "absolute",
    width: 100,
    height: 100,
    opacity: 0.6,
  },
  flowerLeft: {
    top: 20,
    left: 20,
    transform: [{ rotate: "45deg" }],
  },
  flowerRight: {
    top: 20,
    right: 20,
    transform: [{ rotate: "-45deg" }],
  },
  addButtonWrapper: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  addButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    gap: 5,
    width: "100%",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default PaymentSummaryPage;
