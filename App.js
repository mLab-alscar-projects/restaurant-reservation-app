// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { UserProvider } from './AppContext';
import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <UserProvider>
       <View style={styles.container}>
        <Slot /> {/* This will render the current route */}
        
        {/* TOAST CONTAINER */}
        <View style={styles.toast}>
          <Toast />
        </View>
        {/* ENDS */}
      </View>  
    </UserProvider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // TOAST
  toast: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    zIndex: 1
  }

  // ENDS
});
