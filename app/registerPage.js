import React from 'react';
import {  Text, View, Pressable, TextInput } from 'react-native';
import styles from '../StylesSheet/styles';

// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



// Functional component start
const RegisterPage = () => {

 return (
    <View style={styles.Parentregister}>

        {/* FIRST CHILD */}
        <View style={styles.firstChildregister}>
            <View style={styles.siblingregister}>
                <SplashScreenChild />
            </View>
            <View style={styles.skewedBottomregister} />
        </View>
        {/* ENDS */}

        {/* SECOND CHILD */}
        <View style={styles.secondChildregister}>

            {/* EMAIL */}
            <View style={styles.inputWrapperregister}>
                <View style={styles.labelregister}> 
                    <Zocial name='email' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextregister}>Email</Text>
                </View>
                <TextInput
                    style={styles.inputregister}
                />
            </View>



            {/* PHONENUMBER */}
            <View style={styles.inputWrapperregister}>
                <View style={styles.labelregister}> 
                    <MaterialIcons name='lock' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextregister}>Phone</Text>
                </View>
                <TextInput
                    style={styles.inputregister}
                />
            </View>

            {/* PASSWORD */}
            <View style={styles.inputWrapperregister}>
                <View style={styles.labelregister}> 
                    <MaterialIcons name='lock' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextregister}>Password</Text>
                </View>
                <TextInput
                    style={styles.inputregister}
                />
            </View>

            {/* BUTTON */}
            <View style={styles.buttonWrapperregister}>

            <Pressable style={styles.buttonregister} > 
                    <Text style={styles.buttonTextregister}>Register</Text>
                </Pressable>
        
            </View>

            {/* BUTTON */}

        </View>
        {/* ENDS */}
      
    </View>
  );
};


// ENDS

export default RegisterPage;