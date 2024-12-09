import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import SplashScreenChild from '../Components/SplashScreen';

export default function Index() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true); 

  // Render SplashScreen and Navigate to registerPage
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); 
      router.push("/LoginScreen"); 
    }, 3000); 

    return () => clearTimeout(splashTimeout); 
  }, []);

// Display splash screen
  return (
    <View style={styles.splashContainer}>

      <View style={styles.splashLogo}>
        <StatusBar style="auto" />
        {showSplash && <SplashScreenChild />}
      </View>

      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({

  // SPLASH
  splashContainer: 
  {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40
  },


  splashLogo: 
  {
      width: '100%',
      height: 400,
      padding: 50
  },

  // ENDS

});
