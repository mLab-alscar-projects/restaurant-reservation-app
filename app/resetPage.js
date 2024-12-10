import React from 'react';
import {  Text, View, Pressable, TextInput } from 'react-native';
import styles from '../StylesSheet/styles';

// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const ResetPage = () => {


// Beginning of rendered Components
 return (
    <View style={styles.Parentreset}>

        {/* FIRST CHILD */}
        <View style={styles.firstChildreset}>
            <View style={styles.siblingreset}>
                <SplashScreenChild />
            </View>
            <View style={styles.skewedBottomreset} />
        </View>
        {/* ENDS */}

        {/* SECOND CHILD */}
        <View style={styles.secondChildreset}>

            {/* EMAIL */}
            <View style={styles.inputWrapperreset}>
                <View style={styles.labelregister}> 
                    <Zocial name='email' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextreset}>Email</Text>
                </View>
                <TextInput
                    style={styles.inputreset}
                />
            </View>

            {/* BUTTON */}
            <View style={styles.buttonWrapperreset}>

                <Pressable style={styles.buttonreset} onPress={()=> router.push("./resetPage")}> 
                        <Text style={styles.buttonTextreset}>Reset</Text>
                </Pressable>
            
            </View>

        </View>
      
    </View>
  );
};
// ENDS

export default ResetPage;