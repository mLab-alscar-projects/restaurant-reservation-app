import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../StylesSheet/styles';

const SplashScreenChild = () => {
 
  return (
    <View style={styles.ParentSplash}>
        <View style={styles.firstChildSplash}>
            <Image source={require('../assets/location-pin.png')} style={styles.image} />
            <Text style={styles.TextSplash}>Alscar Tables</Text>
        </View>
    </View>
  );
};



export default SplashScreenChild;