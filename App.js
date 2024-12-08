import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { createContext } from 'react';
import { Slot } from 'expo-router';

//A context to pass props anywhere in our application
export const AppContext = createContext();

export default function App() {
  const globalProps = { userType: 'guest', theme: 'light' };

  return (
    <AppContext.Provider value={globalProps}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <Slot /> 
        
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