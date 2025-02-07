import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const SplashScreenChild = () => {
 
  return (
    <View style={styles.Parent}>
        <View style={styles.firstChild}>
            <Image source={require('../assets/splashIcon.jpg')} style={styles.image} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

    // PARENT
    Parent: 
    {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: '#3498db',
        padding: 0,
        margin: 0,
    },
    // ENDS

    // FIRST
    firstChild: 
    {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        gap: 30
    },

    // ENDS
    
    
    // IMAGE
    image: 
    {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },

    // ENDS


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
        // transform: [{ rotate: '-8deg' }], 
    },

    // ENDS
    
    
});

export default SplashScreenChild;