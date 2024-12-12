import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, Alert } from 'react-native';
import styles from '../StylesSheet/styles';
import { useRouter } from 'expo-router';
import axios from 'axios';
// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginPage = () => {
    // States
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  
    // Function
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://lumpy-clover-production.up.railway.app/api/user/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(response.data);
            Alert.alert('Success', 'Login successful!');
            setPassword('');
            setEmail('');
            router.push("/homePage")
        } catch (error) {
            console.error(error);
            Alert.alert('Error', error.response?.data?.message || 'Login failed. Please try again.');
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
                <View style={styles.skewedBottomlogin} />
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
                        secureTextEntry={!showPassword} // Toggle visibility
                    />
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Text style={styles.togglePasswordText}>Show/Hide</Text>
                    </Pressable>
                </View>

                {/* BUTTON */}
                <View style={styles.buttonWrapperlogin}>
                    <Pressable style={styles.buttonlogin} onPress={handleLogin}> 
                        <Text style={styles.buttonTextlogin}>Login</Text>
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
