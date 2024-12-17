import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';


// SCREEN
import SplashScreenChild from '../Components/SplashScreen';

export default function Index() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true); 

  // Render SplashScreen and Navigate to registerPage
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); 
      router.push("/loginPage"); 
    }, 3000); 

    return () => clearTimeout(splashTimeout); 
  }, []);



// Beginning of rendered Components
  return (
    <View style={styles.splashContainer}>

      <View style={styles.splashLogo}>
        <StatusBar style="auto" />
        {showSplash && <SplashScreenChild />}
        <Text style={styles.Text}>Alscar Tables</Text>
        
      </View>

      <ActivityIndicator size="large" color="#0000ff" />

      
    </View>
  );
}

// End of rendered Components


// Styles
const styles = StyleSheet.create({
  // SPLASH
  splashContainer: 
  {
      flex: 1,
      backgroundColor: '#97CBDC',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40
  },
  splashLogo: 
  {
      width: '100%',
      height: 400,
      padding: 50,
      gap: 30
  },

   // TEXT
   Text: 
   {
       fontSize: 24,
       letterSpacing: 3,
       fontWeight: 'bold',
       textTransform: 'uppercase',
       width: '100%',
       textAlign: 'center',
       color: '#231934',

   },

   // ENDS

  

});
