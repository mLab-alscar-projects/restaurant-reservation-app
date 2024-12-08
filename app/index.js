import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator} from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import SplashScreenChild from '../Components/splash';

export default function Index() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true); 

  // Render SplashScreen and Navigate to registerPage
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); 
      router.push("/homePage"); 
    }, 3000); 

    return () => clearTimeout(splashTimeout); 
  }, []);

// Display splash screen
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {showSplash && <SplashScreenChild />}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
