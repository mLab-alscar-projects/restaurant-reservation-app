import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, ActivityIndicator } from 'react-native';

// STYLES
import styles from '../StylesSheet/styles';
import Toast from 'react-native-toast-message';
// ENDS

// ROUTER
import { useRouter } from 'expo-router';
// ENDS

// BACKEND CONNECTIONS
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ENDS

// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// ENDS

const LoginPage = () => {
    // States
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [isLoading, setIsLoading] = useState(false);
  
    // Function
    const handleLogin = async () => {

        setIsLoading(true);
        try {
            const response = await axios.post(
                'https://lumpy-clover-production.up.railway.app/api/user/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            //  EXTRACT TOKEN
            const token = response.data.token
           
            // SAVE TOKEN TO LOCAL STORAGE
            await AsyncStorage.setItem('userToken', token);

            Toast.show({
                type: 'success', 
                text1: `Welcome back, ${email}!`,
                text2: 'You have successfully logged in.',
                position: 'bottom',
              });
            setPassword('');
            setEmail('');

            // NAVIGATE
            router.push("/homePage");

        } catch (error) {
            console.error(error);
            Toast.show({
                type: 'error', 
                text1: `Login failed. Please try again.`,
                text2: error.response?.data?.message,
                position: 'bottom',
              });
            
        } finally
        {
            setIsLoading(false);
        }
    }

    // Rendered Components 
    return (
        <View style={styles.Parentlogin}>
            {/* FIRST CHILD */}
            <View style={styles.firstChildlogin}>
                <View style={styles.siblinglogin}>
                    <SplashScreenChild />
                </View>
                <View style={styles.skewedBottomlogin}>
                    <Text style={styles.Text}>Alscar Tables</Text>
                </View>
            </View>

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
                        value={email}
                        onChangeText={setEmail}
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
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <Pressable style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
                        <Text style={styles.togglePasswordText}>
                            <MaterialCommunityIcons name= {showPassword ? 'eye-off' : 'eye'}  size={25} color={'rgba(0, 0, 0,.5)'}/>
                        </Text>
                    </Pressable>
                </View>

                {/* BUTTON */}
                <View style={styles.buttonWrapperlogin}>
                    <Pressable style={styles.buttonlogin} onPress={handleLogin}> 
                        <Text style={styles.buttonTextlogin}>{isLoading ? <ActivityIndicator size={'small'} color={'#333'}/> : "Login"}</Text> 
                    </Pressable>
                </View>

                {/* BUTTONS */}
                <View style={styles.lastChildlogin}>
                    <Pressable onPress={() => router.push("./resetPage")}> 
                        <Text style={styles.forgottenPasswordTextlogin}>Forgot Password?</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push("./registerPage")}> 
                        <Text style={styles.forgottenPasswordTextlogin}>Don't Have an Account? Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default LoginPage;
