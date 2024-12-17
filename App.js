import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { createContext,} from 'react';
import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';

// A context to pass props anywhere in our application
export const AppContext = createContext();

export default function App() {
  

  return (
    <AppContext.Provider value={{ restaurantsData, setRestaurantsData }}>
      <View style={styles.container}>
        <Slot /> 

        {/* TOAST CONTAINER */}
        <View style={styles.toast}>
          <Toast />
        </View>
        {/* ENDS */}
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  TOAST
  toast:
  {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    zIndex: 1
  }

  // ENDS
});
