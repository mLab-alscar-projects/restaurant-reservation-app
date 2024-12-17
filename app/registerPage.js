import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, Alert, ActivityIndicator } from 'react-native';

// STYLES
import styles from '../StylesSheet/styles';
import Toast from 'react-native-toast-message';
// ENDS

// ENDPOINTS HANDLER
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ENDS

// ROUTER
import { useRouter } from 'expo-router';
// ENDS

// SCREENS
import SplashScreenChild from '../Components/SplashScreen';

// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const RegisterPage = () => {
  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);

  // ROUTER
  const router = useRouter();
  

  // LOGIN FUNCTION
  // Function
  const handleLogin = async () => {

    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://lumpy-clover-production.up.railway.app/api/user/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // show the user token
      console.log(response.data);

      // Extract the token and store it in the local storage
      const token = response.data.token

      await AsyncStorage.setItem('userToken', token);

      // Welcome message
      Toast.show({
        type: 'success',
        text1: `Welcome back, ${email}!`,
        text2: 'You have successfully logged in.',
        position: 'bottom',
      });
      setPassword('');
      setEmail('');
      router.push("/homePage")
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: `Login failed. Please try again.`,
        text2: error.response?.data?.message,
        position: 'bottom',
      });

    } finally {
      setIsLoading(false);
    }
  }
  // ENDS

  // REGISTER FUNCTION
  const handleRegister = async () => {

    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://lumpy-clover-production.up.railway.app/api/user/register',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      Toast.show({
        type: 'success',
        text1: `Congradulations, ${email}!`,
        text2: 'Registration completed!',
        position: 'bottom',
      });

      await handleLogin(response.data.email, response.data.password);

      setPassword('');
      setEmail('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Registration failed. Please try again.');
      Toast.show({
        type: 'error',
        text1: `Registration failed. Please try again.`,
        text2: error.response?.data?.message,
        position: 'bottom',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.Parentregister}>
      {/* FIRST CHILD */}
      <View style={styles.firstChildregister}>
        <View style={styles.siblingregister}>
          <SplashScreenChild />
        </View>
        <View style={styles.skewedBottomregister} >
          <Text style={styles.Text}>Alscar Tables</Text>
        </View>
      </View>
      {/* ENDS */}

      {/* SECOND CHILD */}
      <View style={styles.secondChildregister}>
        {/* EMAIL */}
        <View style={styles.inputWrapperregister}>
          <View style={styles.labelregister}>
            <Zocial name="email" size={20} color={'rgba(0, 0, 0,.5)'} />
            <Text style={styles.labelTextregister}>Email</Text>
          </View>
          <TextInput
            style={styles.inputregister}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputWrapperregister}>
          <View style={styles.labelregister}>
            <MaterialIcons name="lock" size={20} color={'rgba(0, 0, 0,.5)'} />
            <Text style={styles.labelTextregister}>Password</Text>
          </View>
          <TextInput
            style={styles.inputregister}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Enter your password"
          />
          <Pressable style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.togglePasswordText}>
                <MaterialCommunityIcons name= {showPassword ? 'eye-off' : 'eye'}  size={25} color={'rgba(0, 0, 0,.5)'}/>
              </Text>
          </Pressable>
        </View>

        {/* BUTTON */}
        <View style={styles.buttonWrapperregister}>
          <Pressable style={styles.buttonregister} onPress={handleRegister}>
            <Text style={styles.buttonTextregister}>{isLoading ? <ActivityIndicator size={'small'} color={'#333'}/> : "REGISTER"}</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.push("./loginPage")}> 
            <Text style={styles.forgottenPasswordTextlogin}>Already Have an Account? Sign in</Text>
        </Pressable>
      </View>
      {/* ENDS */}
    </View>
  );
};

export default RegisterPage;
