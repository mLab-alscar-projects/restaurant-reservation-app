import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

function Payment() {
  const [showPaystack, setShowPaystack] = useState(false); // State to control Paystack visibility
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Button to show the Paystack WebView */}
      <Button
        title="Pay with Paystack"
        onPress={() => setShowPaystack(true)} // Show Paystack WebView when clicked
      />

      {showPaystack && (
        <Paystack
          paystackKey="pk_test_f73c293f14c859435bc6fe2aa081938ac5326239"
          amount={'5000.00'}
          billingEmail="paystackwebview@something.com"
          currency="ZAR"
          activityIndicatorColor="green"
          onCancel={() => {
            Alert.alert('Payment Canceled', 'You have canceled the payment process.');
            setShowPaystack(false); // Hide Paystack WebView on cancel
          }}
          onSuccess={(res) => {
            Alert.alert('Payment Successful', `Transaction ID: ${res.transactionRef.reference}`);
            setShowPaystack(false); // Hide Paystack WebView on success

            // Navigate back to the homepage
            navigation.navigate('homePage'); // Replace 'HomePage' with your home route name
          }}
          autoStart={true} // Automatically start the payment process
        />
      )}
    </View>
  );
}

export default Payment;

