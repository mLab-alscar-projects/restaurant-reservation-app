import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, Alert } from 'react-native';
import styles from '../StylesSheet/styles';
import axios from 'axios';
// SCREENS
import SplashScreenChild from '../Components/SplashScreen';
// ICONS
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const RegisterPage = () => {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Functions
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'https://lumpy-clover-production.up.railway.app/api/user/register',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      Alert.alert('Success', 'Registration completed!');

      setPassword('')
      setEmail('')
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

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
            secureTextEntry
            placeholder="Enter your password"
          />
        </View>

        {/* BUTTON */}
        <View style={styles.buttonWrapperregister}>
          <Pressable style={styles.buttonregister} onPress={handleRegister}>
            <Text style={styles.buttonTextregister}>Register</Text>
          </Pressable>
        </View>
      </View>
      {/* ENDS */}
    </View>
  );
};

export default RegisterPage;
