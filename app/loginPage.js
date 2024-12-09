import React from 'react';
import {  Text, View, Pressable, TextInput } from 'react-native';
import styles from '../StylesSheet/styles';
import { useRouter } from 'expo-router';
// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Functional component start
const LoginPage = () => {
 
    
 const router = useRouter();
  
 return (
    <View style={styles.Parentlogin}>

        {/* FIRST CHILD */}
        <View style={styles.firstChildlogin}>
            <View style={styles.siblinglogin}>
                <SplashScreenChild />
            </View>
            <View style={styles.skewedBottomlogin} />
        </View>
        {/* ENDS */}

        {/* SECOND CHILD */}
        <View style={styles.secondChildlogin}>

            {/* EMAIL */}
            <View style={styles.inputWrapperlogin}>
                <View style={styles.labellogin}> 
                    <Zocial name='email' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextlogin}>Email</Text>
                </View>
                <TextInput
                    style={styles.inputlogin}
                />
            </View>

            {/* PASSWORD */}
            <View style={styles.inputWrapperlogin}>
                <View style={styles.labellogin}> 
                    <MaterialIcons name='lock' size={20} color={'rgba(0, 0, 0,.5)'}/>
                    <Text style={styles.labelTextlogin}>Password</Text>
                </View>
                <TextInput
                    style={styles.inputlogin}
                />
            </View>

            {/* BUTTON */}
            <View style={styles.buttonWrapperlogin}>

            <Pressable style={styles.buttonlogin} onPress={()=>  router.push("/homePage")}> 
                    <Text style={styles.buttonTextlogin}>Login</Text>
                </Pressable>
        
            </View>

            {/* BUTTON */}
            <View style={styles.lastChildlogin}>

                <Pressable onPress={()=> router.push("./resetPage")}> 
                    <Text style={styles.forgottenPasswordTextlogin}>Forgot Password ?</Text>
                </Pressable>

                <Pressable onPress={()=> router.push("./registerPage")}> 
                    <Text style={styles.forgottenPasswordTextlogin}>Dont Have an Account? Sign in
                    </Text>
                </Pressable>
        
            </View>

        </View>
        {/* ENDS */}
      
    </View>
  );
};


// ENDS

export default LoginPage;