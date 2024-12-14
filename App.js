import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { createContext,} from 'react';
import { Slot } from 'expo-router';

// A context to pass props anywhere in our application
export const AppContext = createContext();

export default function App() {
  

  return (
    <AppContext.Provider value={{ restaurantsData, setRestaurantsData }}>
      <View style={styles.container}>
        <Slot /> {/* Expo Router renders the active page here */}
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
});
