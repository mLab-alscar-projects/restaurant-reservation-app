import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  User,
  Settings,
  LogOut,
  Edit2,
  CreditCard,
  HelpCircle,
  Shield
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import ProfileModal from '../Components/profilemodal';
import FeedbackForm from '../Components/formmodal';
import TermsAndConditions from '../Components/policiesmodal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const ProfileScreen = () => {
  // Hooks
  const router = useRouter();

  // STATES
  const [modalProfile, setModalProfile] = useState(false);
  const [modalform, setModalform] = useState(false);
  const [modalpolicies, setModalpolicies] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useState({
    name: "Alson",
    email: "oscar@gmail.com",
    phoneNumber: '09283891393',
    profileImage: require('../assets/Burger.jpg'),
    memberSince: "23 December 2024",
    totalReservations: 1,
    loyaltyPoints: 560
  });


  // Functions
  const EditNameandPhone = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");
  
      if (!token) {
        throw new Error("No token found");
      }
  
      console.log("Token Retrieved:", token);
  
      const response = await axios.put(
        "https://lumpy-clover-production.up.railway.app/api/update-profile",
        { name, phoneNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        Alert.alert("Success", "Profile updated successfully!");
        console.log("Updated Data:", response.data);
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      Alert.alert("Error", error.message || "Unauthorized: Please log in again.");
    } finally {
      setIsLoading(false);
    }
  };
  
 
//  Buttons Array
  const menuItems = [
    {
      title: "Edit Profile",
      subtitle: "Update your personal information",
      icon: <Edit2 color="#2c3e50" size={24} />
    },
    {
      title: "Privacy & Security",
      subtitle: "Control your account security",
      icon: <Shield color="#2c3e50" size={24} />
    },
    {
      title: "Help & Support",
      subtitle: "Get assistance and ask questions",
      icon: <HelpCircle color="#2c3e50" size={24} />
    },
    {
      title: "Logout",
      subtitle: "Securely exit your account",
      destructive: true,
      icon: <LogOut color="#e74c3c" size={24} />
    }
  ];


  const handleLogout= ()=>{
    router.push("/loginPage")
  }

  const handleProfile = ()=>{
    setModalProfile(true)
  }

  const handleForm =()=>{
    setModalform(true)
  }

  const handlePolicies = ()=>{
    setModalpolicies(true)
  }



// Beginning of rendered Components
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1e3c72', '#2a5298']}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <View style={styles.profileHeaderSection}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={user.profileImage} 
                style={styles.profileImage} 
              />
              <Pressable style={styles.editProfileButton}>
                <User color="white" size={18} />
              </Pressable>
            </View>
            
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
            <Text style={styles. profileNumber}>{user.phoneNumber}</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.totalReservations}</Text>
              <Text style={styles.statLabel}>Liked</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.loyaltyPoints}</Text>
              <Text style={styles.statLabel}>Shared</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.memberSince}</Text>
              <Text style={styles.statLabel}>Date</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((item, index) => (
          <Pressable 
            key={index} 
            style={[
              styles.menuItem, 
              item.destructive && styles.destructiveMenuItem
            ]}
            onPress={()=>{
              if (item.title === "Logout"){
                handleLogout()
              }
              if (item.title === "Edit Profile"){
                 handleProfile()
              } if (item.title === "Help & Support"){
                handleForm()
              } if (item.title === "Privacy & Security")
                handlePolicies()
            }}
          >
            <View style={styles.menuItemIcon}>
              {item.icon}
            </View>

            <View style={styles.menuItemText}>
              <Text style={[
                styles.menuItemTitle, 
                item.destructive && styles.destructiveMenuItemTitle
              ]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemSubtitle}>
                {item.subtitle}
              </Text>
            
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Profile Modal Pop up */}
      {modalProfile && 
      <ProfileModal 
      modalProfile={modalProfile}
      setModalProfile={setModalProfile}
      name={name}
      setName={setName}
      phoneNumber={phoneNumber}
      setphoneNumber={setphoneNumber}
      EditNameandPhone ={EditNameandPhone}
      />}

      {
        modalform && 
        <FeedbackForm
        modalform={modalform}
        setModalform={setModalform}
        />
      }

      {
        modalpolicies && 
        <TermsAndConditions
        setModalpolicies={setModalpolicies} 
        modalpolicies={modalpolicies}
        />
      }
    </View>
  );
};
// END


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fa',
  },
  headerBackground: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  settingsButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  profileHeaderSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
  },
  editProfileButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3498db',
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  profileNumber:{
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginTop:10
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destructiveMenuItem: {
    backgroundColor: '#ffebee',
  },
  menuItemIcon: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f4f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  destructiveMenuItemTitle: {
    color: '#e74c3c',
  },
  menuItemSubtitle: {
    fontSize: 13,
    color: '#7f8c8d',
  },
});

export default ProfileScreen;
