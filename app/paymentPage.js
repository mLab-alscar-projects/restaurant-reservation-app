import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
import { useNavigation } from '@react-navigation/native'; 
import { useLocalSearchParams } from 'expo-router';


function Payment() {
  const {setShowPaystack, showPaystack, amount, email} = useLocalSearchParams ();
  const [isPaystackVisible, setIsPaystackVisible] = useState(showPaystack || false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsPaystackVisible(showPaystack || false);
  }, [showPaystack]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {isPaystackVisible  && (
        <Paystack
          paystackKey="pk_test_f73c293f14c859435bc6fe2aa081938ac5326239"
          amount={amount}
          billingEmail= {email}
          currency="ZAR"
          activityIndicatorColor="green"
          onCancel={() => {
            Alert.alert('Payment Canceled', 'You have canceled the payment process.');
            setIsPaystackVisible(false); 
            
            navigation.navigate('homePage'); 
          }}
          onSuccess={(res) => {
            Alert.alert('Payment Successful', `Transaction ID: ${res.transactionRef.reference}`);
            setIsPaystackVisible(false); 

            navigation.navigate('homePage'); 
          }}
          autoStart={true}
        />
      )}
    </View>
  );
}

export default Payment;

